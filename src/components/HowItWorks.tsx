import { ArrowRight } from "lucide-react";
import iconReview from "@/assets/icon-review.png";
import iconAi from "@/assets/icon-ai.png";
import iconVideo from "@/assets/icon-video.png";

export const HowItWorks = () => {
  const steps = [
    {
      icon: iconReview,
      title: "Collect Reviews",
      description: "Share your custom review link with customers via WhatsApp, SMS, or email. They write reviews and upload selfies.",
      step: "01"
    },
    {
      icon: iconAi,
      title: "AI Transforms",
      description: "Our AI analyzes sentiment, creates scripts, and generates voiceovers with your brand styling automatically.",
      step: "02"
    },
    {
      icon: iconVideo,
      title: "Share Videos",
      description: "Get polished marketing reels ready to post on Instagram, Facebook, and YouTube to build trust and drive sales.",
      step: "03"
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            How It <span className="bg-gradient-hero bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform customer feedback into compelling video content in three simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2 h-full border border-border">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-medium">
                  <span className="text-accent-foreground font-bold">{step.step}</span>
                </div>
                
                {/* Icon */}
                <div className="mb-6 w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src={step.icon} alt={`${step.title} icon`} className="w-12 h-12" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              
              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-10 transform -translate-y-1/2 text-primary/30">
                  <ArrowRight className="w-8 h-8" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
