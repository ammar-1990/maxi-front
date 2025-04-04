import type { Metadata } from "next";

import "./globals.css";
import { Toaster } from "@/components/ui/sonner";



export const metadata: Metadata = {
  title: "MAXI",
  description: "Best Content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        
        {children}
        <Toaster richColors/>
      </body>
    </html>
  );
}
