import { Search, Filter, Play, Clock, Star, Zap, Target, Users, Gamepad2, Shield } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface Video {
  id: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  thumbnail: string;
  embedId: string;
  description: string;
}

const skillCategories = [
  { icon: Zap, name: 'Dribbling', color: 'from-primary to-primary/60' },
  { icon: Target, name: 'Shooting', color: 'from-secondary to-secondary/60' },
  { icon: Users, name: 'Passing', color: 'from-accent to-accent/60' },
  { icon: Gamepad2, name: 'Freestyle', color: 'from-primary via-secondary to-accent' },
  { icon: Shield, name: 'Defending', color: 'from-accent to-primary' },
  { icon: Star, name: 'Advanced', color: 'from-secondary via-accent to-primary' }
];

const videos: Video[] = [
  // Dribbling Videos
  { id: '1', title: 'Basic Ball Control', category: 'Dribbling', level: 'Beginner', duration: '5:23', thumbnail: '/placeholder.svg', embedId: 'LjOZRuLjqts', description: 'Master the fundamentals of ball control' },
  { id: '2', title: 'Advanced Dribbling Moves', category: 'Dribbling', level: 'Advanced', duration: '8:15', thumbnail: '/placeholder.svg', embedId: 'VY3gTj1n9NI', description: 'Learn professional dribbling techniques' },
  { id: '3', title: 'Stepovers & Feints', category: 'Dribbling', level: 'Intermediate', duration: '6:42', thumbnail: '/placeholder.svg', embedId: 'yJyKq7dNj0w', description: 'Master deceptive dribbling moves' },
  
  // Shooting Videos
  { id: '4', title: 'Perfect Shot Technique', category: 'Shooting', level: 'Beginner', duration: '7:30', thumbnail: '/placeholder.svg', embedId: 'g5T1j2q_hfI', description: 'Learn proper shooting form and technique' },
  { id: '5', title: 'Finishing in the Box', category: 'Shooting', level: 'Intermediate', duration: '9:12', thumbnail: '/placeholder.svg', embedId: 'D5AaB2QhQuw', description: 'Clinical finishing techniques' },
  { id: '6', title: 'Long Range Shooting', category: 'Shooting', level: 'Advanced', duration: '6:55', thumbnail: '/placeholder.svg', embedId: 'XF7UjEXJm2U', description: 'Power and accuracy from distance' },
  
  // Passing Videos
  { id: '7', title: 'Short Passing Basics', category: 'Passing', level: 'Beginner', duration: '5:45', thumbnail: '/placeholder.svg', embedId: 'RyeBRZgHC8I', description: 'Foundation of accurate passing' },
  { id: '8', title: 'Through Ball Mastery', category: 'Passing', level: 'Intermediate', duration: '8:20', thumbnail: '/placeholder.svg', embedId: 'Q7ZVjnJSV3w', description: 'Creating opportunities with passes' },
  { id: '9', title: 'Cross Field Passing', category: 'Passing', level: 'Advanced', duration: '7:18', thumbnail: '/placeholder.svg', embedId: 'oJt-dDlCQ9o', description: 'Long range distribution' },
  
  // Freestyle Videos
  { id: '10', title: 'Basic Juggling', category: 'Freestyle', level: 'Beginner', duration: '4:30', thumbnail: '/placeholder.svg', embedId: 'LjOZRuLjqts', description: 'Start your freestyle journey' },
  { id: '11', title: 'Around the World', category: 'Freestyle', level: 'Intermediate', duration: '6:15', thumbnail: '/placeholder.svg', embedId: 'VY3gTj1n9NI', description: 'Classic freestyle trick' },
  { id: '12', title: 'Advanced Combinations', category: 'Freestyle', level: 'Advanced', duration: '10:22', thumbnail: '/placeholder.svg', embedId: 'yJyKq7dNj0w', description: 'Complex freestyle sequences' },
  
  // Defending Videos
  { id: '13', title: 'Defensive Positioning', category: 'Defending', level: 'Beginner', duration: '6:40', thumbnail: '/placeholder.svg', embedId: 'g5T1j2q_hfI', description: 'Smart defensive positioning' },
  { id: '14', title: 'Tackling Techniques', category: 'Defending', level: 'Intermediate', duration: '7:55', thumbnail: '/placeholder.svg', embedId: 'D5AaB2QhQuw', description: 'Clean and effective tackles' },
  { id: '15', title: 'Advanced Defending', category: 'Defending', level: 'Advanced', duration: '9:30', thumbnail: '/placeholder.svg', embedId: 'XF7UjEXJm2U', description: 'Elite defensive strategies' }
];

const VideoSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || video.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || video.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Football Training Videos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Master every aspect of the beautiful game with our comprehensive video library
          </p>
        </div>

        {/* Search and Filters */}
        <div className="glass-strong rounded-3xl p-6 mb-12">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search training videos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 glass rounded-2xl border border-glass-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            {/* Filter Button */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="glass border-primary/30 text-primary hover:bg-primary/10"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-glass-border animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full p-3 glass rounded-xl border border-glass-border text-foreground bg-transparent"
                  >
                    <option value="All">All Categories</option>
                    {skillCategories.map(cat => (
                      <option key={cat.name} value={cat.name}>{cat.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Skill Level</label>
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="w-full p-3 glass rounded-xl border border-glass-border text-foreground bg-transparent"
                  >
                    <option value="All">All Levels</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`glass-hover glass-strong rounded-2xl p-4 text-center transition-all duration-300 animate-scale-in ${
                  selectedCategory === category.name ? 'ring-2 ring-primary/50 bg-primary/10' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} p-3 mx-auto mb-3`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                <span className="text-sm font-medium text-foreground">{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVideos.map((video, index) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="group glass-strong rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute top-3 right-3 glass rounded-lg px-2 py-1">
                  <span className="text-xs text-white font-medium">{video.duration}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-1 rounded-full glass border border-primary/30 text-primary">
                    {video.category}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full glass border border-secondary/30 text-secondary">
                    {video.level}
                  </span>
                </div>
                <h3 className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
            <div className="glass-strong rounded-3xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground">{selectedVideo.title}</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedVideo(null)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  ✕
                </Button>
              </div>
              
              <div className="aspect-video mb-4 rounded-2xl overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.embedId}?autoplay=1`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 rounded-full glass border border-primary/30 text-primary text-sm">
                  {selectedVideo.category}
                </span>
                <span className="px-3 py-1 rounded-full glass border border-secondary/30 text-secondary text-sm">
                  {selectedVideo.level}
                </span>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {selectedVideo.duration}
                </div>
              </div>
              
              <p className="text-muted-foreground">{selectedVideo.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSearch;