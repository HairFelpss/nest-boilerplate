-- CreateTable
CREATE TABLE "ExternalData" (
    "id" SERIAL NOT NULL,
    "rig_name" TEXT NOT NULL,
    "variable" JSONB[],

    CONSTRAINT "ExternalData_pkey" PRIMARY KEY ("id")
);
