-- CreateTable
CREATE TABLE "AllCar" (
    "id" TEXT NOT NULL,
    "car_registration" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "car_models" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "images" JSONB NOT NULL,

    CONSTRAINT "AllCar_pkey" PRIMARY KEY ("id")
);
