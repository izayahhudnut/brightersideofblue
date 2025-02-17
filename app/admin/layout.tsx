"use client";

import Link from "next/link";
import { LayoutDashboard, PenSquare } from "lucide-react";
import { Button } from "@/components/ui/button1";
import { Toaster } from "@/components/ui/toaster";
import Image from "next/image";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  RedirectToSignIn,
} from "@clerk/nextjs";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>

      <SignedIn>
        <div className="flex flex-col min-h-screen bg-zinc-50">
          {/* Navbar */}
          <header className="flex justify-between items-center p-4 bg-white shadow-md">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/darklogo.svg" alt="Logo" width={150} height={50} className="object-contain" />
            </Link>
            <UserButton afterSignOutUrl="/" />
          </header>

          <div className="flex flex-1">
            {/* Sidebar */}
            <aside className="w-64 border-r bg-white p-6 space-y-6 hidden md:block">
              <div className="font-semibold text-lg">Admin Panel</div>
              <nav className="space-y-2">
                <Link href="/admin">
                  <Button variant="ghost" className="w-full justify-start">
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    Dashboard
                  </Button>
                </Link>
                <Link href="/admin/create">
                  <Button variant="ghost" className="w-full justify-start">
                    <PenSquare className="mr-2 h-4 w-4" />
                    Create Post
                  </Button>
                </Link>
              </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 overflow-y-auto">{children}</main>
          </div>

          <Toaster />
        </div>
      </SignedIn>
    </ClerkProvider>
  );
}
