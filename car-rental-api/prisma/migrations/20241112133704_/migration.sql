/*
  Warnings:

  - You are about to drop the column `Type` on the `VehicleType` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[type]` on the table `VehicleType` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `type` to the `VehicleType` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "VehicleType_Type_key";

-- AlterTable
ALTER TABLE "VehicleType" DROP COLUMN "Type",
ADD COLUMN     "type" "VEHICLE_TYPE" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "VehicleType_type_key" ON "VehicleType"("type");
