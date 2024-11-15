/*
  Warnings:

  - Added the required column `rentalOfficeId` to the `Rental` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rental" ADD COLUMN     "rentalOfficeId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_rentalOfficeId_fkey" FOREIGN KEY ("rentalOfficeId") REFERENCES "RentalOffice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
