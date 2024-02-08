import mongoose, { Schema } from "mongoose";

const pharmacySchema = new Schema({
    drugName : {
        type: String,
        required: true
    },

    description : {
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

    price : {
        type: Number,
        required: true
    },
},
{    
    timestamps: true
})

const pharmacy = mongoose.model('pharmacy', pharmacySchema)

export default pharmacy