import { PrismaClient } from "@prisma/client";
import { truncate } from "fs";
const prisma = new PrismaClient();
// userPreference: {
//   create: {
//     emailUpdates: true,
//   },
// },
async function main() {
  // const preference = await prisma.userPreference.create({
  //   data:{emailUpdates:true}
  // })
  /* we created a userPreference object and connected it to our user */
  // const user = await prisma.user.update({
  //   where: {
  //     email: "bharath@test.com",
  //   },
  //   data: {
  //     userPreference: {
  //       // create:{
  //       //   emailUpdates:true
  //       // }
  //       connect: {
  //         id: "f3d91a93-cc81-4928-8e9e-9b5c02de0a0a",
  //       },
  //     },
  //   },
  // });
  // console.log(user);
  /*when we query we get the respective result */
  //   const user = await prisma.user.findFirst({
  //     where: {
  //       email: "bharath@test.com",
  //     },
  //     include: { userPreference: true },
  //   });
  //   console.log(user);
  /* we can disconnect as well */
  // const user = await prisma.user.update({
  //   where: {
  //     email: "bharath@test.com",
  //   },
  //   data: {
  //     userPreference: {
  //       disconnect: true,
  //     },
  //   },
  // });
  /* we can do connect and cannot do disconnect for creating users" */
}
main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
