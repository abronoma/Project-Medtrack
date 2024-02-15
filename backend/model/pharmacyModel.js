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
        type: Number,
        required: true,
        // set: (value) => value.toUpperCase(),
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
// console.log(pharmacy.findById('65c772e62b6f55bd5fe27b5b'));
export default pharmacy