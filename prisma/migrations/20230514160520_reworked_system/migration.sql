-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "paymentIntentID" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "image" DROP NOT NULL;
