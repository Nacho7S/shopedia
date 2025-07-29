"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { Input } from "./ui/input";
import { IoMdSearch } from "react-icons/io";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="bg-gray-100 rounded-2xl h-16 flex items-center justify-between px-6">
      <Link href={"/"} className="text-2xl text-gray-900 font-bold">
        Shopedia
      </Link>

      <ul className="flex gap-8">
        <div className="flex items-center gap-3 bg-gray-200 h-12 w-72 rounded-full px-4 shadow-inner">
          <IoMdSearch className="text-xl text-gray-600" />
          <Input type="text" placeholder="Search our product" className="border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent p-0 text-sm" />
        </div>
      </ul>

      <div className="flex gap-3 items-center">
        {status === "loading" ? (
          <span>Loading...</span>
        ) : session ? (
          <>
            {session.user?.image && <Image src={session.user.image} alt="Profile" width={32} height={32} className="rounded-full" />}
            <span className="text-sm">{session.user?.name}</span>
          </>
        ) : (
          <>
            <Button variant={"ghost"}>
              <Link href={"/auth/login"}>Login</Link>
            </Button>
            <Button variant={"ghost"}>
              <Link href={"/auth/signUp"}>Sign up</Link>
            </Button>
          </>
        )}
      </div>
    </nav>
  );
}
