import mongoose, { Schema } from "mongoose";

const pharmacySchema = new Schema({
    drugName : {
        type: String,
        required: true,
        set: (value) => value.charAt(0).toUpperCase() + value.slice(1)
    },

    description : {
        type: String,
        required: true,
        set: (value) => value.charAt(0).toUpperCase() + value.slice(1)
    },

    unitOfPricing : {
        type: String,
        required: true,
        set: (value) => value.charAt(0).toUpperCase() + value.slice(1)
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
    timestamps: true,
})

const pharmacy = mongoose.model('pharmacy', pharmacySchema)
export default pharmacy