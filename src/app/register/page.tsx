"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Logo from "@/components/logo";
import { placeholderImages } from "@/lib/placeholder-images.json";

const formSchema = z.object({
  email: z.string().email({
    message: "Por favor, introduce una dirección de correo electrónico válida.",
  }),
  password: z.string().min(6, {
    message: "La contraseña debe tener al menos 6 caracteres.",
  }),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden.",
    path: ["confirmPassword"],
});

export default function RegisterPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulate a successful registration and login
    console.log(values);
    router.push("/browse");
  }
  
  const bgImage = placeholderImages.find(p => p.id === 'login-bg');

  return (
    <div className="relative min-h-screen w-full">
      {bgImage && (
         <Image
            src={bgImage.imageUrl}
            alt={bgImage.description}
            data-ai-hint={bgImage.imageHint}
            fill
            className="object-cover object-center"
          />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="bg-black/75 border-border backdrop-blur-sm">
            <CardHeader className="items-center text-center pt-8">
              <Logo className="h-10 w-auto text-primary mb-4" />
              <h1 className="text-2xl font-bold tracking-tight text-white">Crea una cuenta</h1>
            </CardHeader>
            <CardContent className="p-8">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Correo Electrónico</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="tu@email.com"
                            {...field}
                            className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus:bg-zinc-700"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Contraseña</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="••••••••"
                            {...field}
                            className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus:bg-zinc-700"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Confirmar Contraseña</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="••••••••"
                            {...field}
                            className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus:bg-zinc-700"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full text-lg h-12 mt-8">
                    Registrarse
                  </Button>
                </form>
              </Form>
              <p className="mt-8 text-center text-sm text-zinc-400">
                ¿Ya tienes una cuenta?{' '}
                <Link
                  href="/"
                  className="font-medium text-primary hover:underline"
                >
                  Inicia sesión
                </Link>
                .
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
