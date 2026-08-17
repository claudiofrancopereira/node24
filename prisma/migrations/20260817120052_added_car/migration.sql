-- CreateTable
CREATE TABLE "Car" (
    "id" TEXT NOT NULL,
    "number" SERIAL NOT NULL,
    "vessel" TEXT,
    "makebody" TEXT,
    "color" TEXT,
    "plate" TEXT,
    "city" TEXT,
    "state" TEXT,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reportID" TEXT NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_reportID_fkey" FOREIGN KEY ("reportID") REFERENCES "Reports"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
