import { Play, Pause, Volume2, Maximize, SkipBack, SkipForward } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const TutorialPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Featured Tutorial
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Perfect Your First Touch - Master Ball Control in 10 Minutes
          </p>
        </div>
        
        {/* Video Player Container */}
        <div className="glass-strong rounded-3xl p-6 animate-fade-in">
          {/* Video Display Area */}
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
            {!isPlaying ? (
              <div className="relative w-full h-full">
                <img
                  src="https://img.youtube.com/vi/Fj3Jsn0Pa7c/maxresdefault.jpg"
                  alt="Perfect Your First Touch Tutorial"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  >
                    <Play className="w-8 h-8 text-primary ml-1" />
                  </button>
                </div>
              </div>
            ) : (
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Fj3Jsn0Pa7c?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0"
                title="Perfect Your First Touch - Football Tutorial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full rounded-2xl"
              />
            )}
          </div>
          
          {/* Controls */}
          <div className="glass rounded-2xl p-4">
            <div className="flex items-center justify-between">
              {/* Left Controls */}
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-10 h-10 rounded-full glass-hover"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5" />
                  )}
                </Button>
                
                <Button variant="ghost" size="sm" className="w-10 h-10 rounded-full glass-hover">
                  <SkipBack className="w-4 h-4" />
                </Button>
                
                <Button variant="ghost" size="sm" className="w-10 h-10 rounded-full glass-hover">
                  <SkipForward className="w-4 h-4" />
                </Button>
              </div>
              
              {/* Progress Bar */}
              <div className="flex-1 mx-6">
                <div className="glass rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
                    style={{ width: isPlaying ? '35%' : '20%' }}
                  />
                </div>
              </div>
              
              {/* Right Controls */}
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="w-10 h-10 rounded-full glass-hover">
                  <Volume2 className="w-4 h-4" />
                </Button>
                
                <Button variant="ghost" size="sm" className="w-10 h-10 rounded-full glass-hover">
                  <Maximize className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            {/* Video Info */}
            <div className="mt-4 pt-4 border-t border-glass-border">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">Perfect Your First Touch</h3>
                  <p className="text-sm text-muted-foreground">Duration: 10:45 • Difficulty: Beginner</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">4.8</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-3 h-3 rounded-full bg-secondary" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorialPlayer;