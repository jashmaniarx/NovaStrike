import { useState } from 'react';
import { Play, X, Maximize, Volume2, SkipBack, SkipForward } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface Skill {
  id: string;
  title: string;
  description: string;
  videoId: string;
  category: 'dribbling' | 'shooting' | 'passing' | 'freestyle' | 'defending';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

const footballSkills: Skill[] = [
  {
    id: 'basic-dribbling',
    title: 'Basic Dribbling',
    description: 'How to control the ball at walking speed with both feet',
    videoId: 'Fj3Jsn0Pa7c',
    category: 'dribbling',
    difficulty: 'beginner'
  },
  {
    id: 'stepovers',
    title: 'Stepovers',
    description: 'Step-by-step tutorial on performing stepovers to beat defenders',
    videoId: 'y1UJrlWu7J8',
    category: 'dribbling',
    difficulty: 'beginner'
  },
  {
    id: 'body-feints',
    title: 'Body Feints',
    description: 'Using your body to fake out opponents',
    videoId: 'MuZMm2z9kak',
    category: 'dribbling',
    difficulty: 'intermediate'
  },
  {
    id: 'pull-back-turn',
    title: 'Pull Back Turn',
    description: 'How to do the Cruyff turn and pull back moves to change direction fast',
    videoId: 'OPlQyy5kW38',
    category: 'dribbling',
    difficulty: 'intermediate'
  },
  {
    id: 'nutmeg',
    title: 'Nutmeg (Panna)',
    description: 'Tricks to nutmeg defenders smoothly',
    videoId: '_uuqsGCiM9I',
    category: 'dribbling',
    difficulty: 'advanced'
  },
  {
    id: 'laces-shot',
    title: 'Laces Shot Technique',
    description: 'How to strike the ball with power using your laces',
    videoId: 'D9bCmGGu5l0',
    category: 'shooting',
    difficulty: 'beginner'
  },
  {
    id: 'curled-shots',
    title: 'Curled Shots',
    description: 'Bending the ball around the wall like Messi or Ronaldo',
    videoId: 'QDb5-cMIbjM',
    category: 'shooting',
    difficulty: 'intermediate'
  },
  {
    id: 'volley-shots',
    title: 'Volley Shots',
    description: 'Hitting the ball in mid-air with accuracy',
    videoId: 'ygpiOydrU4A',
    category: 'shooting',
    difficulty: 'advanced'
  },
  {
    id: 'chip-shots',
    title: 'Chip Shots',
    description: 'Lifting the ball over the keeper with finesse',
    videoId: 'ibYthQWrN4g',
    category: 'shooting',
    difficulty: 'intermediate'
  },
  {
    id: 'shielding',
    title: 'Shielding the Ball',
    description: 'Protecting the ball under pressure',
    videoId: 'Fj3Jsn0Pa7c',
    category: 'defending',
    difficulty: 'beginner'
  },
  {
    id: 'maradona-turn',
    title: 'Quick Turns (Maradona Turn)',
    description: 'Spinning away from defenders in tight spaces',
    videoId: 'y68sFZtB0QM',
    category: 'dribbling',
    difficulty: 'advanced'
  },
  {
    id: 'one-touch-passing',
    title: 'One-Touch Passing',
    description: 'Improving your first touch and passing speed',
    videoId: 'MuZMm2z9kak',
    category: 'passing',
    difficulty: 'intermediate'
  },
  {
    id: 'crossing',
    title: 'Crossing Techniques',
    description: 'How to deliver dangerous balls into the box',
    videoId: 'QDb5-cMIbjM',
    category: 'passing',
    difficulty: 'intermediate'
  },
  {
    id: 'freestyle-tricks',
    title: 'Freestyle Tricks (Around the World)',
    description: 'Showing cool freestyle tricks to impress',
    videoId: '_uuqsGCiM9I',
    category: 'freestyle',
    difficulty: 'advanced'
  },
  {
    id: 'juggling',
    title: 'Juggling Skills',
    description: 'Basic to advanced juggling drills to improve ball control',
    videoId: 'OPlQyy5kW38',
    category: 'freestyle',
    difficulty: 'beginner'
  }
];

interface TrainingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TrainingModal = ({ isOpen, onClose }: TrainingModalProps) => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Skills', color: 'from-primary to-primary/60' },
    { id: 'dribbling', label: 'Dribbling', color: 'from-primary to-primary/60' },
    { id: 'shooting', label: 'Shooting', color: 'from-secondary to-secondary/60' },
    { id: 'passing', label: 'Passing', color: 'from-accent to-accent/60' },
    { id: 'freestyle', label: 'Freestyle', color: 'from-primary via-secondary to-accent' },
    { id: 'defending', label: 'Defending', color: 'from-accent to-primary' }
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? footballSkills 
    : footballSkills.filter(skill => skill.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-secondary';
      case 'intermediate': return 'text-primary';
      case 'advanced': return 'text-accent';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl h-[90vh] glass-strong border-0 p-0 overflow-hidden">
        {!selectedSkill ? (
          <>
            {/* Header */}
            <DialogHeader className="glass-strong p-6 border-b border-glass-border">
              <div className="flex items-center justify-between">
                <DialogTitle className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  Football Skills Training
                </DialogTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="w-10 h-10 rounded-full glass-hover"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-3 mt-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'glass-glow bg-primary/20 text-primary border border-primary/30'
                        : 'glass-hover text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </DialogHeader>

            {/* Skills Grid */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, index) => (
                  <div
                    key={skill.id}
                    onClick={() => setSelectedSkill(skill)}
                    className="group glass-hover glass-strong rounded-2xl p-6 cursor-pointer animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Video Thumbnail */}
                    <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-muted/30 to-background/20">
                      <img
                        src={`https://img.youtube.com/vi/${skill.videoId}/hqdefault.jpg`}
                        alt={skill.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-display text-lg font-bold text-foreground">
                          {skill.title}
                        </h3>
                        <span className={`text-xs font-semibold uppercase tracking-wide ${getDifficultyColor(skill.difficulty)}`}>
                          {skill.difficulty}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Video Player View */}
            <div className="h-full flex flex-col">
              {/* Video Header */}
              <div className="glass-strong p-4 border-b border-glass-border flex items-center justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {selectedSkill.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {selectedSkill.description}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedSkill(null)}
                    className="rounded-full glass-hover"
                  >
                    ← Back
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onClose}
                    className="w-10 h-10 rounded-full glass-hover"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Video Player */}
              <div className="flex-1 p-6">
                <div className="aspect-video rounded-2xl overflow-hidden glass-strong">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${selectedSkill.videoId}?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0`}
                    title={selectedSkill.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>

                {/* Video Info */}
                <div className="mt-6 glass rounded-2xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Category</h4>
                      <span className="text-sm px-3 py-1 rounded-full glass border border-primary/30 text-primary capitalize">
                        {selectedSkill.category}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Difficulty</h4>
                      <span className={`text-sm font-semibold uppercase ${getDifficultyColor(selectedSkill.difficulty)}`}>
                        {selectedSkill.difficulty}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Duration</h4>
                      <span className="text-sm text-muted-foreground">5-10 minutes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default TrainingModal;