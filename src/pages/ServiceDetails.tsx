import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { serviceDetails } from "@/data/services";
import { X, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const ServiceDetails = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceDetails.find(s => s.id === serviceId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">服務未找到</h1>
            <Link to="/">
              <Button>返回首頁</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link to="/#services">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                返回首頁
              </Button>
            </Link>

            {/* Service Title */}
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              {service.title}
            </h1>

            {/* Price */}
            {service.price && (
              <div className="mb-4">
                <span className="text-3xl font-bold text-primary">{service.price}</span>
              </div>
            )}

            {/* Description */}
            {service.description && (
              <p className="text-lg text-muted-foreground mb-6">
                {service.description}
              </p>
            )}

            {/* Included Items and Free Services - Two Column Layout */}
            {(service.includedItems.length > 0 || service.freeServices.length > 0) && (
              <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Included Items */}
                {service.includedItems.length > 0 && (
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                      包含項目
                    </h2>
                    <ol className="space-y-2 list-decimal list-inside">
                      {service.includedItems.map((item, index) => (
                        <li key={index} className="text-lg text-foreground">
                          {item}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {/* Free Services */}
                {service.freeServices.length > 0 && (
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                      免費代辦
                    </h2>
                    <ul className="space-y-2">
                      {service.freeServices.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                          <span className="text-lg text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Excluded Items */}
            {service.excludedItems.length > 0 && (
              <div className="mb-8">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                  未計項目
                </h2>
                <ul className="space-y-2">
                  {service.excludedItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <X className="h-6 w-6 text-muted-foreground shrink-0 mt-0.5" />
                      <span className="text-lg text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

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

            {/* Image Grid Section */}
            <div className="mt-8">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                服務圖片
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {service.image ? (
                  <div className="w-full h-64 bg-muted/50 rounded-lg overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full h-64 flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg">
                    <span className="text-muted-foreground">圖片預留位置</span>
                  </div>
                )}
                {/* Additional images can be added here */}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetails;
