import type { Metadata } from "next";
import { Poppins, Nunito } from "next/font/google";
import "../styles/globals.css"
import "../styles/services.css"
import "../styles/about.css"
import "../styles/contact.css"
import Footer from "@/components/Footer";

const inter = Nunito({ subsets: ["vietnamese"]});

export const metadata: Metadata = {
  title: "Eco-Kenya",
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
