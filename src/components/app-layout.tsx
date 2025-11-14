"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Home, Search, List, Wand2, User, LogOut, Clapperboard, Tv } from 'lucide-react';

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${searchQuery}`);
    }
  };
  
  const navItems = [
    { href: '/browse', icon: <Home />, label: 'Inicio', tooltip: 'Inicio' },
    { href: '/search', icon: <Search />, label: 'Buscar', tooltip: 'Buscar' },
    { href: '/my-list', icon: <List />, label: 'Mi Lista', tooltip: 'Mi Lista' },
    { href: '/recommendations', icon: <Wand2 />, label: 'Para Ti', tooltip: 'Recomendaciones' },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar collapsible="icon" className="border-r border-sidebar-border">
          <SidebarHeader>
            <Link href="/browse" className="block p-2">
                <Logo className="w-auto h-8 text-primary group-data-[state=collapsed]:hidden" />
                <Clapperboard className="w-8 h-8 text-primary hidden group-data-[state=collapsed]:block" />
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navItems.map(item => (
                <SidebarMenuItem key={item.href}>
                  <Link href={item.href} passHref legacyBehavior>
                    <SidebarMenuButton
                      isActive={pathname.startsWith(item.href)}
                      tooltip={{ children: item.tooltip, side: 'right' }}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        <SidebarInset className="bg-background">
          <header className="sticky top-0 z-20 flex items-center justify-between h-16 px-4 md:px-6 bg-background/80 backdrop-blur-sm border-b border-border">
            <div className="flex items-center gap-2">
                <SidebarTrigger className="md:hidden" />
                <div className="hidden md:flex items-center gap-4">
                  <Link href="/browse" className="hover:text-primary transition-colors">Películas</Link>
                  <Link href="/browse" className="hover:text-primary transition-colors">Series</Link>
                </div>
            </div>
            
            <div className="flex items-center gap-4">
              <form onSubmit={handleSearch} className="relative hidden sm:block">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar títulos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 w-48 md:w-64 bg-input"
                  />
              </form>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">Usuario</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        usuario@email.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => router.push('/')}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Cerrar sesión</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          <main className="flex-1 p-4 md:p-6">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
