/*
  Warnings:

  - A unique constraint covering the columns `[Type]` on the table `VehicleType` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "VehicleType_Type_key" ON "VehicleType"("Type");
