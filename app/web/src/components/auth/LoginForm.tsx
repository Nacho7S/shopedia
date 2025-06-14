"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/schema/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
export default function LoginForm() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  return (
    <main>
      <Card className="flex flex-col justify-between h-[calc(100vh-3rem)] py-6">
        <CardHeader className="flex flex-col items-start ">
          <CardTitle>Hello! Welcome to Shopedia</CardTitle>
          <CardTitle>We are glad to see you 🎉🎉</CardTitle>
          <CardTitle className="flex items-center "></CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Form {...form}>
            <form className="flex flex-col gap-4 text-muted-foreground ">
              <div className="text-muted-foreground hover:text-primary">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="text-muted-foreground hover:text-primary">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input placeholder="Password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button>Login</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex gap-4 items-center">
          <button>Google</button>
          <button>Facebook</button>
          <button>Twitter</button>
          <button>test</button>
        </CardFooter>
      </Card>
    </main>
  );
}
