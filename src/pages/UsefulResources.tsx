import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const UsefulResources = () => {
  // Scroll to top immediately when component mounts to prevent flash of bottom content
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Links will be updated with actual URLs later
  const resources = [
    {
      title: "火葬場預訂情況",
      url: "https://app.fehd.gov.hk/cremview/viewAvailableSession.do?lang=zh_HK", // To be updated
      description: "查看火葬場預訂情況及可用時段"
    },
    {
      title: "墳場及火葬場",
      url: "https://www.fehd.gov.hk/tc_chi/cc/index.html", // To be updated
      description: "了解各區墳場及火葬場資訊"
    },
    {
      title: "華人永遠墳場管理委員會",
      url: "https://www.bmcpc.org.hk/tc/home/index.html", // To be updated
      description: "華人永遠墳場管理委員會官方網站"
    },
    {
      title: "辦理身後事須知",
      url: "https://www.fehd.gov.hk/tc_chi/cc/die_todo_c.pdf", // To be updated
      description: "辦理身後事的相關資訊及程序"
    },
    {
      title: "海上撒灰",
      url: "https://www.fehd.gov.hk/english/cc/images/leaflet_SSA.pdf", // To be updated
      description: "海上撒灰服務詳情及申請程序"
    },
    {
      title: "「無盡思念」網上追思服務",
      url: "https://www.memorial.gov.hk/Default.aspx", // To be updated
      description: "網上追思服務平台"
    },
    {
      title: "衞生署器官的捐贈網頁",
      url: "https://www.organdonation.gov.hk/en/index.html", // To be updated
      description: "器官捐贈相關資訊及登記"
    }
  ];

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
              實用資料
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8">
              以下提供相關實用連結，方便您查閱各項服務資訊。
            </p>

            {/* Resources List */}
            <ul className="space-y-4 md:space-y-6">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-lg text-foreground hover:text-primary transition-colors group"
                    onClick={(e) => {
                      if (resource.url === "#") {
                        e.preventDefault();
                      }
                    }}
                  >
                    <span className="text-primary mt-1">•</span>
                    <span className="flex-1 group-hover:underline">{resource.title}</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1.5" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact CTA */}
            <div className="mt-12 p-6 bg-muted/50 rounded-lg text-center">
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
                需要協助？
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

export default UsefulResources;

