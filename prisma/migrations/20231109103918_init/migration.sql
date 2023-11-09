-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "cat_id" INTEGER NOT NULL,
    "cat_name_bn" TEXT NOT NULL,
    "cat_name_en" TEXT NOT NULL,
    "cat_icon" TEXT NOT NULL,
    "no_of_subcat" INTEGER NOT NULL,
    "no_of_dua" INTEGER NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subcatgory" (
    "id" SERIAL NOT NULL,
    "cat_id" INTEGER NOT NULL,
    "subcat_id" INTEGER NOT NULL,
    "subcat_name_bn" TEXT NOT NULL,
    "subcat_name_en" TEXT NOT NULL,
    "no_of_dua" INTEGER NOT NULL,

    CONSTRAINT "Subcatgory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dua" (
    "id" SERIAL NOT NULL,
    "cat_id" INTEGER NOT NULL,
    "subcat_id" INTEGER NOT NULL,
    "dua_id" INTEGER NOT NULL,
    "dua_name_bn" TEXT,
    "dua_name_en" TEXT,
    "top_bn" TEXT,
    "top_en" TEXT,
    "dua_arabic" TEXT,
    "dua_indopack" TEXT,
    "clean_arabic" TEXT,
    "transliteration_bn" TEXT,
    "transliteration_en" TEXT,
    "translation_bn" TEXT,
    "translation_en" TEXT,
    "bottom_bn" TEXT,
    "bottom_en" TEXT,
    "refference_bn" TEXT,
    "refference_en" TEXT,
    "audio" TEXT,

    CONSTRAINT "Dua_pkey" PRIMARY KEY ("id")
);
