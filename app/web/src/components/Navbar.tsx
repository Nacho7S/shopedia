"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { Input } from "./ui/input";
import { IoMdSearch } from "react-icons/io";

export default function Navbar() {
  return (
    <nav className="bg-gray-100 rounded-2xl h-16 flex items-center justify-between px-6">
      <Link href={"/"} className="text-2xl text-gray-900 font-bold">
        Shopedia
      </Link>

      <ul className="flex gap-8">
        <div className="flex gap-4 bg-gray-300 items-center justify-center h-10 w-72 rounded-2xl text-black">
          <IoMdSearch className="text-2xl " />
          <input type="text" className=" w-52 border-2  border-black hover:rounded-2xl rounded-2xl flex items-center justify-center" />
        </div>
      </ul>

      <div className="flex gap-3">
        <Button variant={"ghost"}>
          <Link href={"/auth/login"}>Login</Link>
        </Button>
        <Button variant={"ghost"}>
          <Link href={"/auth/signUp"}>Sign up</Link>
        </Button>
      </div>
    </nav>
  );
}
