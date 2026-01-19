import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex w-screen h-[100vh]">
      <div className="flex p-3  justify-center items-center flex-col w-screen">
        {/* Hero Text Section */}
        <div className="font-bold text-3xl flex flex-col ">
          {/* Headline Text */}
          <div className="justify-center items-center flex flex-col font-serif text-7xl">
            <h1 className="bg-white rounded-2xl">Discover What You Love.</h1>
            <h1 className="bg-white rounded-2xl">Shop Smarter, Live Better.</h1>
          </div>
          <h2 className="bg-white rounded-2xl">Find everything you need — from everyday essentials to exclusive finds — all in one place.</h2>
        </div>
        <div className="p-4">
          <Link href={"/shop"}>
            <button className="shadow-xl rounded-full border-2 w-40 h-10 hover:bg-gray-200 bg-white border-black transition transform hover:translate-y-1 duration-200 ease-in-out">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
