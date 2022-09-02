/*
  Warnings:

  - Added the required column `system` to the `ExternalData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ExternalData" ADD COLUMN     "system" TEXT NOT NULL;
