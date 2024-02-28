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
        type: Number,
        required: true,
        // set: (value) => value.toUpperCase(),
    },

    Price : {
        type: Number,
        required: true
    },
},
{    
    timestamps: true
})

const lab = mongoose.model('lab', labSchema)
console.log(lab.findById(''));
export default lab