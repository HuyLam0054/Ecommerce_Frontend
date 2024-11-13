import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/css/globals.css";
import { NavbarRoot } from "@/components/layout/header/navbar";
import { FooterRoot } from "@/components/layout/footer/footer";
import Bottom_Navbar from "@/components/common/navbar/bottom.navbar";

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Brian Apple",
  description: "Design and Create by HuyLam",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`min-w-screen ${montserrat.className}`}>
        <NavbarRoot />
        {children}
        <FooterRoot />
        <Bottom_Navbar />
      </body>
    </html>
  );
}
