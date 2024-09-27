/*
  Warnings:

  - Made the column `name` on table `Academic_records` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Academic_records" ALTER COLUMN "name" SET NOT NULL;
