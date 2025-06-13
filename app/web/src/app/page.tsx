import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoginForm from "@/components/auth/LoginForm";

export default function Home() {
  return (
    <main className="flex  bg-red-100">
      <div className="h-96 w-96 p-6 flex min-h-screen  ">
        <LoginForm />
      </div>
    </main>
  );
}
