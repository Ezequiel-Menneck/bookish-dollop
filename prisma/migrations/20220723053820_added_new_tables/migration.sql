/*
  Warnings:

  - You are about to drop the `Calendar` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Calendar";

-- CreateTable
CREATE TABLE "Schedules" (
    "id" TEXT NOT NULL,
    "client" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "time" TEXT NOT NULL,

    CONSTRAINT "Schedules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Services" (
    "id" TEXT NOT NULL,
    "service_name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "schedulesId" TEXT,

    CONSTRAINT "Services_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Services" ADD CONSTRAINT "Services_schedulesId_fkey" FOREIGN KEY ("schedulesId") REFERENCES "Schedules"("id") ON DELETE SET NULL ON UPDATE CASCADE;
