import lab from '../model/labModel.js'

export const addLab = async (req, res) => {
    const { labItemName, labType, mainCategory, subCategory, labItemCode, price } = req.body
    
    const labTypeValue = labType.value;
    const mainCatValue = mainCategory.value

    // convert price to decimals
    const decimalPrice = parseFloat(price).toFixed(2);
 
    try {
        const labEntry = new lab({
            labItemName, labType: labTypeValue, mainCategory: mainCatValue, subCategory, labItemCode, price: decimalPrice
        })
        const result = await labEntry.save()
        res.status(201).send(result)
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: "Failed to add lab item", error })
    }
}

export const getLabs = async (req, res) => {
    try {
       const labs = await lab.find()
       res.send(labs) 
    } catch (error) {
        console.log(error);
    }
}

export const getLab = async (req, res) => {
    const { id } = req.params

    try {
        const newLab = await lab.findById(id)
        res.send(newLab)
    } catch (error) {
        console.log(error);
    }
}

export const updateLab = async (req, res) => {
    const { id } = req.params

    try {
        const updatedLab = await lab.findByIdAndUpdate({_id: id}, req.body, { returnOriginal: false})
        if (!updatedLab) {
            return res.status(404).json({ error: 'Lab not found'})
        }
        res.json(updatedLab)
    } catch (error) {
        console.log(error);
    }
}


export const deleteLab = async (req, res) => {
    const { id } = req.params

    try {
        const deletedLab = await lab.findByIdAndDelete(id)
        if (deletedLab) res.send(deletedLab)
    } catch (error) {
        console.log(error);
    }
}


export const getLabType = async (req, res) => {
    try {
        const labCount = await lab.aggregate([
            {
                $group: {
                    _id: '$labType',
                    count: { $sum: 1},
                },
            },
        ]);

        if (!labCount || labCount.length === 0) {
            return res.status(404).json({ message: "Lab not found" })
        }

        const labAccumulator = labCount.reduce(
            (acc, {_id, count }) => {
                acc[_id] = count;
                return acc;
            },
            {}
        )
        res.status(200).json(labAccumulator);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message})
    }
}