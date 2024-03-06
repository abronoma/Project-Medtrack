import { Router } from 'express'
import { addLab, deleteLab, getLab, getLabType, getLabs, updateLab } from '../controller/labController.js'

const labRouter = Router()

labRouter.get('/getLabs', getLabs)
labRouter.get('/getLab/:id', getLab)
labRouter.get('/labCount', getLabType)
labRouter.post('/addLab', addLab)
labRouter.put('/updateLab/:id', updateLab)
labRouter.delete('/deleteLab/:id', deleteLab)


export default labRouter