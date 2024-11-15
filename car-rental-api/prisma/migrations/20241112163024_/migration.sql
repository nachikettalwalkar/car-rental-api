/*
  Warnings:

  - A unique constraint covering the columns `[vehicleId]` on the table `Rental` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `vehicleId` to the `Rental` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rental" ADD COLUMN     "vehicleId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Rental_vehicleId_key" ON "Rental"("vehicleId");

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
