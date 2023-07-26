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
  title: "Store",
  description: "store",
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
