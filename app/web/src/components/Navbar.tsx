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
        <div className="flex items-center gap-3 bg-gray-200 h-12 w-72 rounded-full px-4 shadow-inner">
          <IoMdSearch className="text-xl text-gray-600" />
          <Input type="text" placeholder="Search our product" className="border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent p-0 text-sm" />
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
