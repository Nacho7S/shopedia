import LoginForm from "@/components/auth/LoginForm";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <nav>
        <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
          <div className="text-lg font-bold">My App</div>
          <div className="space-x-4">
            <a href="/" className="hover:underline">
              Home
            </a>
            <a href="/login" className="hover:underline">
              Login
            </a>
          </div>
        </div>
      </nav>
      {/* // Main content area */}
      <div className="flex flex-col  items-center space-y-2 gap-5 p-6 ">
        <div className="h-56 min-w-11/12 border-2 border-black rounded-2xl p-6">atas</div>
        <div className="flex h-[410px] w-11/12 rounded-2xl border-2 border-black justify-between">
          <div className="flex items-center justify-center  gap-2 p-2">
            <div className="border-2 border-green-200 rounded-2xl h-96 w-56">kiri</div>
            <div className="border-2 border-green-200 rounded-2xl h-96 w-56">kanan</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 p-2">
            <div className="flex flex-row gap-10">
              <div className="basis-1/4 md:basis-1/3 border-green-200 border-2 rounded-2xl h-48 w-48">01</div>
              <div className="basis-1/4 md:basis-1/3 border-green-200 border-2 rounded-2xl h-48 w-48">02</div>
              <div className="basis-1/2 md:basis-1/3 border-green-200 border-2 rounded-2xl h-48 w-48">03</div>
            </div>
            <div className="flex flex-row gap-10">
              <div className="basis-1/4 md:basis-1/3 border-green-200 border-2 rounded-2xl h-48 w-48">01</div>
              <div className="basis-1/4 md:basis-1/3 border-green-200 border-2 rounded-2xl h-48 w-48">02</div>
              <div className="basis-1/2 md:basis-1/3 border-green-200 border-2 rounded-2xl h-48 w-48">03</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
