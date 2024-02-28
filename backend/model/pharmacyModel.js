import mongoose, { Schema } from "mongoose";

const labSchema = new Schema({
    labItemName : {
        type: String,
        required: true,
    },

    mainCategory : {
        type: String,
        required: true
    },

    unitOfPricing : {
        type: String,
        required: true
    },

    drugCode : {
        type: String,
        required: true,
        set: (value) => value.toUpperCase(),
    },

    Price : {
        type: Number,
        required: true
    },
},
{    
    timestamps: true,
})

const pharmacy = mongoose.model('pharmacy', pharmacySchema)
export default pharmacy