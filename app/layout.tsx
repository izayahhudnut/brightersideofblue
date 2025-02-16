// app/layout.tsx (or wherever your RootLayout is located)
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";
import Chat from "@/components/Chat";

// Import a Google Font that is available
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Brighter Side of Blue",
  description: "Join us for exciting conversations about Police Rules terms  and so much more. Our awesome guests are industry experts.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <Chat />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
