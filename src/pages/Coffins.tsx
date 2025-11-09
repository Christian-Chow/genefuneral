import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const coffins = [
  {
    name: "豪華木紋長抽棺",
    image: "https://i.imgur.com/KkQcMCO.png"
  },
  {
    name: "杉木八底",
    image: "https://i.imgur.com/XiqCozB.jpeg"
  },
  {
    name: "白色日箱火化棺",
    image: "https://i.imgur.com/TclknDb.jpeg"
  },
  {
    name: "雕花揭蓋日箱",
    image: "https://i.imgur.com/WP0kIVX.png"
  },
  {
    name: "沙比利十二門徒",
    image: "https://i.imgur.com/16M5zQQ.png"
  },
  {
    name: "杉木蓮花",
    image: "https://i.imgur.com/ccF7nOc.jpeg"
  },
  {
    name: "柏香板庄",
    image: "https://i.imgur.com/qJbHLiN.png"
  },
  {
    name: "遠年庄板",
    image: "https://i.imgur.com/9gJlthZ.png"
  },
  {
    name: "新日箱火化棺",
    image: "https://i.imgur.com/xRQyGp3.jpeg"
  },
  {
    name: "日箱火化棺木",
    image: "https://i.imgur.com/aqnFePK.jpeg"
  },
  {
    name: "杉木仿美式棺",
    image: "https://i.imgur.com/XWkrDpV.jpeg"
  },
  {
    name: "遥年板庄",
    image: "https://i.imgur.com/RgSBxbw.png"
  },
  {
    name: "杬箱棺木",
    image: "https://i.imgur.com/O2VyOwb.png"
  },
  {
    name: "柏香美式棺",
    image: "https://i.imgur.com/aX80Dp3.png"
  }
];

const Coffins = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section id="coffins" className="py-20 bg-gradient-to-br from-muted/50 to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                  棺木用品
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                  我們提供多種高品質棺木選擇，滿足不同家庭的需求。每個產品都經過精心挑選，確保品質與尊嚴。
                </p>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
                {coffins.map((coffin, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-border"
                  >
                    <div className="h-64 bg-muted/30 overflow-hidden flex items-center justify-center p-4">
                      <img
                        src={coffin.image}
                        alt={coffin.name}
                        className="w-full h-full object-contain"
                        loading="eager"
                        crossOrigin="anonymous"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="font-serif text-xl font-semibold text-foreground">
                        {coffin.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Back to Home */}
              <div className="text-center mt-12">
                <Link to="/">
                  <Button variant="outline" size="lg" className="gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    返回首頁
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Coffins;

