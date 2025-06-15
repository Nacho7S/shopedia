"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/schema/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { FaMeta } from "react-icons/fa6";

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
      <Card className="flex flex-col  h-[calc(100vh-3rem)] py-6">
        <CardHeader className="flex flex-col items-start ">
          <CardTitle>Hello! Welcome to Shopedia</CardTitle>
          <CardTitle>We are glad to see you 🎉🎉</CardTitle>
          <CardTitle className="flex items-center "></CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 pt-24">
          <Form {...form}>
            <form className="flex flex-col gap-4 text-muted-foreground ">
              <div className="text-muted-foreground hover:text-primary hover:cursor-pointer ">
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
              <div className="text-muted-foreground hover:text-primary  hover:cursor-pointer">
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
              <p className="flex items-center justify-center text-sm text-muted-foreground">
                Don&apos;t have an account?
                <Link rel="stylesheet" href="#" className="hover:underline text-blue-500">
                  Sign up
                </Link>
              </p>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex items-center justify-center gap-4">
          <Button variant={"outline"}>
            <FcGoogle />
          </Button>
          <Button variant={"outline"}>
            <FaMeta />
          </Button>
          <Button variant={"outline"}>
            <FaFacebook />
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
