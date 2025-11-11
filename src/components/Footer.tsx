import { Phone, MapPin, MessageCircle, Facebook, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-4">基因長生殯儀</h3>
              <p className="text-sm text-muted-foreground mb-4">
                專業殯葬服務，讓生命的最後一程充滿尊嚴與溫暖
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">服務項目</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/service/economic-hospital" className="text-muted-foreground hover:text-primary transition-colors">
                    經濟醫院出殯服務
                  </a>
                </li>
                <li>
                  <a href="/service/buddhist-funeral" className="text-muted-foreground hover:text-primary transition-colors">
                    標準殯儀館出殯 佛教套餐
                  </a>
                </li>
                <li>
                  <a href="/service/taoist-funeral" className="text-muted-foreground hover:text-primary transition-colors">
                    標準殯儀館出殯 道教套餐
                  </a>
                </li>
                <li>
                  <a href="/service/non-religious-funeral" className="text-muted-foreground hover:text-primary transition-colors">
                    標準殯儀館出殯 無宗教套餐
                  </a>
                </li>
                <li>
                  <a href="/service/church-funeral" className="text-muted-foreground hover:text-primary transition-colors">
                    標準殯儀館出殯 教會套餐
                  </a>
                </li>
                <li>
                  <a href="/service/emergency-medical" className="text-muted-foreground hover:text-primary transition-colors">
                    緊急醫療運送
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">其他服務</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                    遺體捐贈
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                    生前安排好身後事
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                    綠色殯葬
                  </a>
                </li>
                <li>
                  <a href="/niches" className="text-muted-foreground hover:text-primary transition-colors">
                    私人骨灰龕位買賣
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                    本港土葬
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                    國內墓園
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">聯絡資訊</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-5 w-5 text-primary" />
                  <div className="flex flex-col">
                    <span>聯絡電話:</span>
                    <a href="tel:94685110" className="hover:text-primary transition-colors">9468 5110</a>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <div className="flex flex-col">
                    <span>WhatsApp:</span>
                    <a href="https://wa.me/85294685110" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">+852-9468-5110</a>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div className="flex flex-col">
                    <span>地址：</span>
                    <span>紅磡必嘉街1號C地下</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} 基因殯儀服務. 版權所有. | 專業殯葬服務 | 24小時服務專線: +852-9468-5110
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

