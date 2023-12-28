import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Nav from "@/components/Nav";
import TopLeftImg from "@/components/TopLeftImg";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  // variable: "--font sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${sora.className}  page bg-site text-white bg-cover bg-no-repeat font-sora relative`}
      >
        <TopLeftImg />
        <Nav />
        <Header />
        {children}
        {/* <Layout>
          <TopLeftImg />
          <Nav />
          <Header />
        </Layout> */}
      </body>
    </html>
  );
}
