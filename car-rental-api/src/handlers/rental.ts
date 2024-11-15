import prisma from "../db";
import { Prisma } from "@prisma/client";

export const createRental = async (req, res) => {
    const userId = req.user.id
    const rentalOfficeId = req.params.roid
    const vehicleId = req.params.vid
    const reservationId = req.params.resid

    const vehicle = await prisma.vehicle.update({
        where: {
            id: vehicleId,
        },
        data: {
            rentalStatus: "RENTED"
        }
    });

    const rental = await prisma.rental.create({
        data: {
            startDate: req.body.start_date,
            endDate: req.body.end_date,
            mileage: req.body.mileage,
            fuelLevel: req.body.fuel_level,
            price: new Prisma.Decimal(req.body.price),
            userId: userId,
            rentalOfficeId: rentalOfficeId,
            vehicleId: vehicle.id,
            reservationId: reservationId
        }
    })

    res.success(rental)
}
