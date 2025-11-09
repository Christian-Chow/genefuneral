import { Eye, Clock, Scale } from "lucide-react";

const commitments = [
  {
    icon: Eye,
    title: "透明報價",
    description: "絕不隱藏費用，全程清晰說明"
  },
  {
    icon: Clock,
    title: "24小時支援",
    description: "專人全天候應急協助，及時回應需求"
  },
  {
    icon: Scale,
    title: "尊重傳統，創新服務",
    description: "結合現代化管理，保留儀式莊嚴感的同時提升效率"
  }
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              為什麼選擇我們
            </h2>
          </div>

          <div className="mb-16">
            <div className="bg-card p-8 md:p-10 rounded-2xl border border-border mb-12">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">基因殯儀</strong> — 提供殯儀服務超過15年，團隊成員承傳超過，40年老鋪豐富經驗，不僅是資深經驗，更是對傳統禮儀的深刻理解與對生命的敬畏之心。每一位團隊成員均具備豐富的實戰經驗，能細心處理每一個細節，從臨終關懷、儀式規劃到後事安排，為家屬提供全面而安心的服務。
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                我們的團隊熟悉各類宗教儀式（包括佛教、道教、基督教、天主教等）及現代從簡需求，能根據家屬意願度身定制莊重而體面的告別儀式。從法律文件申請、靈堂佈置、喪禮流程協調到後續關懷支援，我們以嚴謹、細緻、同理心的態度，減輕家屬在悲痛中的負擔。
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
              服務承諾
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {commitments.map((commitment, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border hover:shadow-card transition-all"
                >
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <commitment.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-lg text-foreground mb-3">{commitment.title}</h4>
                  <p className="text-muted-foreground">{commitment.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

