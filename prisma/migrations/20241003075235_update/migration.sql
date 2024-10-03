/*
  Warnings:

  - Added the required column `expiresOn` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startedOn` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "expiresOn" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startedOn" TIMESTAMP(3) NOT NULL;
