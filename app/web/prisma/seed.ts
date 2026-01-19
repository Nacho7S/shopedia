import { PrismaClient, Role } from "@prisma/client";
import { genSalt, hash } from "bcrypt";

const prisma = new PrismaClient();

async function dataInput() {
  console.log("Seeding started");

  const salt = await genSalt(12);
  const hashedPassword = await hash("password", salt);

  const user1 = await prisma.user.create({
    data: {
      name: "johndoe",
      email: "johndoe@gmail.com",
      password: hashedPassword,
      role: Role.USER,
    },
  });

  // 🏪 Seller user
  const sellerUser = await prisma.user.create({
    data: {
      name: "Anggi",
      email: "anggi@gmail.com",
      password: hashedPassword,
      role: Role.SELLER,
    },
  });

  // 💼 Seller profile linked to that user
  const seller = await prisma.seller.create({
    data: {
      shopName: "Anggi Store",
      bio: "We sell the best T-Shirts in town!",
      userId: sellerUser.id, // ✅ link to the SELLER user
    },
  });

  const category = await prisma.category.create({
    data: {
      name: "Shirt",
    },
  });

  const product = await prisma.product.create({
    data: {
      name: "Cotton candy T-shirt",
      price: 350000,
      stock: 100,
      categoryId: category.id,
      sellerId: seller.id,
    },
  });

  console.log("seeding is complete ✅");
}

dataInput()
  .catch((e) => {
    console.error("Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
