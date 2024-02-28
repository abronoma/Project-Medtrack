import lab from '../model/labModel.js'

export const addLab = async (req, res) => {
    const { labItemName, mainCategory, subCategory, labItemCode, Price } = req.body
    
    try {
        const labEntry = new lab({
            labItemName, mainCategory, subCategory, labItemCode, Price
        })
        const result = await labEntry.save()
        res.status(201).send(result)
    } catch (error) {
        console.log(error);
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