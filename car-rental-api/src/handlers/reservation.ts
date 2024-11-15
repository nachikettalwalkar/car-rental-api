import prisma from "../db";
import { Prisma } from "@prisma/client";

// GET all reservations by Rental office
export const getReservationsByRentalOffice = async (req, res) => {
    const rentalOfficeId = req.params.roid

    const reservations = await prisma.reservation.findMany({
        where: {
            rentalOfficeId: rentalOfficeId
        }
    })

    res.success(reservations, { count: reservations.length });
}

export const getReservationsByUser = async (req, res) => {
    const userId = req.user.id

    const reservations = await prisma.reservation.findMany({
        where: {
            userId: userId
        }
    })

    res.success(reservations, { count: reservations.length });
}

export const createReservation = async (req, res) => {
    const userId = req.user.id
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

    const reservation = await prisma.reservation.create({
        data: {
            startDate: req.body.start_date,
            endDate: req.body.end_date,
            price: new Prisma.Decimal(req.body.price),
            userId: userId,
            rentalOfficeId: rentalOfficeId,
            vehicleTypeId: vehicleTypeId,
            subType: req.body.subType // Getting subType for reservation from request
        }
    })

    res.success(reservation)
}

export const updateReservation = async (req, res) => {
    const userId = req.user.id
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
    
    const reservation = await prisma.reservation.update({
        where: {
            id: req.params.id
        },
        data: {
            startDate: req.body.start_date,
            endDate: req.body.end_date,
            price: new Prisma.Decimal(req.body.price),
            userId: userId,
            rentalOfficeId: rentalOfficeId,
            vehicleTypeId: vehicleTypeId
        }
    })

    res.success(reservation)
}

export const deleteReservation = async (req, res) => {
    const deleted = await prisma.reservation.delete({
        where: {
            id: req.params.id
        }
    });

    res.success(deleted);
}

