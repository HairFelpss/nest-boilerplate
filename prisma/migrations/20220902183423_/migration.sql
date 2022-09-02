/*
  Warnings:

  - You are about to drop the column `variableId` on the `ExternalData` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ExternalData" DROP CONSTRAINT "ExternalData_variableId_fkey";

-- DropIndex
DROP INDEX "ExternalData_variableId_key";

-- AlterTable
ALTER TABLE "ExternalData" DROP COLUMN "variableId";

-- AlterTable
ALTER TABLE "variable" ADD COLUMN     "externalDataId" TEXT;

-- AddForeignKey
ALTER TABLE "variable" ADD CONSTRAINT "variable_externalDataId_fkey" FOREIGN KEY ("externalDataId") REFERENCES "ExternalData"("id") ON DELETE SET NULL ON UPDATE CASCADE;
