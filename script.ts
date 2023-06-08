import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const user = await prisma.user.delete({
    where: {
      email: "bharath@test.com",
    },
  });
  console.log(user);
  const users = await prisma.user.deleteMany({
    where: {
      age: { gte: 27 },
    },
  });
  console.log(users);
  //deleteMany() delete all users
}
main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
