import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const CTA = () => {
  const benefits = [
    "No credit card required",
    "14-day free trial",
    "Cancel anytime",
    "Premium support included"
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-12 lg:p-16 shadow-large">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          <div className="relative z-10 text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground max-w-3xl mx-auto">
              Ready to Transform Your Customer Reviews Into Video Marketing Magic?
            </h2>
            
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Join thousands of businesses already using knowbetter to boost their social proof and conversions
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button variant="hero" size="lg" className="bg-background text-foreground hover:bg-background/90 group shadow-large">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Schedule Demo
              </Button>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 max-w-3xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-primary-foreground/90">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
