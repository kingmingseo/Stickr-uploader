import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stickr Uploader",
  description: "스티커 업로드 및 관리 시스템",
  icons: {
    icon: "/Stickr.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} antialiased bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50`}>
        {children}
      </body>
    </html>
  );
}
