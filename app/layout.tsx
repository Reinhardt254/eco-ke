import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css"
import "../styles/services.css"
import "../styles/about.css"
import "../styles/contact.css"
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eko-Kenya",
  description: "Eco Threads Kenya",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
           {children}
         <Footer />
        </div>
        </body>
    </html>
  );
}
