/*
  Warnings:

  - You are about to alter the column `licenseKey` on the `License` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(64)`.
  - You are about to alter the column `licenseKey` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(64)`.

*/
-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_licenseKey_fkey`;

-- AlterTable
ALTER TABLE `License` MODIFY `licenseKey` VARCHAR(64) NOT NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `licenseKey` VARCHAR(64) NOT NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_licenseKey_fkey` FOREIGN KEY (`licenseKey`) REFERENCES `License`(`licenseKey`) ON DELETE CASCADE ON UPDATE CASCADE;
