"use client";

// import { Button } from "../ui/button";
import Link from "next/link";
// import { Input } from "../ui/input";
// import { IoMdSearch } from "react-icons/io";
// import { useSession } from "next-auth/react";
// import Image from "next/image";

// import { signOut } from "next-auth/react";

// import { useState } from "react";

// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);
  // const { data: session, status } = useSession();

  return (
    <nav className="bg-gray-100 rounded-full h-16 flex items-center justify-between px-6 w-[800px]">
      <Link href={"/"} className="text-2xl text-gray-900 font-bold">
        Shopedia.com
      </Link>

      {/* <div className="">
        {status === "loading" ? (
          <span>Loading...</span>
        ) : session ? (
          <div className="flex">
            <Popover open={isOpen} onOpenChange={setIsOpen}>
              <PopoverTrigger asChild>
                <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 cursor-pointer bg-transparent border-none outline-none">
                  <div>{session.user?.image && <Image src={session.user.image} alt="Profile" width={32} height={32} className="rounded-full" />}</div>
                </button>
              </PopoverTrigger>

              <PopoverContent align="end" className="w-40">
                <div className="flex flex-col gap-2 justify-center items-center">
                  <Link href={"/user/profile"}>
                    <Button variant="ghost">Profile</Button>
                  </Link>
                  <Link href={"/user/profile"}>
                    <Button variant="ghost">Profile</Button>
                  </Link>
                  <Link href={"/user/profile"}>
                    <Button variant="ghost">Profile</Button>
                  </Link>
                  <Button
                    variant="ghost"
                    onClick={() => signOut({ callbackUrl: "/" })} // redirect back home after logout
                  >
                    Logout
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <div className="p-6 flex gap-3 items-center">
            <Button variant={"ghost"}>
              <Link href={"/auth/login"}>Login</Link>
            </Button>
            <Button variant={"ghost"}>
              <Link href={"/auth/roles"}>Sign up</Link>
            </Button>
          </div>
        )}
      </div> */}
    </nav>
  );
}
