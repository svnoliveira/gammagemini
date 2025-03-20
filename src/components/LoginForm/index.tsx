"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema, TLoginForm } from "./schema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { userStore } from "@/stores/UserStore";
import { redirect } from "next/navigation";

export const LoginForm = () => {
  const form = useForm<TLoginForm>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { setUserList, login, userData, loadUser, loadUserList } = userStore();

  useEffect(() => {
    const loadLists = async () => {
      await loadUserList();
    };

    loadLists();
    if (!userData.user) {
      loadUser();
    }
    if (userData.user) {
      redirect("/admin/dashboard");
    }
  }, [setUserList, userData, loadUser, loadUserList]);

  function onSubmit(values: TLoginForm) {
    try {
      login(values.username, values.password);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormDescription>Login username.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="" type="password" {...field} />
              </FormControl>
              <FormDescription>Password.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
