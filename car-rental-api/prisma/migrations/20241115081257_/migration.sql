/*
  Warnings:

  - A unique constraint covering the columns `[type]` on the table `VehicleType` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "VehicleType_type_key" ON "VehicleType"("type");
