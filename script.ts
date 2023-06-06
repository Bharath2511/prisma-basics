import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // const user = await prisma.user.create({ data: { name: "Chandra" } });
  // console.log(user);
  // const users = await prisma.user.createMany({
  //   data: [
  //     {
  //       name: "Bharath",
  //       email: "b@gmail.com",
  //       isAdmin: false,
  //       preferences: {},
  //     },
  //     {
  //       name: "Chandra",
  //       email: "c@gmail.com",
  //       isAdmin: false,
  //       preferences: {},
  //     },
  //     {
  //       name: "Srinivas",
  //       email: "s@gmail.com",
  //       isAdmin: false,
  //       preferences:{},
  //     },
  //   ],
  // });
  //   const posts = await prisma.post.createMany({
  //     data: [
  //       {
  //         rating: 4.5,
  //         createdAt: new Date(),
  //         updatedAt: new Date(),
  //         authorId: "690c592d-05a0-488f-ba5a-7c5d0591f044",
  //         favoritedById: "690c592d-05a0-488f-ba5a-7c5d0591f044",
  //       },
  //       {
  //         rating: 4.5,
  //         createdAt: new Date(),
  //         updatedAt: new Date(),
  //         authorId: "690c592d-05a0-488f-ba5a-7c5d0591f044",
  //         favoritedById: "690c592d-05a0-488f-ba5a-7c5d0591f044",
  //       },
  //       {
  //         rating: 4.5,
  //         createdAt: new Date(),
  //         updatedAt: new Date(),
  //         authorId: "690c592d-05a0-488f-ba5a-7c5d0591f044",
  //         favoritedById: "690c592d-05a0-488f-ba5a-7c5d0591f044",
  //       },
  //     ],
  //   });
  const posts = await prisma.post.findMany();
  console.log(posts);
  const users = await prisma.user.findMany();
  console.log(users);
}

main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
