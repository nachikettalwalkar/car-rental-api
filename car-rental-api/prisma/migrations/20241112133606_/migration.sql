/*
  Warnings:

  - The primary key for the `VehicleType` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Vehicle" DROP CONSTRAINT "Vehicle_vehicleTypeId_fkey";

-- AlterTable
ALTER TABLE "Vehicle" ALTER COLUMN "vehicleTypeId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "VehicleType" DROP CONSTRAINT "VehicleType_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "VehicleType_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_vehicleTypeId_fkey" FOREIGN KEY ("vehicleTypeId") REFERENCES "VehicleType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
