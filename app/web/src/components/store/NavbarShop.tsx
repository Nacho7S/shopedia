import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import Dropdown from "./Dropdown";

export default function ShopNavbar() {
  return (
    <div className="flex justify-center items-center gap-10 p-6">
      {/* Logo */}
      <div>
        <Link href="/">
          <h1 className="font-semibold text-2xl text-gray-900">Shopedia</h1>
        </Link>
      </div>
      {/* category */}
      <div className="bg-gray-50 border-2 border-gray-400 rounded-sm w-full max-w-[800px] h-9 flex items-center gap-2 px-2">
        <Dropdown />
        <div className="flex items-center gap-2 px-2 w-full">
          <CiSearch className="text-xl text-gray-600" />
          <Input type="text" placeholder="Search products or brands..." className="w-full border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-sm placeholder-gray-400" />
        </div>
      </div>

      <div className="flex items-center gap-6 text-gray-700">
        <Link href="/cart" className="hover:text-gray-900 transition flex justify-center items-center gap-2">
          <Button variant={"ghost"}>
            <FaShoppingCart />
            Cart
          </Button>
        </Link>
        <Link href="/account" className="hover:text-gray-900 transition flex justify-center items-center gap-2">
          <Button variant={"ghost"}>
            <FaUser />
            Account
          </Button>
        </Link>
      </div>
    </div>
  );
}
