/*
  Warnings:

  - You are about to drop the column `RentalStatus` on the `Vehicle` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "RentalStatus",
ADD COLUMN     "rentalStatus" "RENTAL_STATUS" NOT NULL DEFAULT 'AVAILABLE';
