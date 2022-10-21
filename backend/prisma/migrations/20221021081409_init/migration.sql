-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_licenseKey_fkey`;

-- AlterTable
ALTER TABLE `License` MODIFY `licenseKey` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `licenseKey` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_licenseKey_fkey` FOREIGN KEY (`licenseKey`) REFERENCES `License`(`licenseKey`) ON DELETE CASCADE ON UPDATE CASCADE;
