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
    const scrollToElement = (elementId: string) => {
      const element = document.getElementById(elementId);
      if (element) {
        // Larger offset for mobile, smaller for desktop
        const isMobile = window.innerWidth < 768; // md breakpoint
        const headerOffset = isMobile ? 450 : 100; // More offset on mobile
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToElement(id);
      }, 100);
    } else {
      scrollToElement(id);
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

  const handleUsefulResourcesClick = (e: React.MouseEvent) => {
    if (location.pathname === "/useful-resources") {
      e.preventDefault();
      window.scrollTo(0, 0);
    } else {
      // Scroll to top immediately before navigation to prevent flash
      window.scrollTo(0, 0);
      navigate("/useful-resources");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-3 md:py-4">
          <Link 
            to="/" 
            onClick={handleHomeClick}
            className="flex items-center gap-2 md:gap-3 flex-shrink-0 hover:opacity-80 transition-opacity"
          >
            <img 
              src="https://i.imgur.com/3fthgW2.png" 
              alt="基因殯儀 Logo" 
              className="h-10 md:h-12 w-auto"
            />
            <div className="min-w-0">
              <h1 className="font-serif text-lg md:text-xl font-bold text-foreground truncate">基因殯儀</h1>
              <p className="text-xs md:text-sm text-muted-foreground truncate">持牌殮葬商編號：2494800124</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3 lg:gap-5 xl:gap-8 flex-1 justify-center mx-2 lg:mx-4 min-w-0">
            <Link 
              to="/" 
              className="text-base md:text-lg text-foreground hover:text-primary transition-colors whitespace-nowrap"
              onClick={handleHomeClick}
            >
              首頁
            </Link>
            <div 
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button className="text-base md:text-lg text-foreground hover:text-primary transition-colors flex items-center gap-1 whitespace-nowrap">
                殯儀服務
                <ChevronDown className="h-3.5 w-3.5 md:h-4 md:w-4" />
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
                    佛教套餐
                  </Link>
                  <Link
                    to="/service/taoist-funeral"
                    className="w-full text-left px-4 py-2 text-foreground hover:bg-muted hover:text-primary transition-colors block"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    道教套餐
                  </Link>
                  <Link
                    to="/service/non-religious-funeral"
                    className="w-full text-left px-4 py-2 text-foreground hover:bg-muted hover:text-primary transition-colors block"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    無宗教套餐
                  </Link>
                  <Link
                    to="/service/church-funeral"
                    className="w-full text-left px-4 py-2 text-foreground hover:bg-muted hover:text-primary transition-colors block"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    教會套餐
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
              <button className="text-base md:text-lg text-foreground hover:text-primary transition-colors flex items-center gap-1 whitespace-nowrap">
                殯儀用品
                <ChevronDown className="h-3.5 w-3.5 md:h-4 md:w-4" />
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
                  <Link
                    to="/niches"
                    className="w-full text-left px-4 py-2 text-foreground hover:bg-muted hover:text-primary transition-colors block"
                    onClick={() => setIsSuppliesOpen(false)}
                  >
                    骨灰龕
                  </Link>
                </div>
              )}
            </div>

            <button onClick={() => scrollToSection("about")} className="text-base md:text-lg text-foreground hover:text-primary transition-colors whitespace-nowrap">
              關於我們
            </button>
            <button 
              onClick={handleUsefulResourcesClick}
              className="text-base md:text-lg text-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              實用資料
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-base md:text-lg text-foreground hover:text-primary transition-colors whitespace-nowrap">
              聯絡我們
            </button>
          </nav>

          {/* Desktop Location & Contact */}
          <div className="hidden lg:flex flex-col gap-1.5 lg:gap-2 text-sm lg:text-base flex-shrink-0 max-w-[200px] lg:max-w-none">
            <div className="flex items-center gap-1.5 lg:gap-2 min-w-0">
              <MapPin className="h-4 w-4 lg:h-5 lg:w-5 text-primary flex-shrink-0" />
              <span className="text-foreground truncate">紅磡必嘉街1號C地鋪</span>
            </div>
            <a 
              href="https://wa.me/85294685110" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 lg:gap-2 hover:text-primary transition-colors min-w-0"
            >
              <svg 
                className="h-4 w-4 lg:h-5 lg:w-5 text-primary flex-shrink-0" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className="text-foreground truncate">9468 5110（曾先生）</span>
            </a>
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
                    <Link
                      to="/niches"
                      className="block px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                      onClick={handleMobileLinkClick}
                    >
                      骨灰龕
                    </Link>
                  </div>
                )}
              </div>
              <button
                onClick={(e) => {
                  handleMobileLinkClick();
                  handleUsefulResourcesClick(e);
                }}
                className="text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
              >
                實用資料
              </button>
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
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-foreground">紅磡必嘉街1號C地鋪</span>
              </div>
              <a 
                href="https://wa.me/85294685110" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
              >
                <svg 
                  className="h-5 w-5 text-primary" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span className="text-foreground">9468 5110（曾先生）</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

