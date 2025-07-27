import { Lightbulb, Clock, Zap, Target, Users, Trophy } from 'lucide-react';

const tips = [
  {
    icon: Lightbulb,
    title: '5 Ways to Improve Your First Touch',
    description: 'Essential techniques every footballer should master for better ball control',
    time: '3 min read',
    category: 'Fundamentals'
  },
  {
    icon: Zap,
    title: 'Quick Feet Drills for Agility',
    description: 'Boost your speed and coordination with these proven training methods',
    time: '5 min read',
    category: 'Training'
  },
  {
    icon: Target,
    title: 'Shooting Accuracy Secrets',
    description: 'Professional techniques to improve your goal-scoring precision',
    time: '4 min read',
    category: 'Finishing'
  },
  {
    icon: Users,
    title: 'Reading the Game Like a Pro',
    description: 'Develop tactical awareness and make better decisions on the pitch',
    time: '6 min read',
    category: 'Tactics'
  },
  {
    icon: Trophy,
    title: 'Mental Preparation Tips',
    description: 'Build confidence and focus to perform under pressure',
    time: '4 min read',
    category: 'Psychology'
  },
  {
    icon: Clock,
    title: 'Pre-Match Warm-up Routine',
    description: 'Essential exercises to prepare your body and prevent injuries',
    time: '2 min read',
    category: 'Fitness'
  }
];

const TipCards = () => {
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
    </section>
  );
};

export default TipCards;