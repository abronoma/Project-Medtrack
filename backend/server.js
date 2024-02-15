import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
import router from "./route/pharmRoutes.js";
import labRouter from "./route/labRoutes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT
const mongoURL = process.env.MONGO_URI

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use('/api', router)
app.use('/api', labRouter)


// db connection
mongoose.connect(mongoURL).then((result) => {
    if (result) console.log('Connected to mongodb')
})
.catch((err) => {
    console.log(err);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});