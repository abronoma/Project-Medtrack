import mongoose, { Schema } from "mongoose";

const labSchema = new Schema({
    labItemName : {
        type: String,
        required: true
    },

    mainCategory : {
        type: String,
        required: true
    },

    subCategory : {
        type: String,
        required: true
    },

    labItemCode : {
        type: String,
        required: true,
        set: (value) => value.toUpperCase(),
    },

    price : {
        type: Number,
        required: true
    },
},
{    
    timestamps: true
})

const lab = mongoose.model('lab', labSchema)

export default pharmacy