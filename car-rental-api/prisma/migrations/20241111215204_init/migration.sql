-- CreateEnum
CREATE TYPE "VEHICLE_TYPE" AS ENUM ('SEDAN', 'SUV', 'VAN');

-- CreateEnum
CREATE TYPE "RENTAL_STATUS" AS ENUM ('RENTED', 'AVAILABLE', 'IN_SERVICING');

-- CreateTable
CREATE TABLE "RentalOffice" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,

    CONSTRAINT "RentalOffice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VehicleType" (
    "id" INTEGER NOT NULL,
    "Type" "VEHICLE_TYPE" NOT NULL DEFAULT 'SEDAN',
    "rentalOfficeId" TEXT NOT NULL,

    CONSTRAINT "VehicleType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicle" (
    "id" TEXT NOT NULL,
    "LicensePlateNo" TEXT NOT NULL,
    "vehicleTypeId" INTEGER NOT NULL,
    "Year" INTEGER NOT NULL,
    "RentalStatus" "RENTAL_STATUS" NOT NULL DEFAULT 'AVAILABLE',

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "licenseNo" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reservation" (
    "id" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "userId" TEXT NOT NULL,
    "rentalOfficeId" TEXT NOT NULL,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rental" (
    "id" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "mileage" INTEGER NOT NULL,
    "fuelLevel" DECIMAL(65,30) NOT NULL,
    "reservationId" TEXT NOT NULL,

    CONSTRAINT "Rental_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_LicensePlateNo_key" ON "Vehicle"("LicensePlateNo");

-- CreateIndex
CREATE UNIQUE INDEX "User_licenseNo_key" ON "User"("licenseNo");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Rental_reservationId_key" ON "Rental"("reservationId");

-- AddForeignKey
ALTER TABLE "VehicleType" ADD CONSTRAINT "VehicleType_rentalOfficeId_fkey" FOREIGN KEY ("rentalOfficeId") REFERENCES "RentalOffice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_vehicleTypeId_fkey" FOREIGN KEY ("vehicleTypeId") REFERENCES "VehicleType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_rentalOfficeId_fkey" FOREIGN KEY ("rentalOfficeId") REFERENCES "RentalOffice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
