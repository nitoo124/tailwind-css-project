import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";


export const metadata: Metadata = {
  title: "tailwind css project",
  description: "Basic project using tailwind css",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-white'>
        <Header/>
        {children}
        <Footer/>
        
        </body>
    </html>
  );
}
