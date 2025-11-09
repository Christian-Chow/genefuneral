import { Phone } from "lucide-react";

export const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img 
              src="https://i.imgur.com/3fthgW2.png" 
              alt="基因殯儀 Logo" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="font-serif text-xl font-bold text-foreground">基因殯儀</h1>
              <p className="text-sm text-muted-foreground">持牌殮葬商編號：2494800124</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors">
              服務方案
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors">
              關於我們
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors">
              聯絡我們
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-foreground">24/7: 9468 5110</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

