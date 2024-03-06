import pharmacy from "../model/pharmacyModel.js";

export const addDrug = async (req, res) => {
    const { 
        drugName, description, unitOfPricing, drugCode, price
    } = req.body

    // Extract the value from the unitOfPricing object
    const unitOfPricingValue = unitOfPricing.value;

    // convert price to decimals
    const decimalPrice = parseFloat(price).toFixed(2);
    
    try {
        const drugEntry = new pharmacy({
            drugName, description, unitOfPricing: unitOfPricingValue, drugCode, price: decimalPrice
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
        const topExpensiveDrugs = await pharmacy.aggregate([
            {
                $group: {
                    _id: { price: '$price', drugName: '$drugName' },
                    count: { $sum: 1},
                },
            },
            {
               $sort: { 'count': -1 } 
            },
            {
                $limit: 5
            },
        ]);
        console.log(topExpensiveDrugs);

        if (!topExpensiveDrugs || topExpensiveDrugs.length === 0) {
            return res.status(404).json({ message: "Prices not found" })
        }

        const priceAccumulator = topExpensiveDrugs.reduce(
            (acc, {_id, count }) => {
                const { price, drugName } = _id;
                const key = `${price} - ${drugName}`;
                acc[key] = count;
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
