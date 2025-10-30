/*
  Warnings:

  - You are about to drop the column `product` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `product` on the `review` table. All the data in the column will be lost.
  - You are about to drop the column `star` on the `review` table. All the data in the column will be lost.
  - You are about to alter the column `rating` on the `review` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to drop the column `tagId` on the `tags` table. All the data in the column will be lost.
  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `productId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sellerId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `Tags` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_product_fkey`;

-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `review` DROP FOREIGN KEY `Review_product_fkey`;

-- DropForeignKey
ALTER TABLE `tags` DROP FOREIGN KEY `Tags_tagId_fkey`;

-- DropIndex
DROP INDEX `Order_product_fkey` ON `order`;

-- DropIndex
DROP INDEX `Product_categoryId_fkey` ON `product`;

-- DropIndex
DROP INDEX `Review_product_fkey` ON `review`;

-- DropIndex
DROP INDEX `Tags_tagId_fkey` ON `tags`;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `product`,
    ADD COLUMN `productId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `product` ADD COLUMN `description` VARCHAR(191) NULL,
    ADD COLUMN `sellerId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `review` DROP COLUMN `product`,
    DROP COLUMN `star`,
    ADD COLUMN `productId` VARCHAR(191) NOT NULL,
    MODIFY `comment` VARCHAR(191) NULL,
    MODIFY `rating` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `tags` DROP COLUMN `tagId`,
    ADD COLUMN `productId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `role` ENUM('USER', 'SELLER', 'ADMIN') NOT NULL DEFAULT 'USER';

-- DropTable
DROP TABLE `categories`;

-- CreateTable
CREATE TABLE `Seller` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `shopName` VARCHAR(191) NOT NULL,
    `bio` VARCHAR(191) NULL,
    `shopImage` VARCHAR(191) NULL,
    `rating` DOUBLE NULL DEFAULT 0,
    `isVerified` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `Seller_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Category` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Category_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Seller` ADD CONSTRAINT `Seller_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_sellerId_fkey` FOREIGN KEY (`sellerId`) REFERENCES `Seller`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tags` ADD CONSTRAINT `Tags_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
