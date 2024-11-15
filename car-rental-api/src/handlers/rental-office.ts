import prisma from "../db";

// GET all rental offices
export const getRentalOffices = async (req, res) => {
    const rentalOffices = await prisma.rentalOffice.findMany()
    res.success(rentalOffices, { count: rentalOffices.length });
}

export const createRentalOffice = async (req, res) => {
    const rentalOffice = await prisma.rentalOffice.create({
        data: {
            address: req.body.address,
            city: req.body.city
        }
    });

    res.success(rentalOffice);
}

export const updateRentalOffice = async (req, res) => {
    const updatedRentalOffice = await prisma.rentalOffice.update({
        where: {
            id: req.params.id
        },
        data: {
            address: req.body.address,
            city: req.body.city
        }
    });

    res.success(updatedRentalOffice);
}

export const deleteRentalOffice = async (req, res) => {
    const deleted = await prisma.rentalOffice.delete({
        where: {
            id: req.params.id
        }
    });

    res.success(deleted)
}
