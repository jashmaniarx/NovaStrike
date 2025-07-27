import { Brain, Target, Users, Eye, Zap, Shield } from 'lucide-react';

interface TacticalTip {
  icon: any;
  title: string;
  description: string;
  content: string;
  category: 'positioning' | 'awareness' | 'mindset';
}

const tacticalTips: TacticalTip[] = [
  {
    icon: Eye,
    title: 'Scanning the Field',
    description: 'Always know what\'s happening around you',
    category: 'awareness',
    content: `
      <h3>The 6-Second Rule:</h3>
      <p>Look around every 6 seconds when you don't have the ball. Elite players scan the field 5-6 times more than amateur players.</p>
      
      <h3>What to Look For:</h3>
      <ul>
        <li>Open teammates in advanced positions</li>
        <li>Opponent's defensive shape and gaps</li>
        <li>Space behind the defensive line</li>
        <li>Goalkeeper positioning</li>
      </ul>
      
      <h3>Head Movement Technique:</h3>
      <p>Use quick, subtle head movements. Don't turn your whole body - just move your eyes and head to gather information while maintaining your position.</p>
    `
  },
  {
    icon: Target,
    title: 'Off-the-Ball Movement',
    description: 'Create space and opportunities without possession',
    category: 'positioning',
    content: `
      <h3>Types of Runs:</h3>
      <ul>
        <li><strong>Diagonal Runs:</strong> Cut inside from wide positions</li>
        <li><strong>Overlapping Runs:</strong> Support from behind</li>
        <li><strong>Blind Side Runs:</strong> Move where defenders can't see you</li>
        <li><strong>Checking Runs:</strong> Come short to receive</li>
      </ul>
      
      <h3>Timing is Everything:</h3>
      <p>Start your run when the passer's head is up and they can see you. Too early and you'll be offside, too late and the opportunity is gone.</p>
      
      <h3>Creating Space:</h3>
      <p>Use decoy runs to pull defenders away, creating space for teammates or yourself to exploit later.</p>
    `
  },
  {
    icon: Brain,
    title: 'Reading the Game',
    description: 'Anticipate what happens next',
    category: 'awareness',
    content: `
      <h3>Pattern Recognition:</h3>
      <p>Notice how opponents play: Do they always pass back under pressure? Do they favor their right foot? Use this knowledge to anticipate their next move.</p>
      
      <h3>Body Language Clues:</h3>
      <ul>
        <li>Player's hip position indicates passing direction</li>
        <li>Heavy touches suggest the player is under pressure</li>
        <li>Defender's stance shows which way they want to force you</li>
      </ul>
      
      <h3>Game State Awareness:</h3>
      <p>Adjust your play based on the score, time remaining, and match situation. Risk vs. reward calculations change throughout the game.</p>
    `
  },
  {
    icon: Users,
    title: 'Team Shape & Support',
    description: 'Maintain optimal positioning relative to teammates',
    category: 'positioning',
    content: `
      <h3>Triangles & Angles:</h3>
      <p>Always position yourself to create passing triangles. This gives the ball carrier multiple options and makes it harder for opponents to press effectively.</p>
      
      <h3>Distance & Spacing:</h3>
      <ul>
        <li><strong>15-20 yards:</strong> Ideal distance for maintaining possession</li>
        <li><strong>Too close:</strong> Easy for one defender to mark multiple players</li>
        <li><strong>Too far:</strong> Passes become difficult and risky</li>
      </ul>
      
      <h3>Supporting Roles:</h3>
      <p>When a teammate has the ball, provide both a safe option (backward/sideways pass) and a progressive option (forward pass).</p>
    `
  },
  {
    icon: Zap,
    title: 'Decision Making Speed',
    description: 'Think faster than your opponents',
    category: 'mindset',
    content: `
      <h3>The 2-Touch Rule:</h3>
      <p>Aim to make decisions within 2 touches: first touch to control, second touch to pass, shoot, or dribble. This keeps the tempo high and opponents off balance.</p>
      
      <h3>Pre-Decision Making:</h3>
      <p>Decide what you'll do with the ball before you receive it. Use your scanning time to plan your next action.</p>
      
      <h3>Risk Assessment:</h3>
      <ul>
        <li><strong>Defensive third:</strong> Safety first, simple passes</li>
        <li><strong>Middle third:</strong> Mix of safe and progressive options</li>
        <li><strong>Attacking third:</strong> Take calculated risks for goal opportunities</li>
      </ul>
    `
  },
  {
    icon: Shield,
    title: 'Defensive Positioning',
    description: 'Smart defending without fouling',
    category: 'positioning',
    content: `
      <h3>Body Position:</h3>
      <p>Stay on your toes, knees slightly bent, weight forward. Position your body to show the attacker where you want them to go (usually away from goal).</p>
      
      <h3>Distance Management:</h3>
      <ul>
        <li><strong>Jockeying Distance:</strong> 2-3 yards - close enough to pressure, far enough to react</li>
        <li><strong>Closing Down:</strong> Sprint to get close, then slow down to maintain control</li>
      </ul>
      
      <h3>Timing the Tackle:</h3>
      <p>Wait for the attacker's heavy touch or when they look down at the ball. Never dive in when they have full control.</p>
    `
  }
];

const TacticalTips = () => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'positioning': return 'from-primary to-primary/60';
      case 'awareness': return 'from-secondary to-secondary/60';
      case 'mindset': return 'from-accent to-accent/60';
      default: return 'from-primary to-primary/60';
    }
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'positioning': return 'Positioning';
      case 'awareness': return 'Awareness';
      case 'mindset': return 'Mindset';
      default: return 'General';
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Game Smarts & Tactical Tips
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Master the mental side of football with professional tactical insights and game intelligence
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tacticalTips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <div
                key={tip.title}
                className="glass-strong rounded-3xl p-6 hover:scale-105 transition-transform duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getCategoryColor(tip.category)} p-3`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full glass border border-primary/30 text-primary font-medium">
                    {getCategoryBadge(tip.category)}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3 mb-6">
                  <h3 className="font-display text-lg font-bold text-foreground leading-tight">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tip.description}
                  </p>
                </div>

                {/* Detailed Content */}
                <div className="glass rounded-2xl p-4">
                  <div 
                    className="prose prose-sm prose-invert max-w-none text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: tip.content }}
                    style={{
                      fontSize: '0.75rem',
                      lineHeight: '1.2'
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Strategy Section */}
        <div className="mt-16 glass-strong rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Professional Football Intelligence
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The difference between good and great players isn't just technical ability - it's game intelligence, 
              tactical awareness, and decision-making under pressure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-2xl p-4 mx-auto mb-4">
                <Eye className="w-full h-full text-white" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Vision</h4>
              <p className="text-sm text-muted-foreground">See opportunities before they develop</p>
            </div>

            <div className="glass rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/60 rounded-2xl p-4 mx-auto mb-4">
                <Brain className="w-full h-full text-white" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Intelligence</h4>
              <p className="text-sm text-muted-foreground">Make smart decisions under pressure</p>
            </div>

            <div className="glass rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/60 rounded-2xl p-4 mx-auto mb-4">
                <Zap className="w-full h-full text-white" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Timing</h4>
              <p className="text-sm text-muted-foreground">Execute at the perfect moment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TacticalTips;