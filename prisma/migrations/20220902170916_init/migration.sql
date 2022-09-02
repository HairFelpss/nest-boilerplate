-- CreateTable
CREATE TABLE "ExternalData" (
    "id" TEXT NOT NULL,
    "variableId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "rig_name" TEXT NOT NULL,
    "system" TEXT NOT NULL,

    CONSTRAINT "ExternalData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "variable" (
    "id" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "uom" TEXT NOT NULL,

    CONSTRAINT "variable_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ExternalData_variableId_key" ON "ExternalData"("variableId");

-- AddForeignKey
ALTER TABLE "ExternalData" ADD CONSTRAINT "ExternalData_variableId_fkey" FOREIGN KEY ("variableId") REFERENCES "variable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
