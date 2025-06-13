import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { loginSchema } from "@/schema/form-schema";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  // const form = useForm<z.inter<typeofloginSchema>>({
  //   resolver: zodResolver(loginSchema),
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //     rememberMe: false,
  //   },
  // });

  return (
    <main>
      <Card className="flex w-96 h-96 flex-col justify-between p-6">
        <CardHeader className="flex justify-between  items-center">
          <CardTitle>Welcome to Shopedia</CardTitle>
          <CardTitle className="flex items-center ">
            <button className="rounded-2xl border-2 border-black h-10 w-18">Sign up</button>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <h1>Login</h1>
          <input type="text" className="border-2 border-black rounded-2xl" />
          <h1>Passwrord</h1>
          <input type="text" className="border-2 border-black rounded-2xl" />
          <button className="bg-green-400 rounded-full border-2 border-black">Login</button>
        </CardContent>
        <CardFooter className="gap-4">
          <button>Google</button>
          <button>Facebook</button>
          <button>Twitter</button>
          <button>test</button>
        </CardFooter>
      </Card>
    </main>
  );
}
