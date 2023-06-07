import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// userPreference: {
//   create: {
//     emailUpdates: true,
//   },
// },
async function main() {
  await prisma.user.deleteMany();
  const user = await prisma.user.createMany({
    data: [
      {
        name: "Bharath",
        email: "bharath@test.com",
        age: 27,
      },
      {
        name: "Chandra",
        email: "chandra@test.com",
        age: 27,
      },
    ],
    // include: {
    //   userPreference: true,
    // },
    // select: {
    //   name: true,
    //   userPreference: { select: { id: true } },
    // },
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
