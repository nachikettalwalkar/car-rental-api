/*
  Warnings:

  - A unique constraint covering the columns `[Type]` on the table `VehicleType` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "VehicleType" ALTER COLUMN "Type" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "VehicleType_Type_key" ON "VehicleType"("Type");
