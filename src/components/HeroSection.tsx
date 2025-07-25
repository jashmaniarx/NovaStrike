import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/50 backdrop-blur-sm" />
      </div>
      
      {/* Floating Glass Container */}
      <div className="relative z-10 glass-strong rounded-3xl p-8 md:p-12 lg:p-16 max-w-4xl mx-4 text-center animate-slide-up">
        <div className="space-y-6">
          {/* Main Title */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            <span className="block">Master Your</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Football Skills
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Elevate your game with professional techniques, expert tutorials, and cutting-edge training methods
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button 
              size="lg" 
              className="glass-hover bg-primary/20 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-2xl min-w-[200px]"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Training
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass-hover bg-glass border-glass-border text-foreground hover:bg-primary/10 hover:border-primary/50 px-8 py-4 text-lg rounded-2xl min-w-[200px]"
            >
              Explore Skills
            </Button>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-primary/10 animate-float" />
        <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-secondary/10 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 -right-8 w-12 h-12 rounded-full bg-accent/10 animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="glass rounded-full p-4">
          <div className="w-1 h-8 bg-gradient-to-b from-primary to-transparent rounded-full mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;