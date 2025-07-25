import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Marcus Johnson',
    role: 'Semi-Pro Player',
    avatar: 'MJ',
    rating: 5,
    review: 'The tutorials helped me improve my first touch dramatically. I went from struggling with ball control to confidently receiving passes under pressure.',
    skill: 'Ball Control'
  },
  {
    id: 2,
    name: 'Sofia Rodriguez',
    role: 'Youth Coach',
    avatar: 'SR',
    rating: 5,
    review: 'Amazing resource for coaching techniques. My players love the interactive drills and the progressive difficulty levels keep them engaged.',
    skill: 'Coaching'
  },
  {
    id: 3,
    name: 'Alex Thompson',
    role: 'Amateur Player',
    avatar: 'AT',
    rating: 4,
    review: 'The shooting tutorials are incredible. Finally understood proper body positioning and follow-through. Scored 3 goals last weekend!',
    skill: 'Shooting'
  },
  {
    id: 4,
    name: 'Elena Petrov',
    role: 'Academy Player',
    avatar: 'EP',
    rating: 5,
    review: 'These freestyle tricks took my skills to the next level. The step-by-step breakdowns make even the hardest moves achievable.',
    skill: 'Freestyle'
  },
  {
    id: 5,
    name: 'David Chen',
    role: 'Weekend Warrior',
    avatar: 'DC',
    rating: 5,
    review: 'Perfect for busy schedules. Short, focused sessions that deliver real results. My teammates notice the difference in my play.',
    skill: 'General'
  },
  {
    id: 6,
    name: 'Isabella Santos',
    role: 'College Player',
    avatar: 'IS',
    rating: 4,
    review: 'The tactical awareness section opened my eyes to reading the game better. Now I anticipate plays before they happen.',
    skill: 'Tactics'
  }
];

const UserReviews = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Player Testimonials
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from players who've transformed their game with our training methods
          </p>
        </div>
        
        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="glass-hover glass-strong rounded-3xl p-6 animate-scale-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Quote className="w-4 h-4 text-primary" />
              </div>
              
              {/* User Info */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? 'text-secondary fill-current'
                        : 'text-muted-foreground/30'
                    }`}
                  />
                ))}
                <span className="text-sm text-muted-foreground ml-2">
                  {review.rating}.0
                </span>
              </div>
              
              {/* Review Text */}
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                "{review.review}"
              </p>
              
              {/* Skill Tag */}
              <div className="flex justify-between items-center">
                <span className="text-xs px-3 py-1 rounded-full glass border border-accent/30 text-accent font-medium">
                  {review.skill}
                </span>
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
              </div>
              
              {/* Floating Background Elements */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-primary/5 animate-float" />
              <div className="absolute -top-2 -left-2 w-12 h-12 rounded-full bg-secondary/5 animate-float" style={{ animationDelay: '1s' }} />
            </div>
          ))}
        </div>
        
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { number: '10k+', label: 'Active Players' },
            { number: '500+', label: 'Video Tutorials' },
            { number: '4.9', label: 'Average Rating' },
            { number: '25+', label: 'Skill Categories' }
          ].map((stat, index) => (
            <div key={stat.label} className="glass rounded-2xl p-6 text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserReviews;