/*
  Warnings:

  - You are about to drop the `Car` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Involve` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Car" DROP CONSTRAINT "Car_reportID_fkey";

-- DropForeignKey
ALTER TABLE "Involve" DROP CONSTRAINT "Involve_reportID_fkey";

-- DropTable
DROP TABLE "Car";

-- DropTable
DROP TABLE "Involve";

-- CreateTable
CREATE TABLE "Involves" (
    "id" TEXT NOT NULL,
    "number" SERIAL,
    "condition" TEXT,
    "name" TEXT,
    "father" TEXT,
    "mother" TEXT,
    "dbirth" TEXT,
    "pbirth" TEXT,
    "color" TEXT,
    "sex" TEXT,
    "civilStatus" TEXT,
    "work" TEXT,
    "rgcpf" TEXT,
    "address" TEXT,
    "neighborhood" TEXT,
    "city" TEXT,
    "state" TEXT,
    "phone" TEXT,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reportID" TEXT NOT NULL,

    CONSTRAINT "Involves_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cars" (
    "id" TEXT NOT NULL,
    "number" SERIAL,
    "vessel" TEXT,
    "makebody" TEXT,
    "color" TEXT,
    "plate" TEXT,
    "city" TEXT,
    "state" TEXT,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reportID" TEXT NOT NULL,

    CONSTRAINT "Cars_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Involves" ADD CONSTRAINT "Involves_reportID_fkey" FOREIGN KEY ("reportID") REFERENCES "Reports"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cars" ADD CONSTRAINT "Cars_reportID_fkey" FOREIGN KEY ("reportID") REFERENCES "Reports"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
