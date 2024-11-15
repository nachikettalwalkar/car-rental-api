import {Router} from 'express';
import { body } from "express-validator";
import { handleInputValidation } from './modules/validation';
import { createRentalOffice, deleteRentalOffice, getRentalOffices, updateRentalOffice } from './handlers/rental-office';
import { createVehicleType, getVehicleTypes, updateVehicleType } from './handlers/vehicle-type';
import { createVehicle, getVehicleById, getVehicles, updateVehicle } from './handlers/vehicle';
import { createReservation, getReservationsByUser, updateReservation } from './handlers/reservation';
import { createRental } from './handlers/rental';

const router = Router();

/****************************************** app routes ****************************************/
router.get('/rental-office', getRentalOffices) // Locations
router.get('/rental-office/:id/vehicle-type', getVehicleTypes) // Vehicle types at location
router.get('/rental-office/:roid/vehicle-type/:vtid/vehicle', getVehicles) // Vehicles by location and type for given dates
router.get('/rental-office/:roid/vehicle-type/:vtid/vehicle/:id', getVehicleById) // Vehicle by Id
router.get('/reservation', getReservationsByUser)
router.get('/reservation/:id', () => {})
router.put('/rental-office/:roid/vehicle-type/:vtid/reservation/:id',
    body('start_date').optional(),
    body('end_date').optional(),
    body('price').optional(),
    handleInputValidation, updateReservation)
router.post('/rental-office/:roid/vehicle-type/:vtid/reservation',
    body('start_date').exists().isString(),
    body('end_date').exists().isString(),
    body('price').exists().isDecimal(),
    handleInputValidation, createReservation)
router.delete('/reservation/:id', () => {})

/******************************************** admin routes ************************************ */
/**
 * Rental Office
 */
router.get('/rental-office/:id', (req, res) => res.json({message: 'ok'}))
router.put('/rental-office/:id',
    body('address').isString(),
    body('city').isString(),
    handleInputValidation,
    updateRentalOffice)
router.post('/rental-office',
    body('address').isString(),
    body('city').isString(),
    handleInputValidation, 
    createRentalOffice)
router.delete('/rental-office/:id', deleteRentalOffice)

/**
 * Vehicle Type
 */
 router.get('/rental-office/:roid/vehicle-type/:id', () => {})
 router.put('/rental-office/:roid/vehicle-type/:id', 
    body('type').isIn(['SEDAN', 'VAN', 'SUV']),
    handleInputValidation,
    updateVehicleType)
 router.post('/rental-office/:roid/vehicle-type',
    body('type').isIn(['SEDAN', 'VAN', 'SUV']),
    handleInputValidation,
    createVehicleType)
 router.delete('/rental-office/:roid/vehicle-type/:id', () => {})

 /**
 * Vehicle
 */
router.put('/rental-office/:roid/vehicle-type/:vtid/vehicle/:id', updateVehicle)
router.post('/rental-office/:roid/vehicle-type/:vtid/vehicle', createVehicle)

 /**
 * Rental
 */
  router.post('/rental-office/:roid/vehicle/:vid/reservation/:resid/rental', createRental)

  export default router
