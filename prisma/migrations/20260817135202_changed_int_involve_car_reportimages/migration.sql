-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "number" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Involve" ALTER COLUMN "number" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ReportImages" ALTER COLUMN "path" DROP NOT NULL,
ALTER COLUMN "createdAt" DROP NOT NULL;
