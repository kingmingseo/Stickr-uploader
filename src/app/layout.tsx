import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stickr Uploader",
  description: "스티커 업로드 및 관리 시스템",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {children}
      </body>
    </html>
  );
}
