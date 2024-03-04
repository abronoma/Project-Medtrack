import lab from '../model/labModel.js'

export const addLab = async (req, res) => {
    const { labItemName, labType, mainCategory, subCategory, labItemCode, price } = req.body
    
    const labTypeValue = labType.value;

    try {
        const labEntry = new lab({
            labItemName, labType: labTypeValue, mainCategory, subCategory, labItemCode, price
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