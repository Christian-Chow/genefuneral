import { MapPin, ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export const Header = () => {
  const [isSuppliesOpen, setIsSuppliesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSuppliesOpen, setIsMobileSuppliesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const servicesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
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

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300); // 300ms delay before closing
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (servicesTimeoutRef.current) {
        clearTimeout(servicesTimeoutRef.current);
      }
    };
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileSuppliesOpen(false);
    setIsMobileServicesOpen(false);
  };

  const handleMobileLinkClick = () => {
    closeMobileMenu();
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
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
            <Link 
              to="/" 
              className="text-lg text-foreground hover:text-primary transition-colors"
              onClick={handleHomeClick}
            >
              首頁
            </Link>
            <div 
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button className="text-lg text-foreground hover:text-primary transition-colors flex items-center gap-1">
                殯儀服務
                <ChevronDown className="h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 bg-card border border-border rounded-lg shadow-lg min-w-[200px] py-2 z-50"
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <Link
                    to="/service/economic-hospital"
                    className="w-full text-left px-4 py-2 text-foreground hover:bg-muted hover:text-primary transition-colors block"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    經濟醫院出殯服務
                  </Link>
                  <Link
                    to="/service/buddhist-funeral"
                    className="w-full text-left px-4 py-2 text-foreground hover:bg-muted hover:text-primary transition-colors block"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    標準殯儀館出殯 佛教套餐
                  </Link>
                  <Link
                    to="/service/taoist-funeral"
                    className="w-full text-left px-4 py-2 text-foreground hover:bg-muted hover:text-primary transition-colors block"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    標準殯儀館出殯 道教套餐
                  </Link>
                  <Link
                    to="/service/non-religious-funeral"
                    className="w-full text-left px-4 py-2 text-foreground hover:bg-muted hover:text-primary transition-colors block"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    標準殯儀館出殯 無宗教套餐
                  </Link>
                  <Link
                    to="/service/church-funeral"
                    className="w-full text-left px-4 py-2 text-foreground hover:bg-muted hover:text-primary transition-colors block"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    標準殯儀館出殯 教會套餐
                  </Link>
                  <button
                    onClick={() => {
                      scrollToSection("services");
                      setIsServicesOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-foreground hover:bg-muted hover:text-primary transition-colors"
                  >
                    家居善終服務
                  </button>
                </div>
              )}
            </div>
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
                onClick={(e) => {
                  handleMobileLinkClick();
                  handleHomeClick(e);
                }}
              >
                首頁
              </Link>
              <div className="flex flex-col">
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                >
                  <span>殯儀服務</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileServicesOpen && (
                  <div className="pl-4">
                    <Link
                      to="/service/economic-hospital"
                      className="block px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                      onClick={handleMobileLinkClick}
                    >
                      經濟醫院出殯服務
                    </Link>
                    <Link
                      to="/service/buddhist-funeral"
                      className="block px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                      onClick={handleMobileLinkClick}
                    >
                      標準殯儀館出殯 佛教套餐
                    </Link>
                    <Link
                      to="/service/taoist-funeral"
                      className="block px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                      onClick={handleMobileLinkClick}
                    >
                      標準殯儀館出殯 道教套餐
                    </Link>
                    <Link
                      to="/service/non-religious-funeral"
                      className="block px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                      onClick={handleMobileLinkClick}
                    >
                      標準殯儀館出殯 無宗教套餐
                    </Link>
                    <Link
                      to="/service/church-funeral"
                      className="block px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                      onClick={handleMobileLinkClick}
                    >
                      標準殯儀館出殯 教會套餐
                    </Link>
                    <button
                      onClick={() => {
                        handleMobileLinkClick();
                        scrollToSection("services");
                      }}
                      className="w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                    >
                      家居善終服務
                    </button>
                  </div>
                )}
              </div>
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
                        handleMobileLinkClick();
                        scrollToSection("niches");
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
                  handleMobileLinkClick();
                  scrollToSection("about");
                }}
                className="text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
              >
                關於我們
              </button>
              <button
                onClick={() => {
                  handleMobileLinkClick();
                  scrollToSection("contact");
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

