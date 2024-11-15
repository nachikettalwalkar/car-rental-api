import prisma from "../db";
import { vehicleResponse } from "../models/vehicleResponse";
import { descriptionGenerator } from "../modules/descriptionGenerator";
import { nameGenerator } from "../modules/nameGenerator";
import { priceGenerator } from "../modules/priceGenerator";

// GET all vehicle types
export const getVehicles = async (req, res) => {
    const rentalOfficeId = req.params.roid
    const vehicleTypeId = req.params.vtid
    const startDateQuery = req.query.start_date
    const endDateQuery = req.query.end_date
    
    const vehicles = await prisma.vehicle.findMany({
        where: {
            rentalOfficeId: rentalOfficeId,
            vehicleTypeId: vehicleTypeId,
            AND: [
                {
                    rentalStatus: 'AVAILABLE'
                }
            ]
        }
    });

    const vehicleType = await prisma.vehicleType.findUnique({
        where: {
            id: vehicleTypeId
        }
    })

    const reservationsBetweenRequestedDates = await prisma.reservation.findMany({
        where: {
            vehicleTypeId: vehicleTypeId,
            OR: 
            [
                {
                    startDate: {
                        gte: new Date(startDateQuery),
                        lte: new Date(endDateQuery),
                    },
                },
                {
                    endDate: {
                        gte: new Date(startDateQuery),
                        lte: new Date(endDateQuery),
                    },
                }
            ],
        }
    });
    
    const vehiclesToDelete = vehicles.length - reservationsBetweenRequestedDates.length;
    const availableVehicles = vehicles.splice(vehicles.length - vehiclesToDelete, vehiclesToDelete);
    const vehicleResponse: vehicleResponse[] = availableVehicles.map((vehicle) => {
        return {
            id: vehicle.id,
            licensePlateNo: vehicle.licensePlateNo,
            vehicleTypeId: vehicle.vehicleTypeId,
            subType: vehicle.subType,
            image: vehicle.image,
            rentalStatus: vehicle.rentalStatus,
            rentalOfficeId: vehicle.rentalOfficeId,
            name: nameGenerator(vehicleType.type, vehicle.subType),
            description: descriptionGenerator(vehicleType.type, vehicle.subType),
            price: priceGenerator(vehicleType.type, vehicle.subType)
        } as vehicleResponse
    })
    res.success(vehicleResponse)
}

// GET all vehicle types
export const getVehicleById = async (req, res) => {
    const rentalOfficeId = req.params.roid
    const vehicleTypeId = req.params.vtid
    const vehicleId = req.params.id

    const vehicle = await prisma.vehicle.findUnique({
        where: {
            id: vehicleId,
            rentalOfficeId: rentalOfficeId,
            vehicleTypeId: vehicleTypeId
        }
    });

    if(!vehicle) {
        res.json({message: "not found"})
    }

    res.success(vehicle)
}

export const createVehicle = async (req, res) => {
    const rentalOfficeId = req.params.roid
    const vehicleTypeId = req.params.vtid
    const rentalOffice = await prisma.rentalOffice.findUnique({
        where: {
            id: rentalOfficeId
        }
    })

    if(!rentalOffice) {
        return res.json({message: 'nope'})
    }

    const vehicleType = await prisma.vehicleType.findUnique({
        where: {
            id: vehicleTypeId
        }
    })

    if(!vehicleType) {
        return res.json({message: 'nope'})
    }

    const vehicle = await prisma.vehicle.create({
        data: {
            vehicleTypeId: vehicleTypeId,
            rentalOfficeId: rentalOfficeId,
            image: req.body.image,
            subType: req.body.subType,
            licensePlateNo: req.body.license_plate_no
        }
    });

    res.success(vehicle);
}

export const updateVehicle = async (req, res) => {
    const rentalOfficeId = req.params.roid
    const vehicleTypeId = req.params.vtid
    const vehicleId = req.params.id

    const rentalOffice = await prisma.rentalOffice.findUnique({
        where: {
            id: rentalOfficeId
        }
    })

    if(!rentalOffice) {
        return res.json({message: 'nope'})
    }

    const vehicleType = await prisma.vehicleType.findUnique({
        where: {
            id: vehicleTypeId
        }
    })

    if(!vehicleType) {
        return res.json({message: 'nope'})
    }

    const vehicle = await prisma.vehicle.update({
        where: {
            id: vehicleId,
        },
        data: {
            vehicleTypeId: vehicleTypeId,
            rentalOfficeId: rentalOfficeId,
            image: req.body.image,
            subType: req.body.subType,
            licensePlateNo: req.body.license_plate_no,
            rentalStatus: req.body.rentalStatus
        }
    });

    res.success(vehicle);
}

export const deleteVehicle = async (req, res) => {
    const deleted = await prisma.vehicle.delete({
        where: {
            id: req.params.id
        }
    });

    res.success(deleted);
}
