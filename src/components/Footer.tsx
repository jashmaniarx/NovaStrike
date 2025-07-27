import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-glass-border">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-3xl p-8 text-center">
          <div className="space-y-4">
            {/* Main Footer Content */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Logo and Description */}
              <div className="text-center md:text-left">
                <div className="font-display font-bold text-2xl text-primary mb-2">
                  Pure<span className="text-foreground">Motion</span>
                </div>
                <p className="text-sm text-muted-foreground max-w-md">
                  Your ultimate football companion with live matches, expert tips, and comprehensive video library.
                </p>
              </div>

              {/* Quick Links */}
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <button 
                  onClick={() => document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Home
                </button>
                <button 
                  onClick={() => document.querySelector('#videos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Videos
                </button>
                <button 
                  onClick={() => document.querySelector('#stats')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Stats
                </button>
                <button 
                  onClick={() => document.querySelector('#tips')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Tips
                </button>
                <button 
                  onClick={() => document.querySelector('#matches')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Matches
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-glass-border pt-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Copyright */}
                <div className="text-sm text-muted-foreground">
                  © 2024 PureMotion. All rights reserved.
                </div>

                {/* Developer Credit */}
                <div className="flex items-center space-x-2 text-sm">
                  <span className="text-muted-foreground">Developed with</span>
                  <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                  <span className="text-muted-foreground">by</span>
                  <span className="font-medium text-primary glass-glow">Jash Maniar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;