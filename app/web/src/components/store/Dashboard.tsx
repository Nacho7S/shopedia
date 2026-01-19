import ShopNavbar from "./NavbarShop";
// import { FaTshirt } from "react-icons/fa";
// import { GiSleevelessJacket } from "react-icons/gi";
// import { IoShirtSharp } from "react-icons/io5";
// import { GiTrousers } from "react-icons/gi";
// import { PiBagFill } from "react-icons/pi";
// import { GiRunningShoe } from "react-icons/gi";
// import { CgMenuGridO } from "react-icons/cg";
import Image from "next/image";
import { Card, CardFooter, CardTitle, CardContent, CardDescription } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <main className="w-screen h-[100vh]">
      <div className="flex justify-center items-center w-screen">
        <ShopNavbar />
      </div>
      <div className="  w-screen h-96 items-center justify-center flex">
        <div className="p-2 border-2 w-[900px] h-80 border-black items-center justify-center flex rounded-2xl">
          {/* <Image height={500} width={500} alt="Shop items images" src={"https://i.pinimg.com/1200x/f1/ec/27/f1ec27dc53600c6985571ba4b9f22891.jpg"} /> */}
        </div>
      </div>

      <div className="w-screen h-96 flex justify-center items-center gap-3">
        <Card className="h-[340px] w-[200px] flex justify-center items-center border-2 hover:shadow-2xl hover:-translate-y-3">
          <CardContent className="p-0 w-full flex justify-center">
            <Image src="https://i.pinimg.com/736x/8c/db/e1/8cdbe123010c380e20f264a8fdd57938.jpg" alt="Shop items images" width={200} height={200} className="rounded-md h-[205px] w-[200px]" />
          </CardContent>
          <CardTitle className=" w-50 justify-center items-center flex">Headphone JBL/ AA-10</CardTitle>
          <div className="flex gap-2">
            <CardDescription>decription1</CardDescription>
            <CardDescription>decription1</CardDescription>
          </div>
          <CardFooter>footer1</CardFooter>
        </Card>

        <Card className="h-[340px] w-[200px] flex justify-center items-center border-2 hover:shadow-2xl hover:-translate-y-3">
          <CardContent className="p-0 w-full flex justify-center">
            <Image src="https://i.pinimg.com/736x/8c/db/e1/8cdbe123010c380e20f264a8fdd57938.jpg" alt="Shop items images" width={200} height={200} className="rounded-md h-[205px] w-[200px]" />
          </CardContent>
          <CardTitle className=" w-50 justify-center items-center flex">Headphone JBL/ AA-10</CardTitle>
          <div className="flex gap-2">
            <CardDescription>decription1</CardDescription>
            <CardDescription>decription1</CardDescription>
          </div>
          <CardFooter>footer1</CardFooter>
        </Card>

        <Card className="h-[340px] w-[200px] flex justify-center items-center border-2 hover:shadow-2xl hover:-translate-y-3">
          <CardContent className="p-0 w-full flex justify-center">
            <Image src="https://i.pinimg.com/736x/8c/db/e1/8cdbe123010c380e20f264a8fdd57938.jpg" alt="Shop items images" width={200} height={200} className="rounded-md h-[205px] w-[200px]" />
          </CardContent>
          <CardTitle className=" w-50 justify-center items-center flex">Headphone JBL/ AA-10</CardTitle>
          <div className="flex gap-2">
            <CardDescription>decription1</CardDescription>
            <CardDescription>decription1</CardDescription>
          </div>
          <CardFooter>footer1</CardFooter>
        </Card>

        <Card className="h-[340px] w-[200px] flex justify-center items-center border-2 hover:shadow-2xl hover:-translate-y-3">
          <CardContent className="p-0 w-full flex justify-center">
            <Image src="https://i.pinimg.com/736x/8c/db/e1/8cdbe123010c380e20f264a8fdd57938.jpg" alt="Shop items images" width={200} height={200} className="rounded-md h-[205px] w-[200px]" />
          </CardContent>
          <CardTitle className=" w-50 justify-center items-center flex">Headphone JBL/ AA-10</CardTitle>
          <div className="flex gap-2">
            <CardDescription>decription1</CardDescription>
            <CardDescription>decription1</CardDescription>
          </div>
          <CardFooter>footer1</CardFooter>
        </Card>

        <Card className="h-[340px] w-[200px] flex justify-center items-center border-2 hover:shadow-2xl hover:-translate-y-3">
          <CardContent className="p-0 w-full flex justify-center">
            <Image src="https://i.pinimg.com/736x/8c/db/e1/8cdbe123010c380e20f264a8fdd57938.jpg" alt="Shop items images" width={200} height={200} className="rounded-md h-[205px] w-[200px]" />
          </CardContent>
          <CardTitle className=" w-50 justify-center items-center flex">Headphone JBL/ AA-10</CardTitle>
          <div className="flex gap-2">
            <CardDescription>decription1</CardDescription>
            <CardDescription>decription1</CardDescription>
          </div>
          <CardFooter>footer1</CardFooter>
        </Card>
      </div>
      <div className="w-screen h-96 flex justify-center items-center gap-3">
        <Card className="h-[340px] w-[200px] flex justify-center items-center border-2 hover:shadow-2xl hover:-translate-y-3">
          <CardContent className="p-0 w-full flex justify-center">
            <Image src="https://i.pinimg.com/736x/8c/db/e1/8cdbe123010c380e20f264a8fdd57938.jpg" alt="Shop items images" width={200} height={200} className="rounded-md h-[205px] w-[200px]" />
          </CardContent>
          <CardTitle className=" w-50 justify-center items-center flex">Headphone JBL/ AA-10</CardTitle>
          <div className="flex gap-2">
            <CardDescription>decription1</CardDescription>
            <CardDescription>decription1</CardDescription>
          </div>
          <CardFooter>footer1</CardFooter>
        </Card>

        <Card className="h-[340px] w-[200px] flex justify-center items-center border-2 hover:shadow-2xl hover:-translate-y-3">
          <CardContent className="p-0 w-full flex justify-center">
            <Image src="https://i.pinimg.com/736x/8c/db/e1/8cdbe123010c380e20f264a8fdd57938.jpg" alt="Shop items images" width={200} height={200} className="rounded-md h-[205px] w-[200px]" />
          </CardContent>
          <CardTitle className=" w-50 justify-center items-center flex">Headphone JBL/ AA-10</CardTitle>
          <div className="flex gap-2">
            <CardDescription>decription1</CardDescription>
            <CardDescription>decription1</CardDescription>
          </div>
          <CardFooter>footer1</CardFooter>
        </Card>

        <Card className="h-[340px] w-[200px] flex justify-center items-center border-2 hover:shadow-2xl hover:-translate-y-3">
          <CardContent className="p-0 w-full flex justify-center">
            <Image src="https://i.pinimg.com/736x/8c/db/e1/8cdbe123010c380e20f264a8fdd57938.jpg" alt="Shop items images" width={200} height={200} className="rounded-md h-[205px] w-[200px]" />
          </CardContent>
          <CardTitle className=" w-50 justify-center items-center flex">Headphone JBL/ AA-10</CardTitle>
          <div className="flex gap-2">
            <CardDescription>decription1</CardDescription>
            <CardDescription>decription1</CardDescription>
          </div>
          <CardFooter>footer1</CardFooter>
        </Card>

        <Card className="h-[340px] w-[200px] flex justify-center items-center border-2 hover:shadow-2xl hover:-translate-y-3">
          <CardContent className="p-0 w-full flex justify-center">
            <Image src="https://i.pinimg.com/736x/8c/db/e1/8cdbe123010c380e20f264a8fdd57938.jpg" alt="Shop items images" width={200} height={200} className="rounded-md h-[205px] w-[200px]" />
          </CardContent>
          <CardTitle className=" w-50 justify-center items-center flex">Headphone JBL/ AA-10</CardTitle>
          <div className="flex gap-2">
            <CardDescription>decription1</CardDescription>
            <CardDescription>decription1</CardDescription>
          </div>
          <CardFooter>footer1</CardFooter>
        </Card>

        <Card className="h-[340px] w-[200px] flex justify-center items-center border-2 hover:shadow-2xl hover:-translate-y-3">
          <CardContent className="p-0 w-full flex justify-center hover:shadow-2xl">
            <Image src="https://i.pinimg.com/736x/8c/db/e1/8cdbe123010c380e20f264a8fdd57938.jpg" alt="Shop items images" width={200} height={200} className="rounded-md h-[205px] w-[200px]" />
          </CardContent>
          <CardTitle className=" w-50 justify-center items-center flex">Headphone JBL/ AA-10</CardTitle>
          <div className="flex gap-2">
            <CardDescription>decription1</CardDescription>
            <CardDescription>decription1</CardDescription>
          </div>
          <CardFooter>footer1</CardFooter>
        </Card>
      </div>
    </main>
  );
}
