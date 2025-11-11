import { Phone, MessageCircle } from "lucide-react";

export const Contact = () => {

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              免費電話詢問 撥個電話傾傾
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="text-center md:text-left">
              <p className="text-lg text-primary font-semibold mb-6">
                24小時免費查詢
              </p>
              
              <div className="mb-6">
                <p className="text-2xl md:text-3xl font-semibold text-foreground mb-2">9468 5110 (曾先生)</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
                <a href="tel:94685110" className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold">
                  <Phone className="h-5 w-5" />
                  立即致電
                </a>
                <a href="https://wa.me/85294685110" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary/10 transition-colors text-lg font-semibold">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4 text-center md:text-left">
                  服務包括：
                </h3>
                <ul className="space-y-2 text-muted-foreground text-center md:text-left">
                  <li>• 緊急醫療運送</li>
                  <li>• 居家善終服務</li>
                  <li>• 代辦遺體運往澳門或國內或運回香港</li>
                  <li>• 代辦遺體送往其他國家</li>
                  <li>• 訂造墓碑塜穴及安裝</li>
                  <li>• 打齋招魂法事安排</li>
                  <li>• 打齋超渡功德安排</li>
                  <li>• 和尚法師引靈</li>
                  <li>• 骨灰龕位買賣服務</li>
                  <li>• 旺屋旺舖或灑淨</li>
                </ul>
              </div>
            </div>

            <div>
              <p className="text-lg font-semibold text-foreground mb-4">基因殯儀 : 紅磡必嘉街1號C地下地鋪 (歡迎親臨)</p>
              <div className="w-full h-[400px] rounded-lg overflow-hidden border border-border shadow-lg">
                <iframe
                src="https://www.google.com/maps?q=紅磡必嘉街1C號,Hong+Kong&output=embed&z=18&hl=zh-HK"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

