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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
