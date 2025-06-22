import { registerSchema } from "@/schema/form-schema";
import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const rawData = await request.json();
    const parsedData = registerSchema.safeParse(rawData);

    if (!parsedData.success) {
      return new Response(JSON.stringify(parsedData.error), {
        status: 400,
        headers: { "content-Type": "aplication/json" },
      });
    }

    const { email, password, name } = parsedData.data;

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return new Response("Email already in use", { status: 409 });
    }

    const hashedPassword = await hash(password, 12);

    await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });

    return new Response(
      JSON.stringify({
        message: "Berhasil membuat akun",
        ok: true,
      }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.log(error);
    return new Response("backend api error / internal server error", { status: 500 });
  }
}

export async function GET() {
  return new Response("Hello from GET register route");
}
