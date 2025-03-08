"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, TContactForm } from "./schema";
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
import { Textarea } from "../ui/textarea";

export const ContactForm = () => {
  const form = useForm<TContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      message: "",
      email: "",
      phone: "",
    },
  });
  function onSubmit(values: TContactForm) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Seu nome..." {...field} />
              </FormControl>
              <FormDescription>Seu nome.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input placeholder="user@email.com" type="email" {...field} />
              </FormControl>
              <FormDescription>Deixe seu email de contato.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefone / WhatsApp</FormLabel>
              <FormControl>
                <Input placeholder="55988884444" type="number" {...field} />
              </FormControl>
              <FormDescription>
                Deixe seu telefone de contato com DDD.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensagem</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Conte-nos algo sobre seu projeto..."
                  className="resize-none"
                  spellCheck="false"
                  data-ms-editor="false"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Entraremos em contato o mais breve possível.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Enviar</Button>
      </form>
    </Form>
  );
};
