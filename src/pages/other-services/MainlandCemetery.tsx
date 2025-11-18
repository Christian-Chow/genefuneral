import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const MainlandCemetery = () => {
  // Image URL - replace with actual image URL when available
  const imageUrl = "https://i.imgur.com/1x5oPdP.jpeg";

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
              國內墓園
            </h1>

            {/* Image Section */}
            <div className="mb-8">
              <div className="w-full h-64 md:h-96 bg-muted/50 rounded-lg overflow-hidden">
                {imageUrl ? (
                  <img 
                    src={imageUrl} 
                    alt="國內墓園"
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
                針對有祖籍或家族根源在內地的家庭，我們提供多個中國合法營運的墓園選擇，設有永久墓地、合葬墓、骨灰位等不同選項，並可安排跨境遺體運輸、關口協調、入土儀式、立碑與掃墓服務。
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                我們熟悉兩地法規，協助處理一切行政及交通細節，確保家屬能安心安排先人安息於心儀的地點，延續傳統文化與家庭情感連結。
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

export default MainlandCemetery;

