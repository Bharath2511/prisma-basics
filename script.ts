import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// userPreference: {
//   create: {
//     emailUpdates: true,
//   },
// },
async function main() {
  const user = await prisma.user.findUnique({
    where: {
      // email: "bharath@test.com",
      //unique keys for user
      name_age: {
        age: 27,
        name: "Bharath",
      },
    },
  });
  //find first entry
  const findFirstUser = await prisma.user.findFirst({
    where: {
      name: "Bharath",
    },
  });
  const users = await prisma.user.findMany({
    where: {
      name: "Chandra",
    },
    //this will return entries with distinct name and age
    distinct: ["name", "age"],
    orderBy: {
      age: "desc",
    },
    //pagination: takes 2
    take: 2,
    //skips 1st
    skip: 1,
  });
  console.log(users);
}
main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
