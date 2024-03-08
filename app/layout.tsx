import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/providers/auth";
import { Header } from "../components/Header";
import Footer from "@/components/Footer";
import ToastProvider from "@/providers/toast";
import { Suspense } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Trips",
  description: "Travel System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Suspense>
          <AuthProvider>
            <ToastProvider>
              <div className="flex flex-col h-screen">
                <div className="h-[94px]">
                  <Header />
                </div>

                <div className="flex-1">{children}</div>

                <Footer />
              </div>
            </ToastProvider>
          </AuthProvider>
        </Suspense>
      </body>
    </html>
  );
}
