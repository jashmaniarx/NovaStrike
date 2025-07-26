import { Trophy, Target, Clock, Users, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  status: 'live' | 'upcoming' | 'finished';
  time: string;
  events: MatchEvent[];
}

interface MatchEvent {
  type: 'goal' | 'card' | 'substitution';
  player: string;
  time: number;
  team: 'home' | 'away';
}

interface PlayerStat {
  name: string;
  position: string;
  goals: number;
  assists: number;
  rating: number;
}

const LiveMatchFeed = () => {
  const [matches] = useState<Match[]>([
    {
      id: '1',
      homeTeam: 'Manchester City',
      awayTeam: 'Liverpool',
      homeScore: 2,
      awayScore: 1,
      status: 'live',
      time: '78\'',
      events: [
        { type: 'goal', player: 'Haaland', time: 23, team: 'home' },
        { type: 'goal', player: 'Salah', time: 45, team: 'away' },
        { type: 'goal', player: 'De Bruyne', time: 67, team: 'home' }
      ]
    },
    {
      id: '2',
      homeTeam: 'Real Madrid',
      awayTeam: 'Barcelona',
      homeScore: 0,
      awayScore: 0,
      status: 'upcoming',
      time: '19:30',
      events: []
    }
  ]);

  const [playerStats] = useState<PlayerStat[]>([
    { name: 'Erling Haaland', position: 'ST', goals: 2, assists: 0, rating: 8.5 },
    { name: 'Kevin De Bruyne', position: 'CAM', goals: 1, assists: 2, rating: 9.2 },
    { name: 'Mohamed Salah', position: 'RW', goals: 1, assists: 1, rating: 8.0 }
  ]);

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'goal': return '⚽';
      case 'card': return '🟨';
      case 'substitution': return '🔄';
      default: return '';
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Live Match Feed
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time scores, events, and player statistics from top leagues
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Live Matches */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center">
              <Trophy className="w-5 h-5 mr-2 text-primary" />
              Current Matches
            </h3>
            
            {matches.map((match) => (
              <div key={match.id} className="glass-strong rounded-3xl p-6 animate-scale-in">
                {/* Match Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-3 h-3 rounded-full ${
                      match.status === 'live' ? 'bg-red-500 animate-pulse' : 
                      match.status === 'upcoming' ? 'bg-yellow-500' : 'bg-green-500'
                    }`} />
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                      {match.status === 'live' ? `LIVE ${match.time}` : 
                       match.status === 'upcoming' ? `${match.time}` : 'FULL TIME'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Premier League</span>
                  </div>
                </div>

                {/* Teams and Score */}
                <div className="grid grid-cols-3 items-center gap-4 mb-6">
                  <div className="text-right">
                    <h4 className="font-display text-lg font-bold text-foreground">{match.homeTeam}</h4>
                  </div>
                  <div className="text-center">
                    <div className="glass rounded-2xl p-4">
                      <div className="text-2xl font-bold text-foreground">
                        {match.homeScore} - {match.awayScore}
                      </div>
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="font-display text-lg font-bold text-foreground">{match.awayTeam}</h4>
                  </div>
                </div>

                {/* Recent Events */}
                {match.events.length > 0 && (
                  <div className="space-y-2">
                    <h5 className="text-sm font-semibold text-muted-foreground mb-3">Recent Events</h5>
                    {match.events.slice(-3).map((event, index) => (
                      <div key={index} className="flex items-center justify-between glass rounded-xl p-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">{getEventIcon(event.type)}</span>
                          <span className="text-sm font-medium text-foreground">{event.player}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{event.time}'</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Player Stats Sidebar */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-primary" />
              Top Performers
            </h3>
            
            <div className="glass-strong rounded-3xl p-6">
              <div className="space-y-4">
                {playerStats.map((player, index) => (
                  <div key={player.name} className="glass rounded-2xl p-4 animate-scale-in" 
                       style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-medium text-foreground">{player.name}</h4>
                        <span className="text-xs text-muted-foreground">{player.position}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">{player.rating}</div>
                        <div className="text-xs text-muted-foreground">Rating</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-3">
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-1">
                          <Target className="w-3 h-3 text-primary" />
                          <span className="text-sm font-semibold text-foreground">{player.goals}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">Goals</span>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-1">
                          <Users className="w-3 h-3 text-secondary" />
                          <span className="text-sm font-semibold text-foreground">{player.assists}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">Assists</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveMatchFeed;