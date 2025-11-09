import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { serviceDetails } from "@/data/services";

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            殯儀服務方案
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            我們提供多種殯葬服務方案，滿足不同家庭的需求
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {serviceDetails.map((service, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden transition-all hover:shadow-elegant"
            >
              <div className="w-full h-48 bg-muted/50 overflow-hidden">
                {service.image ? (
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
                    <span className="text-muted-foreground text-sm">圖片預留位置</span>
                  </div>
                )}
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="font-serif text-2xl">{service.title}</CardTitle>
                {service.price && service.id !== "buddhist-funeral" && service.id !== "taoist-funeral" && (
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-primary">{service.price}</span>
                  </div>
                )}
                {(service.shortDescription || service.description) && (
                  <CardDescription className="text-base">
                    {service.shortDescription || service.description}
                  </CardDescription>
                )}
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  variant="outline"
                  asChild
                >
                  <Link to={`/service/${service.id}`}>
                    詳情內容
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

