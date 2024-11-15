/*
  Warnings:

  - You are about to drop the column `LicensePlateNo` on the `Vehicle` table. All the data in the column will be lost.
  - You are about to drop the column `Year` on the `Vehicle` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[licensePlateNo]` on the table `Vehicle` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `licensePlateNo` to the `Vehicle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Vehicle_LicensePlateNo_key";

-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "LicensePlateNo",
DROP COLUMN "Year",
ADD COLUMN     "licensePlateNo" TEXT NOT NULL,
ADD COLUMN     "year" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_licensePlateNo_key" ON "Vehicle"("licensePlateNo");
