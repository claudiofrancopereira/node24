/*
  Warnings:

  - You are about to drop the column `year` on the `Reports` table. All the data in the column will be lost.
  - The `date` column on the `Reports` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[date]` on the table `Reports` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Reports_year_key";

-- AlterTable
ALTER TABLE "Reports" DROP COLUMN "year",
DROP COLUMN "date",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "Reports_date_key" ON "Reports"("date");
