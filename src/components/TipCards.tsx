import { Lightbulb, Clock, Zap, Target, Users, Trophy } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const tips = [
  {
    icon: Lightbulb,
    title: '5 Ways to Improve Your First Touch',
    description: 'Essential techniques every footballer should master for better ball control',
    time: '3 min read',
    category: 'Fundamentals',
    content: `
      <h3>1. Use Both Feet</h3>
      <p>Practice receiving with both your left and right foot. This makes you unpredictable and harder to defend against.</p>
      
      <h3>2. Get Your Body Position Right</h3>
      <p>Open your body to the field to see more options. Position yourself sideways to the ball's path.</p>
      
      <h3>3. Cushion the Ball</h3>
      <p>Relax your foot upon contact. Think of your foot as a pillow - soft and giving.</p>
      
      <h3>4. Keep Your Head Up</h3>
      <p>Scan the field before the ball arrives. Know your options before you receive the pass.</p>
      
      <h3>5. Practice with Wall Passes</h3>
      <p>Use a wall to practice your first touch. Vary the power and angle to simulate different pass types.</p>
    `
  },
  {
    icon: Zap,
    title: 'Quick Feet Drills for Agility',
    description: 'Boost your speed and coordination with these proven training methods',
    time: '5 min read',
    category: 'Training',
    content: `
      <h3>Ladder Drills</h3>
      <p>Use an agility ladder for quick feet patterns. Focus on staying light on your toes.</p>
      
      <h3>Cone Weaving</h3>
      <p>Set up cones in a line and weave through them as quickly as possible. Use both feet.</p>
      
      <h3>Quick Taps</h3>
      <p>Rapidly tap the ball with the bottom of your foot. Alternate feet every 10 taps.</p>
      
      <h3>Box Drill</h3>
      <p>Create a small square with cones. Move the ball in and out using different parts of your foot.</p>
    `
  },
  {
    icon: Target,
    title: 'Shooting Accuracy Secrets',
    description: 'Professional techniques to improve your goal-scoring precision',
    time: '4 min read',
    category: 'Finishing',
    content: `
      <h3>Pick Your Spot</h3>
      <p>Always aim for corners - low corners are hardest for keepers to reach.</p>
      
      <h3>Keep Your Head Still</h3>
      <p>Don't look up at the goal while shooting. Trust your peripheral vision.</p>
      
      <h3>Follow Through</h3>
      <p>Your foot should point where you want the ball to go after contact.</p>
      
      <h3>Use the Inside of Your Foot</h3>
      <p>For accuracy, use the inside of your foot. It's more reliable than the laces.</p>
    `
  },
  {
    icon: Users,
    title: 'Reading the Game Like a Pro',
    description: 'Develop tactical awareness and make better decisions on the pitch',
    time: '6 min read',
    category: 'Tactics',
    content: `
      <h3>Scan Constantly</h3>
      <p>Look over your shoulder every few seconds. Know what's happening around you.</p>
      
      <h3>Communicate</h3>
      <p>Talk to your teammates. Let them know about threats and opportunities.</p>
      
      <h3>Anticipate</h3>
      <p>Think one step ahead. Where will the ball go next? Where should you be?</p>
      
      <h3>Watch the Ball and Players</h3>
      <p>Keep track of both the ball and players' movements. This helps you predict plays.</p>
    `
  },
  {
    icon: Trophy,
    title: 'Mental Preparation Tips',
    description: 'Build confidence and focus to perform under pressure',
    time: '4 min read',
    category: 'Psychology',
    content: `
      <h3>Visualization</h3>
      <p>Picture yourself succeeding before the game. Visualize perfect passes and shots.</p>
      
      <h3>Stay Positive</h3>
      <p>Focus on what you can control. Don't dwell on mistakes - learn and move on.</p>
      
      <h3>Breathe Deeply</h3>
      <p>Use deep breathing to stay calm under pressure. Inhale for 4, hold for 4, exhale for 4.</p>
      
      <h3>Set Small Goals</h3>
      <p>Focus on mini-objectives like completing 5 passes in a row rather than the whole game.</p>
    `
  },
  {
    icon: Clock,
    title: 'Pre-Match Warm-up Routine',
    description: 'Essential exercises to prepare your body and prevent injuries',
    time: '2 min read',
    category: 'Fitness',
    content: `
      <h3>Dynamic Stretching</h3>
      <p>Leg swings, high knees, and butt kicks to prepare your muscles.</p>
      
      <h3>Ball Work</h3>
      <p>Start with simple touches, then progress to juggling and short passes.</p>
      
      <h3>Movement Patterns</h3>
      <p>Practice cutting, stopping, and starting movements you'll use in the game.</p>
      
      <h3>Shooting Practice</h3>
      <p>Take a few shots to get your eye in and feel confident about finishing.</p>
    `
  }
];

const TipCards = () => {
  const [selectedTip, setSelectedTip] = useState<typeof tips[0] | null>(null);
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Pro Tips & Insights
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Quick tips and expert advice to accelerate your football development
          </p>
        </div>
        
        {/* Horizontal Scrolling Container */}
        <div className="relative">
          <div className="flex space-x-6 overflow-x-auto custom-scrollbar pb-4">
            {tips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <div
                  key={tip.title}
                  onClick={() => setSelectedTip(tip)}
                  className="flex-none w-80 glass-hover glass-strong rounded-3xl p-6 cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 p-3 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full glass border border-primary/30 text-primary font-medium">
                      {tip.category}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="font-display text-lg font-bold text-foreground leading-tight">
                      {tip.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-glass-border">
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {tip.time}
                    </span>
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                  </div>
                  
                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              );
            })}
          </div>
          
          {/* Scroll Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {tips.map((_, index) => (
              <div key={index} className="w-2 h-2 rounded-full bg-primary/30" />
            ))}
          </div>
        </div>
      </div>
      
      {/* Tip Detail Modal */}
      <Dialog open={!!selectedTip} onOpenChange={() => setSelectedTip(null)}>
        <DialogContent className="max-w-4xl glass-strong border-0 p-0 overflow-hidden">
          {selectedTip && (
            <>
              <DialogHeader className="glass-strong p-6 border-b border-glass-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 p-3">
                      <selectedTip.icon className="w-full h-full text-white" />
                    </div>
                    <div>
                      <DialogTitle className="font-display text-xl md:text-2xl font-bold text-foreground">
                        {selectedTip.title}
                      </DialogTitle>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-xs px-3 py-1 rounded-full glass border border-primary/30 text-primary font-medium">
                          {selectedTip.category}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {selectedTip.time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedTip(null)}
                    className="w-10 h-10 rounded-full glass-hover"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </DialogHeader>
              
              <div className="p-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
                <div 
                  className="prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedTip.content }}
                  style={{
                    color: 'hsl(var(--muted-foreground))',
                  }}
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TipCards;