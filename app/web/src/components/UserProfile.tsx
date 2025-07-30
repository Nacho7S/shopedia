import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

export default async function UserProfile() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.id) {
    redirect("/login");
  }

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <Card>
        <div className="flex gap-5 p-6 w-screen justify-center items-center ">
          <CardHeader>
            <div className="w-8 h-8 relative">{session.user?.image && <Image src={session.user.image} alt="Profile" fill className="rounded-full object-cover" />}</div>
          </CardHeader>
          <CardTitle className="flex text-center pb-3">{session.user?.name}</CardTitle>
        </div>
        <CardContent>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit...</p>
        </CardContent>
      </Card>
    </div>
  );
}
