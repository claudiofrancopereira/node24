-- AlterTable
ALTER TABLE "Cars" ADD COLUMN     "year" TEXT,
ALTER COLUMN "number" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Involves" ALTER COLUMN "number" DROP NOT NULL;
