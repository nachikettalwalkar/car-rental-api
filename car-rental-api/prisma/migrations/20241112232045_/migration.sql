/*
  Warnings:

  - A unique constraint covering the columns `[id,reservationId]` on the table `Rental` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Rental_id_reservationId_key" ON "Rental"("id", "reservationId");
