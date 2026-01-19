import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Roles() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-white">
      <h1 className="font-extrabold text-5xl text-gray-900">Choose Your Role</h1>
      <h4 className="text-gray-500 mt-2">Select how you want to use Shopedia.</h4>

      <div className="flex flex-wrap justify-center items-center gap-20 pt-12">
        {/* Buyer Card */}
        <Link href="/auth/signUp">
          <Card
            className="group flex flex-col w-[360px] h-[564px] bg-[#D9D9D9] items-center
          cursor-pointer transition-all duration-500 ease-out
          hover:-translate-y-6 hover:shadow-2xl hover:bg-gray-300"
          >
            <CardContent
              className="flex w-[317px] h-[424px] justify-center items-center bg-white rounded-2xl 
            transition-all duration-500 group-hover:scale-105"
            >
              <Image src="/Buyer.png" width={500} height={500} alt="Buyer Image" className="transition-transform duration-500 group-hover:scale-105" />
            </CardContent>
            <CardTitle className="text-[40px] font-semibold mt-3 transition-colors duration-500 group-hover:text-gray-800">Buyer</CardTitle>
            <CardDescription className="text-[20px] text-gray-700 transition-opacity duration-500 group-hover:opacity-90">Shop for products and deals.</CardDescription>
          </Card>
        </Link>

        {/* Seller Card */}
        <Card
          className="group flex flex-col w-[360px] h-[564px] bg-[#D9D9D9] items-center
          cursor-pointer transition-all duration-500 ease-out
          hover:-translate-y-6 hover:shadow-2xl hover:bg-gray-300"
        >
          <CardContent
            className="flex w-[317px] h-[424px] justify-center items-center bg-white rounded-2xl 
            transition-all duration-500 group-hover:scale-105"
          >
            <Image src="/Seller.png" width={500} height={500} alt="Seller Image" className="transition-transform duration-500 group-hover:scale-105" />
          </CardContent>
          <CardTitle className="text-[40px] font-semibold mt-3 transition-colors duration-500 group-hover:text-gray-800">Seller</CardTitle>
          <CardDescription className="text-[20px] text-gray-700 transition-opacity duration-500 group-hover:opacity-90">Sell your items to other users.</CardDescription>
        </Card>
      </div>
    </div>
  );
}
