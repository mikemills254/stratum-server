/*
  Warnings:

  - Added the required column `description` to the `worksheets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "worksheets" ADD COLUMN     "description" TEXT NOT NULL;
