import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export const niches = [
  // TODO: Add niche names and image URLs here
  // Example structure:
  // {
  //   name: "Niche Name",
  //   image: "https://example.com/image.jpg"
  // },
  {
    name: "骨灰龕 1",
    image: "https://i.imgur.com/PLhS9Dv.jpeg"
  },
  {
    name: "骨灰龕 2",
    image: "https://i.imgur.com/SfXVO8x.jpeg"
  },
  {
    name: "骨灰龕 3",
    image: "https://i.imgur.com/ukCDu5R.jpeg"
  },
  {
    name: "骨灰龕 4",
    image: "https://i.imgur.com/TYpqTCr.jpeg"
  },
  {
    name: "骨灰龕 5",
    image: "https://i.imgur.com/hRjZqHo.jpeg"
  },
  {
    name: "骨灰龕 6",
    image: "https://i.imgur.com/jyRipFy.jpeg"
  },
  {
    name: "骨灰龕 7",
    image: "https://i.imgur.com/TxpaaX8.jpeg"
  },
  {
    name: "骨灰龕 8",
    image: "https://i.imgur.com/c38hty6.jpeg"
  },
  {
    name: "骨灰龕 9",
    image: "https://i.imgur.com/8S7XCNd.jpeg"
  },
  {
    name: "骨灰龕 10",
    image: "https://i.imgur.com/LV4NGBa.jpeg"
  },
  {
    name: "骨灰龕 11",
    image: "https://i.imgur.com/lBHRKu7.jpeg"
  },
  {
    name: "骨灰龕 12",
    image: "https://i.imgur.com/VpB7UWD.jpeg"
  },
  {
    name: "骨灰龕 13",
    image: "https://i.imgur.com/gmYlph1.jpeg"
  },
  {
    name: "骨灰龕 15",
    image: "https://i.imgur.com/0MbCQ0g.jpeg"
  },
  {
    name: "骨灰龕 16",
    image: "https://i.imgur.com/9ZIWq3e.jpeg"
  },
  {
    name: "骨灰龕 17",
    image: "https://i.imgur.com/oYqrSaq.jpeg"
  },
  {
    name: "骨灰龕 18",
    image: "https://i.imgur.com/0MbCQ0g.jpeg"
  },
  {
    name: "骨灰龕 19",
    image: "https://i.imgur.com/9ZIWq3e.jpeg"
  },
  {
    name: "骨灰龕 20",
    image: "https://i.imgur.com/oYqrSaq.jpeg"
  },
  {
    name: "骨灰龕 21",
    image: "https://i.imgur.com/YlBSI9O.jpeg"
  },
  {
    name: "骨灰龕 22",
    image: "https://i.imgur.com/8edNVrC.jpeg"
  },
  {
    name: "骨灰龕 23",
    image: "https://i.imgur.com/g3qLdbS.jpeg"
  },
  {
    name: "骨灰龕 24",
    image: "https://i.imgur.com/t0OD8r0.jpeg"
  },
  {
    name: "骨灰龕 25",
    image: "https://i.imgur.com/e6uMZxr.jpeg"
  },
  {
    name: "骨灰龕 26",
    image: "https://i.imgur.com/h8iH4Jz.jpeg"
  },
  {
    name: "骨灰龕 27",
    image: "https://i.imgur.com/jOD7FNm.jpeg"
  }
];

const Niches = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section id="niches" className="py-20 bg-gradient-to-br from-muted/50 to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                  骨灰龕用品
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                  我們提供多種高品質骨灰龕選擇，滿足不同家庭的需求。每個產品都經過精心挑選，確保品質與尊嚴。
                </p>
              </div>

              {/* Products Grid */}
              {niches.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
                  {niches.map((niche, index) => (
                    <Link
                      key={index}
                      to={`/niche/${index}`}
                      className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-border block"
                    >
                      <div className="h-64 bg-muted/30 overflow-hidden flex items-center justify-center p-4">
                        <img
                          src={niche.image}
                          alt={niche.name}
                          className="w-full h-full object-contain"
                          loading="eager"
                          crossOrigin="anonymous"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="font-serif text-xl font-semibold text-foreground">
                          {niche.name}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    產品資訊即將推出
                  </p>
                </div>
              )}

              {/* Back to Home */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" className="gap-2" asChild>
                  <Link to="/">
                    <ArrowLeft className="h-4 w-4" />
                    返回首頁
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Niches;

