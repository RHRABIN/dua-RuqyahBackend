/*
  Warnings:

  - You are about to drop the column `dua_indopack` on the `Dua` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Dua" DROP COLUMN "dua_indopack",
ADD COLUMN     "dua_indopak" TEXT;
