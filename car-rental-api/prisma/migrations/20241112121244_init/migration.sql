/*
  Warnings:

  - A unique constraint covering the columns `[id,rentalOfficeId]` on the table `VehicleType` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "VehicleType_id_rentalOfficeId_key" ON "VehicleType"("id", "rentalOfficeId");
