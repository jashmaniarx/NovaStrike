import { Zap, Target, Users, Gamepad2, Shield, Star } from 'lucide-react';

const skills = [
  {
    icon: Zap,
    title: 'Dribbling',
    description: 'Master close control and beat defenders with style',
    color: 'from-primary to-primary/60'
  },
  {
    icon: Target,
    title: 'Shooting',
    description: 'Perfect your technique and find the back of the net',
    color: 'from-secondary to-secondary/60'
  },
  {
    icon: Users,
    title: 'Passing',
    description: 'Build play and create opportunities for your team',
    color: 'from-accent to-accent/60'
  },
  {
    icon: Gamepad2,
    title: 'Freestyle',
    description: 'Express yourself with creative tricks and flair',
    color: 'from-primary via-secondary to-accent'
  },
  {
    icon: Shield,
    title: 'Defending',
    description: 'Protect your goal and win back possession',
    color: 'from-accent to-primary'
  },
  {
    icon: Star,
    title: 'Advanced',
    description: 'Elite techniques for professional-level play',
    color: 'from-secondary via-accent to-primary'
  }
];

const SkillsGrid = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Skill Categories
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your focus area and start your journey to football mastery
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className="group glass-hover glass-strong rounded-3xl p-8 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${skill.color} p-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <div className={`absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${skill.color} opacity-30 animate-glow-pulse mx-auto`} />
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;