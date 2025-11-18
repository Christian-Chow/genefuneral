import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const GreenBurial = () => {
  // Image URL - replace with actual image URL when available
  const imageUrl = "https://i.imgur.com/uhhlsjY.jpeg";

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
              綠色殯葬
            </h1>

            {/* Image Section */}
            <div className="mb-8">
              <div className="w-full h-64 md:h-96 bg-muted/50 rounded-lg overflow-hidden">
                {imageUrl ? (
                  <img 
                    src={imageUrl} 
                    alt="綠色殯葬"
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
                綠色殯葬是一種回歸自然的殯葬選擇，提倡環保、簡約與生命尊重的理念。常見的形式包括海上撒灰，撒灰花園撒灰。選擇在撒灰公園撒灰，家屬亦可以選擇安放先人紀念碑。
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                此類殯葬方式不僅成本相對較低 ，適合重視環保、崇尚自然的人士。政府亦設有多個指定綠色殯葬地點供選擇 。
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

export default GreenBurial;

