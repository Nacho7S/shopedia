/*
  Warnings:

  - You are about to drop the column `role` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `role`,
    MODIFY `pictureUrl` VARCHAR(191) NULL;
