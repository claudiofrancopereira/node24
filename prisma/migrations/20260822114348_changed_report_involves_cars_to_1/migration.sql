/*
  Warnings:

  - Added the required column `condition` to the `Involves` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "involvesCondition" AS ENUM ('VITIMA', 'TESTEMUNHA', 'AUTOR', 'AUTORA', 'PARTE_NAO_DEFINIDA', 'PND', 'SINDICADO');

-- AlterTable
ALTER TABLE "Cars" ALTER COLUMN "number" SET DEFAULT 1,
ALTER COLUMN "number" DROP DEFAULT;
DROP SEQUENCE "Cars_number_seq";

-- AlterTable
ALTER TABLE "Involves" ALTER COLUMN "number" SET DEFAULT 1,
ALTER COLUMN "number" DROP DEFAULT,
DROP COLUMN "condition",
ADD COLUMN     "condition" "involvesCondition" NOT NULL;
DROP SEQUENCE "Involves_number_seq";
