/*
  Warnings:

  - The values [IN_SERVICING] on the enum `RENTAL_STATUS` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `price` to the `Rental` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Rental` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "RENTAL_STATUS_new" AS ENUM ('RENTED', 'AVAILABLE');
ALTER TABLE "Vehicle" ALTER COLUMN "rentalStatus" DROP DEFAULT;
ALTER TABLE "Vehicle" ALTER COLUMN "rentalStatus" TYPE "RENTAL_STATUS_new" USING ("rentalStatus"::text::"RENTAL_STATUS_new");
ALTER TYPE "RENTAL_STATUS" RENAME TO "RENTAL_STATUS_old";
ALTER TYPE "RENTAL_STATUS_new" RENAME TO "RENTAL_STATUS";
DROP TYPE "RENTAL_STATUS_old";
ALTER TABLE "Vehicle" ALTER COLUMN "rentalStatus" SET DEFAULT 'AVAILABLE';
COMMIT;

-- AlterTable
ALTER TABLE "Rental" ADD COLUMN     "price" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
