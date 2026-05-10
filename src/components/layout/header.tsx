import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between mx-auto px-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold">AI DREAM TELLER</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        {/* TODO: Auth 상태에 따라 조건부 렌더링 적용 필요 */}
        <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
          <Link
            href="/guest-login"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            로그인
          </Link>
          <Link
            href="/guest-check"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            비회원 주문 조회
          </Link>
          <Link
            href="/my-page"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            마이페이지
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="메뉴 열기">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="flex flex-col gap-6 p-6 w-full">
            <SheetTitle className="sr-only">메뉴</SheetTitle>
            <div className="flex items-center gap-2 mt-2">
              <span className="font-bold">AI DREAM TELLER</span>
            </div>
            {/* TODO: Auth 상태에 따라 조건부 렌더링 적용 필요 */}
            <nav className="flex flex-col gap-4 text-sm font-medium">
              <Link
                href="/guest-login"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                로그인
              </Link>
              <Link
                href="/guest-check"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                비회원 주문 조회
              </Link>
              <Link
                href="/my-page"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                마이페이지
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
