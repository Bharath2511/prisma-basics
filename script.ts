import { PrismaClient } from "@prisma/client";
import { truncate } from "fs";
const prisma = new PrismaClient();
// userPreference: {
//   create: {
//     emailUpdates: true,
//   },
// },
async function main() {
  const user = await prisma.user.findMany({
    where: {
      // name: {equals:"Chandra"},
      // name: { not: "Chandra" },
      // name: { in: ["Bharath", "Chandra"] },
      // name: { notIn: ["Bharath", "Chandra"] },
      // name: "Chandra",
      // age: { lte: 20 },
      // email: { contains: "test1.com" },
      // email: { endsWith: "@test1.com" },
      // name: { startsWith: "Chandra" },
      /* includes everything */
      // AND: [{ name: { startsWith: "Bhar" } }, { age: { gt: 27 } }],
      /* includes one of the queries */
      // OR: [{ email: "bharath@test.com" }, { age: { lte: 30 } }],
      // NOT: [{ name: "Bharath" }, { age: 27 }],

      //relationships as well
      // userPreference: {
      //   emailUpdates: true,
      // },
      writtenPosts: {
        /* do every posts written by this user has a title of test */
        // every: { title: "Test" },
        /* do none of the posts written by this user has a title of test */
        // none: { title: "Test" },
        /* do any of the posts title is Test*/
        some: { title: "Test" },
      },
    },
  });
  const post = await prisma.post.findMany({
    where: {
      author: {
        // is: {
        //   age: 27,
        // },
        // isNot: {
        //   age: 27,
        // },
      },
    },
  });
  console.log(post);
  console.log(user);
}
main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
