import { Apple, Zap, Heart, Clock, ChefHat, Droplets } from 'lucide-react';

interface Tip {
  icon: any;
  title: string;
  description: string;
  content: string;
  category: 'nutrition' | 'recovery' | 'hydration';
}

const tips: Tip[] = [
  {
    icon: Apple,
    title: 'Pre-Game Power Smoothie',
    description: 'Boost energy levels 2 hours before kickoff',
    category: 'nutrition',
    content: `
      <h3>Ingredients:</h3>
      <ul>
        <li>1 banana (potassium for muscle function)</li>
        <li>1 cup Greek yogurt (protein and probiotics)</li>
        <li>1 tbsp honey (quick energy)</li>
        <li>1/2 cup oats (sustained carbs)</li>
        <li>1 cup almond milk</li>
        <li>Handful of berries (antioxidants)</li>
      </ul>
      
      <h3>Instructions:</h3>
      <p>Blend all ingredients until smooth. Consume 2-3 hours before training or match for optimal energy release.</p>
      
      <h3>Benefits:</h3>
      <p>Provides sustained energy, supports muscle function, and aids in hydration. The combination of simple and complex carbs ensures both immediate and long-lasting fuel.</p>
    `
  },
  {
    icon: Heart,
    title: 'Recovery Protein Bowl',
    description: 'Optimal post-training nutrition within 30 minutes',
    category: 'recovery',
    content: `
      <h3>Ingredients:</h3>
      <ul>
        <li>1 cup quinoa (complete protein)</li>
        <li>Grilled chicken breast (lean protein)</li>
        <li>Sweet potato (complex carbs)</li>
        <li>Avocado (healthy fats)</li>
        <li>Spinach (iron and vitamins)</li>
        <li>Cherry tomatoes (antioxidants)</li>
      </ul>
      
      <h3>Preparation:</h3>
      <p>Combine all ingredients in a bowl. Season with olive oil, lemon juice, and herbs. Eat within 30 minutes post-exercise.</p>
      
      <h3>Recovery Benefits:</h3>
      <p>3:1 carb to protein ratio for optimal muscle glycogen replenishment and protein synthesis. Anti-inflammatory properties aid in faster recovery.</p>
    `
  },
  {
    icon: Droplets,
    title: 'Hydration Strategy',
    description: 'Maintain peak performance through proper fluid intake',
    category: 'hydration',
    content: `
      <h3>Before Training (2-4 hours):</h3>
      <p>Drink 500-600ml of water. Add electrolytes if training in hot conditions.</p>
      
      <h3>During Training:</h3>
      <p>150-250ml every 15-20 minutes. Use sports drinks for sessions over 60 minutes.</p>
      
      <h3>Post Training:</h3>
      <p>Drink 150% of fluid lost through sweat. Weigh yourself before and after to calculate loss.</p>
      
      <h3>Electrolyte Balance:</h3>
      <p>Include sodium, potassium, and magnesium in longer sessions. Natural options include coconut water and diluted fruit juices.</p>
    `
  },
  {
    icon: Zap,
    title: 'Energy-Boosting Breakfast',
    description: 'Start your training day with sustained energy',
    category: 'nutrition',
    content: `
      <h3>Power Breakfast Bowl:</h3>
      <ul>
        <li>Whole grain porridge with banana</li>
        <li>2 eggs (complete protein)</li>
        <li>Mixed nuts and seeds</li>
        <li>Fresh berries</li>
        <li>Glass of orange juice</li>
      </ul>
      
      <h3>Timing:</h3>
      <p>Eat 2-3 hours before morning training. This provides sustained energy without causing digestive discomfort.</p>
      
      <h3>Nutritional Profile:</h3>
      <p>High in complex carbohydrates, quality protein, healthy fats, and essential vitamins for peak athletic performance.</p>
    `
  },
  {
    icon: Clock,
    title: 'Sleep & Recovery',
    description: 'Optimize rest for enhanced performance',
    category: 'recovery',
    content: `
      <h3>Sleep Schedule:</h3>
      <p>Aim for 8-9 hours of quality sleep. Go to bed and wake up at consistent times.</p>
      
      <h3>Pre-Sleep Routine:</h3>
      <ul>
        <li>No screens 1 hour before bed</li>
        <li>Cool, dark room (16-19°C)</li>
        <li>Light stretching or meditation</li>
        <li>Avoid caffeine 6 hours before sleep</li>
      </ul>
      
      <h3>Recovery Benefits:</h3>
      <p>Growth hormone release, muscle repair, memory consolidation, and immune system strengthening all occur during deep sleep.</p>
    `
  },
  {
    icon: ChefHat,
    title: 'Match Day Nutrition',
    description: 'What to eat on game day for peak performance',
    category: 'nutrition',
    content: `
      <h3>3-4 Hours Before:</h3>
      <p>Large meal with familiar foods: pasta, rice, lean protein, vegetables. Avoid high-fat and high-fiber foods.</p>
      
      <h3>1-2 Hours Before:</h3>
      <p>Light snack: banana with peanut butter, energy bar, or toast with honey.</p>
      
      <h3>30 Minutes Before:</h3>
      <p>Sports drink or diluted fruit juice for quick energy and hydration.</p>
      
      <h3>Half-Time:</h3>
      <p>Orange slices, sports drink, or energy gel if needed for second half energy.</p>
    `
  }
];

const TipsPage = () => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'nutrition': return 'from-primary to-primary/60';
      case 'recovery': return 'from-secondary to-secondary/60';
      case 'hydration': return 'from-accent to-accent/60';
      default: return 'from-primary to-primary/60';
    }
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'nutrition': return 'Nutrition';
      case 'recovery': return 'Recovery';
      case 'hydration': return 'Hydration';
      default: return 'General';
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Health & Performance Tips
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert nutrition, recovery, and health advice for peak football performance
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => {
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

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 glass-strong rounded-3xl p-8 text-center">
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">
            Personalized Nutrition Plans
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            Every athlete is unique. These tips provide general guidance, but consider consulting with a sports nutritionist 
            for personalized meal plans that match your specific training schedule, body composition goals, and dietary preferences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="glass rounded-xl p-4 text-center">
              <div className="text-xl font-bold text-primary mb-1">2-3</div>
              <div className="text-xs text-muted-foreground">Hours before training</div>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <div className="text-xl font-bold text-secondary mb-1">30</div>
              <div className="text-xs text-muted-foreground">Minutes post-workout</div>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <div className="text-xl font-bold text-accent mb-1">8-9</div>
              <div className="text-xs text-muted-foreground">Hours of sleep needed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TipsPage;