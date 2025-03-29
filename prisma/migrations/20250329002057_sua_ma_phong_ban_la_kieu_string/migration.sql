-- DropForeignKey
ALTER TABLE "NguoiDung" DROP CONSTRAINT "NguoiDung_PhongBanId_fkey";

-- AlterTable
ALTER TABLE "NguoiDung" ALTER COLUMN "PhongBanId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "NguoiDung" ADD CONSTRAINT "NguoiDung_PhongBanId_fkey" FOREIGN KEY ("PhongBanId") REFERENCES "PhongBan"("MaPb") ON DELETE SET NULL ON UPDATE CASCADE;
