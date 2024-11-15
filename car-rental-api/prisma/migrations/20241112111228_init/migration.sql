/*
  Warnings:

  - Added the required column `rentalOfficeId` to the `VehicleType` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "VehicleType" ADD COLUMN     "rentalOfficeId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "VehicleType" ADD CONSTRAINT "VehicleType_rentalOfficeId_fkey" FOREIGN KEY ("rentalOfficeId") REFERENCES "RentalOffice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
