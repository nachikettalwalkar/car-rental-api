/*
  Warnings:

  - You are about to drop the column `rentalOfficeId` on the `VehicleType` table. All the data in the column will be lost.
  - Added the required column `rentalOfficeId` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "VehicleType" DROP CONSTRAINT "VehicleType_rentalOfficeId_fkey";

-- AlterTable
ALTER TABLE "Vehicle" ADD COLUMN     "rentalOfficeId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "VehicleType" DROP COLUMN "rentalOfficeId";

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_rentalOfficeId_fkey" FOREIGN KEY ("rentalOfficeId") REFERENCES "RentalOffice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
