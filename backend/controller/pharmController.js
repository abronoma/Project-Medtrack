import pharmacy from "../model/pharmacyModel.js";

export const addDrug = async (req, res) => {
    const { 
        drugName, description, unitOfPricing, drugCode, price
    } = req.body

    // Extract the value from the unitOfPricing object
    const unitOfPricingValue = unitOfPricing.value;
    
    try {
        const drugEntry = new pharmacy({
            drugName, description, unitOfPricing: unitOfPricingValue, drugCode, price
        })
        const result = await drugEntry.save()
        res.status(201).send(result)
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: "Failed to add drug", error })
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

export const updateDrug = async (req, res) => {
    const { id } = req.params

    try {
        const updatedDrug = await pharmacy.findByIdAndUpdate({_id: id}, req.body,{ returnOriginal: false} )
        if (!updatedDrug) {
            return res.status(404).json({ error: 'Drug not found' })
        }
        res.json(updatedDrug)
    } catch (error) {
        console.log(error);
    }
}


export const deleteDrug = async (req, res) => {
    const { id } = req.params
    try {
        const deletedDrug = await pharmacy.findByIdAndDelete(id)
        if (deletedDrug) res.send(deletedDrug)
    } catch (error) {
        console.log(error);
    }
}



