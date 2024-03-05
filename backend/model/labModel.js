import mongoose, { Schema } from "mongoose";

const labSchema = new Schema({
    labItemName : {
        type: String,
        required: true,
        set: (value) => value.charAt(0).toUpperCase() + value.slice(1)
    },

    labType: {
        type: String,
        required: true,
        set: (value) => value.charAt(0).toUpperCase() + value.slice(1)
    },

    mainCategory : {
        type: String,
        required: true,
        set: (value) => value.charAt(0).toUpperCase() + value.slice(1)
    },

    subCategory : {
        type: String,
        required: true,
        set: (value) => value.charAt(0).toUpperCase() + value.slice(1)
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
    timestamps: true,
})

const lab = mongoose.model('lab', labSchema)
export default lab