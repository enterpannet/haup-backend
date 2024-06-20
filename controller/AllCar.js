import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export const getAllCar = async (req, res) => {
    try {
        const allCar = await prisma.allCar.findMany()
        // res.status(200).json("allCar")
        res.status(200).json(allCar)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}
export const getCarById = async (req, res) => {
    const { id } = req.params
    try {
        const car = await prisma.allCar.findUnique({
            where: { id }
        })
        res.status(200).json(car)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}
export const createNewCar = async (req, res) => {
    const { brand, car_models, car_registration, description } = req.body;
    try {
        const newCar = await prisma.allCar.create({
            data: {
                brand, car_models, car_registration, description
            },
        })
        res.status(201).json(newCar)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
export const updateCar = async (req, res) => {
    const { id } = req.params
    const { brand, car_models, car_registration, description } = req.body;
    try {
        const updateCar = await prisma.allCar.update({
            where: { id },
            data: {
                brand, car_models, car_registration, description
            }
        })
        res.status(200).json(updateCar)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
export const deleteCar = async (req, res) => {
    const { id } = req.params
    try {
        const deleteCar = await prisma.allCar.delete({ where: { id } })
        res.status(204).json(deleteCar)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}