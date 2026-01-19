import RegisterForm from "@/components/auth/RegisterForm";
import Image from "next/image";

export default function signUp() {
  return (
    <main className="flex min-h-screen gap-5  items-center p-6">
      <div className="w-[400px]">
        <RegisterForm />
      </div>
      <div className="flex-1 h-[calc(100vh-3rem)] rounded-2xl flex items-center justify-center bg-indigo-50 px-20">
        <figure>
          <Image src="/illustrationSignup.svg" alt="illustratioin for Sign up page" height={400} width={400} className="h-[400px] w-auto" />
        </figure>
      </div>
    </main>
  );
}
