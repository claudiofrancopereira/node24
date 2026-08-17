/*
  Warnings:

  - A unique constraint covering the columns `[year]` on the table `Reports` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[pages]` on the table `Reports` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[address]` on the table `Reports` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nature]` on the table `Reports` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `address` to the `Reports` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bopc` to the `Reports` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bopm` to the `Reports` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hFinal` to the `Reports` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hLocation` to the `Reports` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nature` to the `Reports` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reportOfficer` to the `Reports` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reports" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "bopc" INTEGER NOT NULL,
ADD COLUMN     "bopm" INTEGER NOT NULL,
ADD COLUMN     "hFinal" INTEGER NOT NULL,
ADD COLUMN     "hLocation" INTEGER NOT NULL,
ADD COLUMN     "nature" TEXT NOT NULL,
ADD COLUMN     "pages" SERIAL NOT NULL,
ADD COLUMN     "reportOfficer" TEXT NOT NULL,
ADD COLUMN     "year" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "Involve" (
    "id" TEXT NOT NULL,
    "number" SERIAL NOT NULL,
    "condition" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "father" TEXT NOT NULL,
    "mother" TEXT NOT NULL,
    "dbirth" TEXT NOT NULL,
    "pbirth" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "civilStatus" TEXT NOT NULL,
    "work" TEXT NOT NULL,
    "rgcpf" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reportID" TEXT NOT NULL,

    CONSTRAINT "Involve_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Reports_year_key" ON "Reports"("year");

-- CreateIndex
CREATE UNIQUE INDEX "Reports_pages_key" ON "Reports"("pages");

-- CreateIndex
CREATE UNIQUE INDEX "Reports_address_key" ON "Reports"("address");

-- CreateIndex
CREATE UNIQUE INDEX "Reports_nature_key" ON "Reports"("nature");

-- AddForeignKey
ALTER TABLE "Involve" ADD CONSTRAINT "Involve_reportID_fkey" FOREIGN KEY ("reportID") REFERENCES "Reports"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
