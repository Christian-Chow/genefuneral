import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocalBurial = () => {
  // Image URL - replace with actual image URL when available
  const imageUrl = "https://i.imgur.com/ZymydZe.jpeg";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link to="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                返回首頁
              </Button>
            </Link>

            {/* Title */}
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              本港土葬
            </h1>

            {/* Image Section */}
            <div className="mb-8">
              <div className="w-full h-64 md:h-96 bg-muted/50 rounded-lg overflow-hidden">
                {imageUrl ? (
                  <img 
                    src={imageUrl} 
                    alt="本港土葬"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">圖片位置</p>
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed mb-4">
                土葬是傳統華人深信的一種安葬方式，象徵「入土為安」。本港土葬多數在政府墳場或華人永遠墳場進行，須預早申請並符合相關規定。
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                土葬服務包括遺體接運、入殮儀式、下葬安排、墳墓設計及立碑儀式等，亦可配合傳統禮儀、風水選址、法事服務等需要。我們專業團隊將協助家屬一站式處理申請手續、墓地選擇及安葬流程，令先人安息，後人安心。
              </p>
            </div>

            {/* Contact CTA */}
            <div className="mt-8 p-6 bg-muted/50 rounded-lg text-center">
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
                立即查詢
              </h3>
              <p className="text-xl md:text-2xl font-semibold text-primary mb-6">
                9468 5110 (曾先生)
              </p>
              <a 
                href="https://wa.me/85294685110" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mb-4"
              >
                <img 
                  src="https://i.imgur.com/YdSV2Xh.png" 
                  alt="WhatsApp QR Code" 
                  className="qr-code mx-auto max-w-[180px] rounded-lg shadow-lg" 
                  loading="eager" 
                  crossOrigin="anonymous" 
                  referrerPolicy="no-referrer"
                />
              </a>
              <p className="text-sm text-muted-foreground">
                掃描 QR Code 或點擊圖片直接聯絡我們
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LocalBurial;

