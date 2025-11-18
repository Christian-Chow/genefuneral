import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrePlanning = () => {
  // Image URL - replace with actual image URL when available
  const imageUrl = "https://i.imgur.com/CX2smQl.jpeg";

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
              生前安排好身後事
            </h1>

            {/* Image Section */}
            <div className="mb-8">
              <div className="w-full h-64 md:h-96 bg-muted/50 rounded-lg overflow-hidden">
                {imageUrl ? (
                  <img 
                    src={imageUrl} 
                    alt="生前安排好身後事"
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
                「生前規劃」是一種成熟、理性的生活態度，讓人能夠主動為自己的身後事作出妥善安排，當中包括殯儀儀式、選擇火葬／土葬、骨灰安置方式、法律文件（如遺囑、公證）及個人意願的交代。
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                這樣不但能避免親人忙亂、經濟壓力或誤解，更可確保自身意願獲得尊重和實現。生前安排可以根據個人信仰、文化背景及家庭情況作出靈活定制，為自己和家人留下圓滿的交代。
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

export default PrePlanning;

