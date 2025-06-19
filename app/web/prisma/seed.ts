import { PrismaClient } from "@prisma/client";
import { genSalt, hash } from "bcrypt";

const prisma = new PrismaClient();

async function dataInput() {
  const salt = await genSalt(10);
  const hashedPassword = await hash("password", salt);
  console.log("Seeding started");

  const budi = await prisma.user.create({
    data: {
      name: "Budi",
      email: "budi@example.com",
      password: hashedPassword,
    },
  });

  console.log("Seeded user:", budi);
}

dataInput()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
