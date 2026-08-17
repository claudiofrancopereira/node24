-- AlterTable
CREATE SEQUENCE involve_number_seq;
ALTER TABLE "Involve" ALTER COLUMN "number" SET DEFAULT nextval('involve_number_seq');
ALTER SEQUENCE involve_number_seq OWNED BY "Involve"."number";
