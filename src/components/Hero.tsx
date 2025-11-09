import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-hero-gradient-start to-hero-gradient-end opacity-95"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
          安心護航，伴您與親友走最後一程
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
        我們提供殯儀一站式服務，專業承辦所有流程，讓您免去煩瑣，專注緬懷與療癒。 以專業、用心、尊重的態度，陪伴您度過生命中最艱難的時刻。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            onClick={() => scrollToSection("services")}
            className="bg-white text-primary hover:bg-white/90 shadow-elegant text-lg px-8 py-6"
          >
            服務方案
          </Button>
          <Button 
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="bg-white/20 backdrop-blur-md border-2 border-white/80 text-white hover:bg-white/30 hover:border-white shadow-lg text-lg px-8 py-6 font-semibold"
          >
            <Phone className="mr-2 h-5 w-5" />
            聯絡我們
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

