import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import DashboardWrapper from "@/components/DashboardWrapper";

const publicSans = localFont({
  src: "./fonts/PublicSans-VariableFont_wght.ttf",
  variable: "--font-public-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "FinTrack",
  description: "Morakinyo David Frontend development assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.className} antialiased`}>
        <DashboardWrapper>{children}</DashboardWrapper>
      </body>
    </html>
  );
}
