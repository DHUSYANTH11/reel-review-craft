import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroVisual from "@/assets/hero-visual.png";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle pt-20 pb-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                AI-Powered Marketing
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Turn Customer Reviews Into{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Viral Video Reels
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              knowbetter automatically transforms your customer feedback into engaging, 
              branded marketing videos that drive trust and boost conversions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Videos Created</div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div>
                <div className="text-3xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Visual */}
          <div className="relative animate-float">
            <div className="relative rounded-3xl overflow-hidden shadow-large">
              <img 
                src={heroVisual} 
                alt="Customer reviews transforming into video reels on mobile device" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-card rounded-2xl shadow-medium p-4 animate-slide-up">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent"></div>
                <span className="text-sm font-semibold">AI Processing</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl shadow-medium p-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">5⭐</span>
                <span className="text-sm font-semibold">Customer Review</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
