/*
  Warnings:

  - A unique constraint covering the columns `[accountId]` on the table `GithubProvider` will be added. If there are existing duplicate values, this will fail.
  - Made the column `accountId` on table `GithubProvider` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `userId` to the `Template` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GithubProvider" ALTER COLUMN "accountId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Template" ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "GithubProvider_accountId_key" ON "GithubProvider"("accountId");

-- AddForeignKey
ALTER TABLE "Template" ADD CONSTRAINT "Template_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
