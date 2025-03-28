-- CreateEnum
CREATE TYPE "ChucVu" AS ENUM ('TruongPhong', 'PhoPhong', 'VanPhong', 'IT');

-- CreateTable
CREATE TABLE "DonVi" (
    "id" SERIAL NOT NULL,
    "TenDv" VARCHAR(100) NOT NULL,
    "MaDv" VARCHAR(10) NOT NULL,
    "GhiChu" TEXT,
    "NgayTao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "NgaySua" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DonVi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PhongBan" (
    "id" SERIAL NOT NULL,
    "TenPb" VARCHAR(100) NOT NULL,
    "MaPb" VARCHAR(10) NOT NULL,
    "NgayTao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "NgaySua" TIMESTAMP(3) NOT NULL,
    "MaDvId" VARCHAR(10),

    CONSTRAINT "PhongBan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NguoiDung" (
    "id" SERIAL NOT NULL,
    "Email" TEXT NOT NULL,
    "MatKhau" VARCHAR(255) NOT NULL,
    "SoDienThoai" VARCHAR(13),
    "DiaChi" VARCHAR(150),
    "KichHoat" BOOLEAN NOT NULL DEFAULT false,
    "NgayTao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "NgaySua" TIMESTAMP(3) NOT NULL,
    "ChucVu" "ChucVu" NOT NULL DEFAULT 'VanPhong',
    "PhongBanId" INTEGER,

    CONSTRAINT "NguoiDung_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DonVi_TenDv_key" ON "DonVi"("TenDv");

-- CreateIndex
CREATE UNIQUE INDEX "DonVi_MaDv_key" ON "DonVi"("MaDv");

-- CreateIndex
CREATE UNIQUE INDEX "PhongBan_TenPb_key" ON "PhongBan"("TenPb");

-- CreateIndex
CREATE UNIQUE INDEX "PhongBan_MaPb_key" ON "PhongBan"("MaPb");

-- CreateIndex
CREATE UNIQUE INDEX "NguoiDung_Email_key" ON "NguoiDung"("Email");

-- AddForeignKey
ALTER TABLE "PhongBan" ADD CONSTRAINT "PhongBan_MaDvId_fkey" FOREIGN KEY ("MaDvId") REFERENCES "DonVi"("MaDv") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NguoiDung" ADD CONSTRAINT "NguoiDung_PhongBanId_fkey" FOREIGN KEY ("PhongBanId") REFERENCES "PhongBan"("id") ON DELETE SET NULL ON UPDATE CASCADE;
