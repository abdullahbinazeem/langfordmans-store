import "./globals.css";
import type { Metadata } from "next";
import { Urbanist, Montserrat } from "next/font/google";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import getCategories from "@/actions/get-categories";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LangfordMan",
  description:
    "LangfordMan are a local supplier of Sewing & Embroidery in Victoria BC. We have a collection of our work and library and you can purchase tarps and other embroideries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
