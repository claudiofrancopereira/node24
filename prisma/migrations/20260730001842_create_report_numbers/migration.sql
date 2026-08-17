/*
  Warnings:

  - You are about to drop the column `name` on the `ReportImages` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[number]` on the table `Reports` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "ReportImages" DROP COLUMN "name";

-- AlterTable
ALTER TABLE "Reports" ADD COLUMN     "number" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Reports_number_key" ON "Reports"("number");
