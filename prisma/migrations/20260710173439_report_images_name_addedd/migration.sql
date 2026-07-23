/*
  Warnings:

  - Made the column `path` on table `ReportImages` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ReportImages" ADD COLUMN     "name" TEXT,
ALTER COLUMN "path" SET NOT NULL;
