import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function UserHandler(req: NextApiRequest, res: NextApiResponse) {
  const { username, email, password } = req.body();

  const editProfile = await prisma.post.findUnique({
    where: {},
  });
}
