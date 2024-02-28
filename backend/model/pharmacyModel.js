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

    unitOfPricing : {
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
    timestamps: true,
})

const lab = mongoose.model('lab', labSchema)
// console.log(pharmacy.findById('65c772e62b6f55bd5fe27b5b'));
export default lab