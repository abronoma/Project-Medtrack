import pharmacy from "../model/pharmacyModel.js";
// import PharmacyModel from "../model/pharmacyModel.js"

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


// fetching data for pie chart
export const getPrice = async (req, res) => {
    try {
        const priceCount = await pharmacy.aggregate([
            {
                $group: {
                    _id: '$price',
                    count: { $sum: 1},
                },
            },
        ]);
        console.log(priceCount);

        if (!priceCount || priceCount.length === 0) {
            return res.status(404).json({ message: "Price not found" })
        }

        const priceAccumulator = priceCount.reduce(
            (acc, {_id, count }) => {
                acc[_id] = count;
                return acc;
            },
            {}
        )
        console.log(priceAccumulator);
        res.status(200).json(priceAccumulator);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message})
    }
}
