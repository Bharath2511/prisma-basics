/*
  Warnings:

  - The `favoritedById` column on the `Post` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_favoritedById_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "favoritedById",
ADD COLUMN     "favoritedById" TEXT[];

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_favoritedById_fkey" FOREIGN KEY ("favoritedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
