"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { registerSchema } from "@/schema/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  const onSubmit = () => {
    return null;
  };
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
            <form className="flex flex-col gap-4 text-muted-foreground " onSubmit={form.handleSubmit(onSubmit)}>
              <div className="text-muted-foreground hover:text-primary hover:cursor-pointer ">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
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

              <Button>Sign Up</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex items-center justify-center gap-4">nothing to see here</CardFooter>
      </Card>
    </main>
  );
}
