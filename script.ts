import { PrismaClient } from "@prisma/client";
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
