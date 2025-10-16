import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Home/Navbar/Nav";

// const font = Quicksand({
//   weight: ['300', '400', '500', '600', '700'],
//   subsets: ["latin"]
// })

const font = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Trawell",
  description: "Travel Agency landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
