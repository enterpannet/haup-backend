import express from 'express'
import { getAllCar, getCarById, createNewCar, updateCar, deleteCar } from '../controller/AllCar.js'
const router = express.Router()
router.get('/car', getAllCar)
router.get('/car/:id', getCarById)
router.post('/car/add', createNewCar)
router.put('/car/:id', updateCar)
router.delete('/car/:id', deleteCar)
export default router