import Nav from "@/components/Nav";
import "./globals.css";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import TopLeftImg from "@/components/TopLeftImg";
import Header from "@/components/Header";
import { AnimatePresence, motion } from "framer-motion";
import Transition from "@/components/Transition";
import Layout from "@/components/Layout";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font sora",
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
        className={`${sora.className} page bg-site text-white bg-cover bg-no-repeat font-sora relative`}
      >
        <Layout>
          <TopLeftImg />
          <Nav />
          <Header />
          {children}
        </Layout>
      </body>
    </html>
  );
}
