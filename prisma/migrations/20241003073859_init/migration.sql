/*
  Warnings:

  - You are about to drop the column `jobName` on the `Job` table. All the data in the column will be lost.
  - Added the required column `department` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `linkedInUrl` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tile` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "JobType" AS ENUM ('Full_Time', 'Part_Time', 'Remote');

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "jobName",
ADD COLUMN     "department" TEXT NOT NULL,
ADD COLUMN     "linkedInUrl" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "tile" TEXT NOT NULL,
ADD COLUMN     "type" "JobType" NOT NULL DEFAULT 'Full_Time';
