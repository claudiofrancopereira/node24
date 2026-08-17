-- DropIndex
DROP INDEX "Reports_address_key";

-- DropIndex
DROP INDEX "Reports_nature_key";

-- AlterTable
ALTER TABLE "Reports" ALTER COLUMN "hFinal" SET DATA TYPE TEXT,
ALTER COLUMN "hLocation" SET DATA TYPE TEXT;
