import { PrismaClient } from "@prisma/client";
import { truncate } from "fs";
const prisma = new PrismaClient();
// userPreference: {
//   create: {
//     emailUpdates: true,
//   },
// },
async function main() {
  // const user = await prisma.user.update({
  //   where: {
  //     email: "chandra@test2.com",
  //   },
  //   data: {
  //     email: "chandra@test.com",
  //   },
  //it can also have include, select
  // });
  // const users = await prisma.user.updateMany({
  //   where: {
  //     name: "Chandra",
  //   },
  //   data: {
  //     name: "Srinivas",
  //   },
  //it cannot also have include, select
  // });

  //updateMany where clause can take any column, but for update there should be unique

  const user = await prisma.user.update({
    where: {
      email: "bharath@test.com",
    },
    data: {
      age: {
        // increment: 1,
        // decrement: 2,
        // multiply: 3,
        // divide: 10,
      },
    },
  });

  console.log(user);
}
main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
