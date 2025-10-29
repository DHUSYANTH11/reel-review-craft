import { Sparkles, Zap, Shield, TrendingUp, Users, Globe } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Generation",
      description: "Advanced AI analyzes sentiment, creates scripts, and generates natural voiceovers automatically."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Transform reviews into professional videos in minutes, not hours. Scale your content effortlessly."
    },
    {
      icon: Shield,
      title: "Brand Consistency",
      description: "Maintain your brand identity with custom templates, colors, logos, and styling options."
    },
    {
      icon: TrendingUp,
      title: "Boost Conversions",
      description: "Video testimonials increase trust and drive 80% higher conversion rates than text reviews."
    },
    {
      icon: Users,
      title: "Social Media Ready",
      description: "Export in perfect formats for Instagram Reels, YouTube Shorts, TikTok, and Facebook Stories."
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Generate videos in multiple languages including English, Hindi, Tamil, and more coming soon."
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-subtle">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Powerful Features for{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">Modern Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to turn customer feedback into engaging video content
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-1 border border-border group"
              >
                <div className="mb-6 w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
