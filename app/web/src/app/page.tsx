import LoginForm from "@/components/auth/LoginForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center gap-5 p-6">
      <div className="w-[400px]">
        <LoginForm />
      </div>

      {/* FLEX-1 HERE ⬇️ */}
      <div className="flex-1 h-[calc(100vh-3rem)] rounded-2xl flex items-center justify-center bg-indigo-50 px-20">
        <figure className="hidden w-[450px] items-center justify-center overflow-hidden rounded-full py-4 lg:flex">
          <Image src="/illustration login.png" alt="Illustration of a person logging in" height={400} width={400} className="h-[400px] w-auto" />
        </figure>
      </div>
    </main>
  );
}
