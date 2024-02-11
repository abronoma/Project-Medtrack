import pharmacy from "../model/pharmacyModel.js";

export const addDrug = async (req, res) => {
    const { 
        drugName, description, unitOfPricing, drugCode, price
    } = req.body
    
    try {
        const drugEntry = new pharmacy({
            drugName, description, unitOfPricing, drugCode, price
        })
        const result = await drugEntry.save()
        res.status(201).send(result)
    } catch (error) {
        console.log(error);
    }
}

export const getDrugs = async (req, res) => {
    try {
        const drugs = await pharmacy.find()
        res.send(drugs)
    } catch (error) {
        console.log(error);
    }
}

export const getDrug = async (req, res) => {
    const { id } = req.params 

    try {
        const drug = await pharmacy.findById(id)
        res.send(drug)
    } catch (error) {
        console.log(error);
    }
}


