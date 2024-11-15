import prisma from "../db";

// GET all vehicle types
export const getVehicleTypes = async (req, res) => {
    console.log(req.user.id);
    const rentalOfficeId = req.params.id
    const vehicleTypes = await prisma.vehicleType.findMany({
        where: {
            rentalOfficeId: rentalOfficeId
        }
    })

    res.success(vehicleTypes)
}

export const createVehicleType = async (req, res) => {
    const rentalOfficeId = req.params.roid
    const rentalOffice = await prisma.rentalOffice.findUnique({
        where: {
            id: rentalOfficeId
        }
    })

    if(!rentalOffice) {
        return res.json({message: 'nope'})
    }

    const vehicleType = await prisma.vehicleType.create({
        data: {
            rentalOfficeId: rentalOfficeId,
            type: req.body.type
        }
    });

    res.success(vehicleType);
}

export const updateVehicleType = async (req, res) => {
    const rentalOfficeId = req.params.roid
    const rentalOffice = await prisma.rentalOffice.findUnique({
        where: {
            id: rentalOfficeId
        }
    })

    if(!rentalOffice) {
        return res.json({message: 'nope'})
    }

    const vehicleType = await prisma.vehicleType.update({
        where: {
            id: req.params.id
        },
        data: {
            rentalOfficeId: rentalOfficeId,
            type: req.body.type
        }
    });

    res.success(vehicleType);
}

export const deleteVehicleType = async (req, res) => {
    const deleted = await prisma.vehicleType.delete({
        where: {
            id: req.params.id
        }
    });

    res.success(deleted);
}
