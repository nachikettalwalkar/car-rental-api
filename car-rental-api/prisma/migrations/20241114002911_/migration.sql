/*
  Warnings:

  - You are about to drop the column `year` on the `Vehicle` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "SUB_TYPE" AS ENUM ('BASIC', 'MID_RANGE', 'LUXURY');

-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "year",
ADD COLUMN     "subType" "SUB_TYPE" NOT NULL DEFAULT 'BASIC';
