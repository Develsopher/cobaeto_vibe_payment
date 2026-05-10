import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center text-center text-sm leading-loose text-muted-foreground md:items-start md:text-left gap-1">
          <p className="font-semibold text-foreground">AI DREAM TELLER</p>
          <p>상호명: 코바에토(Cobaeto) | 대표: 홍길동 | 사업자등록번호: 123-45-67890</p>
          <p>통신판매업신고: 제2026-서울강남-1234호 | 주소: 서울특별시 강남구 테헤란로 123</p>
          <p>고객센터: support@cobaeto.com | 전화번호: 02-1234-5678</p>
          <p className="mt-2 text-xs opacity-70">
            &copy; {new Date().getFullYear()} Cobaeto. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 text-sm font-medium text-muted-foreground sm:flex-row">
          <Link href="/terms" className="hover:text-foreground hover:underline underline-offset-4 transition-colors">
            이용약관
          </Link>
          <Link href="/privacy" className="hover:text-foreground hover:underline underline-offset-4 transition-colors">
            개인정보처리방침
          </Link>
          <Link href="#" className="hover:text-foreground hover:underline underline-offset-4 transition-colors">
            문의하기
          </Link>
        </div>
      </div>
    </footer>
  );
};
