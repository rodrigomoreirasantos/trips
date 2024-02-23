/*
  Warnings:

  - You are about to alter the column `pricePerDay` on the `Trip` table. The data in that column could be lost. The data in that column will be cast from `Decimal(8,2)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Trip" ALTER COLUMN "pricePerDay" SET DATA TYPE INTEGER;
