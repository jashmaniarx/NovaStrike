import { Clock, ChevronRight, Play } from 'lucide-react';
import { useState } from 'react';

interface ProTip {
  id: string;
  title: string;
  summary: string;
  readTime: string;
  category: string;
  content: string;
  videoEmbedId?: string;
}

const proTips: ProTip[] = [
  {
    id: '1',
    title: '5 Ways to Improve Your First Touch',
    summary: 'Master the fundamentals that separate amateur from professional players',
    readTime: '3 min read',
    category: 'Fundamentals',
    videoEmbedId: 'LjOZRuLjqts',
    content: `
      <h3>The Foundation of Great Football</h3>
      <p>Your first touch is often the difference between maintaining possession and losing the ball. Here are five key principles to master:</p>
      
      <h4>1. Prepare Your Body Position</h4>
      <p>Before the ball arrives, position your body to receive it. Face the direction you want to play next, with your hips open to the field.</p>
      
      <h4>2. Use the Correct Surface</h4>
      <p>Inside of the foot for control, outside for quick direction changes, thigh for chest-high balls, and chest for higher balls.</p>
      
      <h4>3. Cushion the Ball</h4>
      <p>Don't be a wall - let your receiving surface 'give' slightly as the ball arrives to kill its pace and keep it close.</p>
      
      <h4>4. Touch Away from Pressure</h4>
      <p>Always take your first touch away from the nearest defender, even if it means playing backwards initially.</p>
      
      <h4>5. Practice Under Pressure</h4>
      <p>Train with time constraints and defensive pressure to simulate match conditions. Perfect practice makes perfect.</p>
      
      <h3>Training Drill</h3>
      <p>Set up cones 5 yards apart. Have a partner pass to you from different angles and distances. Control with one touch, pass back with the second. Focus on keeping the ball within 2 feet of your body.</p>
    `
  },
  {
    id: '2',
    title: 'Quick Feet Drills for Agility',
    summary: 'Develop lightning-fast footwork with professional training methods',
    readTime: '5 min read',
    category: 'Training',
    videoEmbedId: 'VY3gTj1n9NI',
    content: `
      <h3>The Science of Quick Feet</h3>
      <p>Agility isn't just about speed - it's about efficient movement patterns that allow you to change direction rapidly while maintaining balance and control.</p>
      
      <h4>Fundamental Drills</h4>
      
      <h5>1. Ladder Drills</h5>
      <p>Practice in-in-out-out patterns, lateral movements, and single-foot hops. Focus on quick ground contact and staying on the balls of your feet.</p>
      
      <h5>2. Cone Weaving</h5>
      <p>Set up 6 cones in a line, 2 yards apart. Weave through using inside and outside of both feet. Gradually increase pace while maintaining control.</p>
      
      <h5>3. Box Drill</h5>
      <p>Create a 2x2 yard square with cones. Practice stepping in and out of the box in different patterns - forward, backward, sideways, and diagonally.</p>
      
      <h4>Advanced Techniques</h4>
      
      <h5>Plyometric Training</h5>
      <p>Include jumping and hopping exercises to develop explosive power in your legs. This translates to quicker acceleration and direction changes.</p>
      
      <h5>Reaction Training</h5>
      <p>Use visual or audio cues to practice changing direction. This improves your ability to react quickly during matches.</p>
      
      <h3>Weekly Training Schedule</h3>
      <p>Perform quick feet drills 3-4 times per week, 15-20 minutes per session. Always warm up properly and focus on quality over quantity.</p>
    `
  },
  {
    id: '3',
    title: 'Shooting Accuracy Secrets',
    summary: 'Learn the techniques pro strikers use to find the net consistently',
    readTime: '4 min read',
    category: 'Finishing',
    videoEmbedId: 'yJyKq7dNj0w',
    content: `
      <h3>The Mental Game of Shooting</h3>
      <p>Great strikers don't just have good technique - they have the right mindset and decision-making process before they even touch the ball.</p>
      
      <h4>Pre-Shot Preparation</h4>
      
      <h5>1. Scan Early</h5>
      <p>Look at the goal and goalkeeper position before you receive the ball. This gives you crucial information for your shot selection.</p>
      
      <h5>2. Set Your Plant Foot</h5>
      <p>Your non-kicking foot should be firmly planted beside the ball, pointing toward your target. This provides stability and accuracy.</p>
      
      <h5>3. Keep Your Head Still</h5>
      <p>Don't look up at the goal just before shooting. Trust your earlier observation and focus on clean contact with the ball.</p>
      
      <h4>Technical Excellence</h4>
      
      <h5>Contact Point</h5>
      <p>Strike through the center of the ball for power, or slightly underneath for elevation. The laces provide the most consistent striking surface.</p>
      
      <h5>Follow Through</h5>
      <p>Your leg should continue moving toward the target after contact. This ensures maximum power transfer and accuracy.</p>
      
      <h4>Target Selection</h4>
      
      <h5>Corner Placement</h5>
      <p>Aim for the corners - they're the hardest spots for goalkeepers to reach. Practice hitting the same corner repeatedly.</p>
      
      <h5>Low vs High</h5>
      <p>Low shots are generally more effective as they're harder for keepers to get down to quickly. Only go high when you have a clear sight of the top corner.</p>
      
      <h3>Pressure Training</h3>
      <p>Practice shooting with defenders closing you down and time pressure. Set up scenarios that mirror real match situations.</p>
    `
  }
];

const ProTipsInsights = () => {
  const [expandedTip, setExpandedTip] = useState<string | null>(null);

  const handleTipClick = (tipId: string) => {
    setExpandedTip(expandedTip === tipId ? null : tipId);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Pro Tips & Insights
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Deep-dive articles and expert insights to elevate your game to the next level
          </p>
        </div>

        {/* Tips List */}
        <div className="space-y-6">
          {proTips.map((tip, index) => (
            <div
              key={tip.id}
              className="glass-strong rounded-3xl overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Tip Preview */}
              <div
                onClick={() => handleTipClick(tip.id)}
                className="p-6 cursor-pointer hover:bg-white/5 transition-colors duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs px-3 py-1 rounded-full glass border border-primary/30 text-primary font-medium">
                        {tip.category}
                      </span>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {tip.readTime}
                      </div>
                    </div>
                    
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {tip.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {tip.summary}
                    </p>
                  </div>
                  
                  <ChevronRight 
                    className={`w-6 h-6 text-muted-foreground ml-4 transition-transform duration-300 ${
                      expandedTip === tip.id ? 'rotate-90' : ''
                    }`} 
                  />
                </div>
              </div>

              {/* Expanded Content */}
              {expandedTip === tip.id && (
                <div className="border-t border-glass-border animate-fade-in">
                  <div className="p-6 space-y-6">
                    {/* Article Content */}
                    <div 
                      className="prose prose-invert max-w-none text-muted-foreground"
                      dangerouslySetInnerHTML={{ __html: tip.content }}
                    />
                    
                    {/* Video Section */}
                    {tip.videoEmbedId && (
                      <div className="glass rounded-2xl p-4">
                        <div className="flex items-center gap-2 mb-4">
                          <Play className="w-5 h-5 text-primary" />
                          <h4 className="font-medium text-foreground">Watch the Technique</h4>
                        </div>
                        <div className="aspect-video rounded-xl overflow-hidden">
                          <iframe
                            src={`https://www.youtube.com/embed/${tip.videoEmbedId}`}
                            title={tip.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* More Coming Soon */}
        <div className="mt-16 text-center glass-strong rounded-3xl p-8">
          <h3 className="font-display text-xl font-bold text-foreground mb-2">
            More Insights Coming Soon
          </h3>
          <p className="text-muted-foreground">
            We're constantly adding new pro tips, tactical insights, and training methodologies 
            from professional coaches and players around the world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProTipsInsights;