import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import VideoSearch from '@/components/VideoSearch';
import TutorialPlayer from '@/components/TutorialPlayer';
import TacticalTips from '@/components/TacticalTips';
import TipsPage from '@/components/TipsPage';
import ProTipsInsights from '@/components/ProTipsInsights';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home">
          <HeroSection />
        </section>
        
        {/* Video Search Library */}
        <section id="video-search">
          <VideoSearch />
        </section>
        
        {/* Featured Tutorial */}
        <section id="videos">
          <TutorialPlayer />
        </section>
        
        {/* Tactical Tips */}
        <section id="stats">
          <TacticalTips />
        </section>
        
        {/* Health Tips */}
        <section id="tips">
          <TipsPage />
        </section>
        
        {/* Pro Tips & Insights */}
        <section id="pro-tips">
          <ProTipsInsights />
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>
    </div>
  );
};

export default Index;
