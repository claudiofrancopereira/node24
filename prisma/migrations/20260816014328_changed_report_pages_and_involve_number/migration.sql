-- DropIndex
DROP INDEX "Reports_pages_key";

-- AlterTable
ALTER TABLE "Involve" ALTER COLUMN "number" DROP DEFAULT;
DROP SEQUENCE "Involve_number_seq";

-- AlterTable
ALTER TABLE "Reports" ALTER COLUMN "pages" DROP DEFAULT;
DROP SEQUENCE "Reports_pages_seq";
