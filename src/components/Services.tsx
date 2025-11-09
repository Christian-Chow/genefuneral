import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const services = [
  {
    title: "經濟醫院出殯服務",
    price: "套餐由 $12,800 起",
    description: "於醫院禮堂或公眾殮房直接出殯，省去殯儀館設靈的服務。",
    image: "https://i.imgur.com/iiDggAq.png",
    recommended: true,
    features: [
      "標準沉箱棺木",
      "陀羅經被一張",
      "專業女化妝師",
      "專業作工師傅理財出殯",
      "中式靈車出殯上山",
      "高級雲石骨灰盅"
    ]
  },
  {
    title: "標準殯儀館出殯 佛教套餐",
    price: "",
    description: "",
    image: "https://i.imgur.com/NCzj0Ta.jpeg",
    recommended: false,
    features: [
      "高級標準日式棺木",
      "棺面名牌",
      "標準壽衣一套",
      "專業女化妝師",
      "專業仵工師傅接先人入館",
      "中式靈車接先人入館"
    ]
  },
  {
    title: "標準殯儀館出殯 道教套餐",
    price: "",
    description: "",
    image: "https://i.imgur.com/0rnQAWk.png",
    recommended: false,
    features: [
      "高級標準日箱棺木",
      "標準壽衣一套 & 陀羅經被一張",
      "專業女化妝師 & 專業堂倌一名",
      "專業仵工師傅接先人入館",
      "中式靈車接先人入館",
      "「六位」喃嘸師傅打齋"
    ]
  },
  {
    title: "標準殯儀館出殯 無宗教套餐",
    price: "",
    description: "簡單而莊嚴的告別儀式，讓逝者得到最尊嚴的送別",
    image: "https://i.imgur.com/JujoE3H.png",
    recommended: false,
    features: [
      "完整傳統儀式",
      "專業禮儀師",
      "靈堂佈置",
      "誦經服務",
      "告別式會場",
      "出殯車隊"
    ]
  },
  {
    title: "標準殯儀館出殯 教會套餐",
    price: "",
    description: "遵循傳統習俗，提供完整的告別儀式，讓逝者得到最尊嚴的送別",
    image: "https://i.imgur.com/QgSj7Uz.png",
    recommended: false,
    features: [
      "高級標準白色日箱棺木",
      "高級十字被一張",
      "專業女化妝師 & 專業堂倌一名",
      "專業仵工師傅接先人入館",
      "中式靈車接先人入館",
      "十字架 & 白蠟燭"
    ]
  }, 
  {
    title: "緊急醫療運送",
    price: "",
    description: "我們醫療團隊遍全球，24小時隨時出動，致力為您家人提供迅速運送各國或回港就醫服務。我們的服務包括但不限於：",
    image: "https://i.imgur.com/bKyEvC6.jpeg",
    recommended: false,
    features: [
      "緊急醫療運送服務，陸路或空運： 本地、出國外、海外回港、澳門國內回港",
      "提供緊急點對點醫療運送，包括：救護車、跨境運送專車，航機或包機服務。",
      "運送過程配備完善醫療設備以及隨行專業醫療人員，確保病人在運送途中得到適時照顧。",
      "安排目的地私家醫療團隊，迅速配合及作出應變，病人扺達時得到即時適切治療。"
    ]
  }
];

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
          {services.map((service, index) => (
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
                {service.price && (
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-primary">{service.price}</span>
                  </div>
                )}
                {service.description && (
                  <CardDescription className="text-base">{service.description}</CardDescription>
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
                >
                  詳情內容
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

