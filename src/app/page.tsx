import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BrainCircuit, Sparkles, Image as ImageIcon, CalendarDays, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#FDFBF7] text-slate-800 overflow-hidden font-sans">
      {/* Background Aurora Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-purple-300/40 blur-[120px] mix-blend-multiply opacity-70" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-pink-300/40 blur-[120px] mix-blend-multiply opacity-70" />
        <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[40%] rounded-full bg-blue-300/40 blur-[120px] mix-blend-multiply opacity-70" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-12 md:py-20 flex flex-col items-center">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center max-w-4xl pt-12 pb-20 md:pt-24 md:pb-32">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-sm mb-8 hover:bg-white/80 transition-colors">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-slate-700">AI가 분석하는 무의식의 세계</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.15]">
            어젯밤 꿈, <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500">
              아직 기억나시나요?
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-12 leading-relaxed font-medium">
            프로이트부터 신경과학까지, 4가지 전문 관점으로 AI가 당신의 꿈을 분석합니다. 
            어젯밤 꿈을 적으면, 3분 안에 당신만의 꿈 해석 리포트가 완성됩니다.
          </p>
          <Link href="/dream-teller">
            <Button 
              size="lg" 
              className="rounded-full px-8 py-7 text-lg font-semibold bg-slate-900 text-white hover:bg-slate-800 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300 group"
            >
              내 꿈 해석 시작하기
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </section>

        {/* Features Bento Grid Section */}
        <section className="w-full max-w-6xl py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(250px,auto)]">
            
            {/* Card 1 (Main/Large) */}
            <div className="group relative col-span-1 md:col-span-2 overflow-hidden rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(168,85,247,0.15)] hover:-translate-y-1 transition-all duration-500 p-8 flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col items-start">
                <div className="p-4 rounded-2xl bg-white/60 shadow-sm border border-white/50 mb-6 group-hover:scale-110 transition-transform duration-500">
                  <BrainCircuit className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800 leading-tight">
                  프로이트, 칼 융,<br />그리고 신경과학까지
                </h3>
                <p className="text-slate-600 max-w-md leading-relaxed font-medium">
                  하나의 꿈, 네 가지 학문적 렌즈. 원하는 전문 관점을 선택해 나만의 꿈 해석을 받아보세요.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(236,72,153,0.15)] hover:-translate-y-1 transition-all duration-500 p-8 flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="p-3 rounded-2xl bg-white/60 shadow-sm border border-white/50 mb-6 inline-block group-hover:scale-110 transition-transform duration-500">
                  <Sparkles className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">
                  키워드 검색은 그만,<br />AI 심층 해석
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">
                  꿈 속 상징, 감정, 서사 구조를 AI가 종합적으로 분석하여 당신만의 해석 리포트를 생성합니다.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.15)] hover:-translate-y-1 transition-all duration-500 p-8 flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="p-3 rounded-2xl bg-white/60 shadow-sm border border-white/50 mb-6 inline-block group-hover:scale-110 transition-transform duration-500">
                  <ImageIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">
                  꿈을 다시 눈앞에
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">
                  AI가 당신의 꿈 속 장면을 한 장의 이미지로 그려드립니다. 흐릿한 기억이 선명한 그림이 됩니다.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative md:col-span-2 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(168,85,247,0.15)] hover:-translate-y-1 transition-all duration-500 p-8 flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="p-3 rounded-2xl bg-white/60 shadow-sm border border-white/50 mb-6 inline-block group-hover:scale-110 transition-transform duration-500">
                  <CalendarDays className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-800">
                  나만의 꿈 아카이브
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">
                  캘린더에 기록되는 꿈 해석 히스토리. 결과를 친구와 공유하고, 나의 무의식 패턴을 발견하세요.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Previous Results Preview Section */}
        <section className="w-full max-w-6xl py-16 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-800 tracking-tight">다른 사람들은 어떤 꿈을 꾸었을까요?</h2>
          <p className="text-slate-600 mb-12 text-lg font-medium">최근 해석된 흥미로운 꿈 이야기들을 만나보세요.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Dummy Card 1 */}
            <Link href="/dream-result/dummy-1" className="block outline-none">
              <div className="text-left rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-sm p-6 relative overflow-hidden group hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl mb-6 shadow-inner" />
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold px-2.5 py-1 bg-purple-100 text-purple-700 rounded-md">프로이트</span>
                  <span className="text-xs text-slate-400 font-medium">2시간 전</span>
                </div>
                <h4 className="font-bold text-lg mb-2 text-slate-800 line-clamp-1 group-hover:text-purple-600 transition-colors">하늘을 나는 고래를 본 꿈</h4>
                <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                  거대한 고래가 구름 사이를 유유히 헤엄치고 있었어요. 저는 그 위에 올라타 세상을 내려다보았죠. 정말 경이로운 기분이었습니다.
                </p>
              </div>
            </Link>
            
            {/* Dummy Card 2 */}
            <Link href="/dream-result/dummy-2" className="block outline-none">
              <div className="text-left rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-sm p-6 relative overflow-hidden group hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-blue-200 to-indigo-200 rounded-xl mb-6 shadow-inner" />
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold px-2.5 py-1 bg-blue-100 text-blue-700 rounded-md">칼 융</span>
                  <span className="text-xs text-slate-400 font-medium">5시간 전</span>
                </div>
                <h4 className="font-bold text-lg mb-2 text-slate-800 line-clamp-1 group-hover:text-blue-600 transition-colors">끝없는 복도를 헤매는 꿈</h4>
                <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                  문이 아주 많은 긴 복도였는데, 아무리 문을 열어도 계속 같은 복도가 나왔습니다. 답답하면서도 신비로운 느낌이었어요.
                </p>
              </div>
            </Link>

            {/* Dummy Card 3 */}
            <Link href="/dream-result/dummy-3" className="block outline-none">
              <div className="text-left rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-sm p-6 relative overflow-hidden group hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-pink-200 to-orange-200 rounded-xl mb-6 shadow-inner" />
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold px-2.5 py-1 bg-orange-100 text-orange-700 rounded-md">게슈탈트</span>
                  <span className="text-xs text-slate-400 font-medium">어제</span>
                </div>
                <h4 className="font-bold text-lg mb-2 text-slate-800 line-clamp-1 group-hover:text-orange-600 transition-colors">어릴 적 살던 집이 불타는 꿈</h4>
                <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                  불길이 치솟는데 무섭다기보다는 오히려 후련한 기분이 들었어요. 따뜻하기도 했고요. 뭔가 과거를 털어내는 느낌이었을까요?
                </p>
              </div>
            </Link>
          </div>

          <div className="mt-16">
            <Link href="/feeds">
              <Button variant="outline" className="rounded-full px-8 py-6 text-base font-semibold bg-white/50 backdrop-blur-sm border-slate-200 hover:bg-white/80 hover:text-slate-900 transition-colors shadow-sm">
                더 많은 해몽 구경하기
              </Button>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
