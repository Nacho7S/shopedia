import { PrismaClient } from "@prisma/client";
import { genSalt, hash } from "bcrypt";

const prisma = new PrismaClient();

async function dataInput() {
  console.log("Seeding started");

  // Check if the user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email: "budi@example.com" },
  });

  if (!existingUser) {
    const salt = await genSalt(10);
    const hashedPassword = await hash("password", salt);

    const budi = await prisma.user.create({
      data: {
        name: "Budi",
        email: "budi@example.com",
        password: hashedPassword,
      },
    });

    console.log("Seeded user:", budi);
  } else {
    console.log("User  already exists:", existingUser);
  }
}

dataInput()
  .catch((e) => {
    console.error("Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
