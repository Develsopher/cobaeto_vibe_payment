import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI DREAM TELLER | 나만의 꿈 해석 리포트",
  description: "어젯밤 꿈, 아직 기억나시나요? 4가지 전문 관점으로 AI가 당신의 꿈을 심층 분석합니다.",
  openGraph: {
    title: "AI DREAM TELLER | 나만의 꿈 해석 리포트",
    description: "프로이트부터 신경과학까지, 당신만의 꿈 해석을 3분 안에 받아보세요.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
