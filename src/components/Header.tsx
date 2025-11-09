import { MapPin, ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export const Header = () => {
  const [isSuppliesOpen, setIsSuppliesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSuppliesOpen, setIsMobileSuppliesOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsSuppliesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsSuppliesOpen(false);
    }, 300); // 300ms delay before closing
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileSuppliesOpen(false);
  };

  const handleMobileLinkClick = () => {
    closeMobileMenu();
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
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-lg text-foreground hover:text-primary transition-colors">
              首頁
            </Link>
            <button onClick={() => scrollToSection("services")} className="text-lg text-foreground hover:text-primary transition-colors">
              殯儀服務
            </button>
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-lg text-foreground hover:text-primary transition-colors flex items-center gap-1">
                殯儀用品
                <ChevronDown className="h-4 w-4" />
              </button>
              {isSuppliesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 bg-card border border-border rounded-lg shadow-lg min-w-[150px] py-2 z-50"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to="/coffins"
                    className="w-full text-left px-4 py-2 text-foreground hover:bg-muted hover:text-primary transition-colors block"
                    onClick={() => setIsSuppliesOpen(false)}
                  >
                    棺木
                  </Link>
                  <button
                    onClick={() => scrollToSection("niches")}
                    className="w-full text-left px-4 py-2 text-foreground hover:bg-muted hover:text-primary transition-colors"
                  >
                    骨灰龕
                  </button>
                </div>
              )}
            </div>
            <button onClick={() => scrollToSection("about")} className="text-lg text-foreground hover:text-primary transition-colors">
              關於我們
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-lg text-foreground hover:text-primary transition-colors">
              聯絡我們
            </button>
          </nav>

          {/* Desktop Location */}
          <div className="hidden lg:flex items-center gap-2 text-base">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-foreground">紅磡必嘉街1號C地鋪</span>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden border-t border-border py-4">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                onClick={handleMobileLinkClick}
              >
                首頁
              </Link>
              <button
                onClick={() => {
                  scrollToSection("services");
                  handleMobileLinkClick();
                }}
                className="text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
              >
                殯儀服務
              </button>
              <div className="flex flex-col">
                <button
                  onClick={() => setIsMobileSuppliesOpen(!isMobileSuppliesOpen)}
                  className="flex items-center justify-between px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                >
                  <span>殯儀用品</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isMobileSuppliesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileSuppliesOpen && (
                  <div className="pl-4">
                    <Link
                      to="/coffins"
                      className="block px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                      onClick={handleMobileLinkClick}
                    >
                      棺木
                    </Link>
                    <button
                      onClick={() => {
                        scrollToSection("niches");
                        handleMobileLinkClick();
                      }}
                      className="w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                    >
                      骨灰龕
                    </button>
                  </div>
                )}
              </div>
              <button
                onClick={() => {
                  scrollToSection("about");
                  handleMobileLinkClick();
                }}
                className="text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
              >
                關於我們
              </button>
              <button
                onClick={() => {
                  scrollToSection("contact");
                  handleMobileLinkClick();
                }}
                className="text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
              >
                聯絡我們
              </button>
              <div className="flex items-center gap-2 px-4 py-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-foreground">紅磡必嘉街1號C地鋪</span>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

