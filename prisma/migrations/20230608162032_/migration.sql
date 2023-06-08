/*
  Warnings:

  - You are about to drop the column `category_id` on the `Plant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Plant" DROP COLUMN "category_id",
ADD COLUMN     "category_name" TEXT NOT NULL DEFAULT 'plantes',
ADD COLUMN     "condition_name" TEXT NOT NULL DEFAULT 'bonne';
