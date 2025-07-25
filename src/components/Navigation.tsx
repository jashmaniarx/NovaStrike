import { Home, Play, BookOpen, Users, Trophy, Menu } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: Play, label: 'Skills', href: '#skills' },
    { icon: BookOpen, label: 'Tutorials', href: '#tutorials' },
    { icon: Users, label: 'Tips', href: '#tips' },
    { icon: Trophy, label: 'Training', href: '#training' }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <div className="glass-strong rounded-full px-6 py-3">
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="font-display font-bold text-xl text-primary">
              LQD<span className="text-foreground">Skills</span>
            </div>
            
            {/* Nav Items */}
            <div className="flex items-center space-x-6">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="group flex items-center space-x-2 px-3 py-2 rounded-full glass-hover transition-all duration-300 hover:bg-primary/10"
                  >
                    <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
            
            {/* CTA Button */}
            <Button
              size="sm"
              className="bg-primary/20 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground px-4 py-2 rounded-full font-medium"
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="glass-strong border-b border-glass-border px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Mobile Logo */}
            <div className="font-display font-bold text-lg text-primary">
              LQD<span className="text-foreground">Skills</span>
            </div>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 rounded-full glass-hover"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
          
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="mt-4 pt-4 border-t border-glass-border animate-slide-up">
              <div className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.label}
                      onClick={() => handleNavClick(item.href)}
                      className="flex items-center space-x-3 px-4 py-3 rounded-2xl glass-hover transition-all duration-300 hover:bg-primary/10"
                    >
                      <Icon className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">{item.label}</span>
                    </button>
                  );
                })}
                <div className="pt-4">
                  <Button
                    className="w-full bg-primary/20 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground rounded-2xl"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Bottom Mobile Dock */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <div className="glass-strong rounded-full px-4 py-3">
          <div className="flex items-center space-x-6">
            {navItems.slice(0, 4).map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="group flex flex-col items-center space-y-1 p-2 rounded-2xl glass-hover transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;