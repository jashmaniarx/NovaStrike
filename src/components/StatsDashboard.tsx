import { BarChart3, TrendingUp, Users, Target, Award, Activity } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ChartData {
  label: string;
  value: number;
  color: string;
}

const StatsDashboard = () => {
  const [goalData] = useState<ChartData[]>([
    { label: 'Haaland', value: 85, color: 'from-primary to-primary/60' },
    { label: 'Mbappe', value: 78, color: 'from-secondary to-secondary/60' },
    { label: 'Kane', value: 72, color: 'from-accent to-accent/60' },
    { label: 'Benzema', value: 68, color: 'from-primary/80 to-primary/40' },
    { label: 'Lewandowski', value: 65, color: 'from-secondary/80 to-secondary/40' }
  ]);

  const [passAccuracy] = useState<number>(87);
  const [shotsOnTarget] = useState<number>(74);
  const [tackles] = useState<number>(92);

  const CircularProgress = ({ percentage, label, icon: Icon, color }: { 
    percentage: number; 
    label: string; 
    icon: any; 
    color: string;
  }) => {
    const [animatedPercentage, setAnimatedPercentage] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => {
        setAnimatedPercentage(percentage);
      }, 300);
      return () => clearTimeout(timer);
    }, [percentage]);

    const circumference = 2 * Math.PI * 45;
    const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;

    return (
      <div className="glass rounded-3xl p-6 text-center animate-scale-in">
        <div className="relative w-24 h-24 mx-auto mb-4">
          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="hsl(var(--glass-border))"
              strokeWidth="8"
              fill="transparent"
            />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke={`hsl(var(--${color}))`}
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
              style={{
                filter: `drop-shadow(0 0 8px hsl(var(--${color})))`
              }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className={`w-6 h-6 text-${color}`} />
          </div>
        </div>
        <div className="text-2xl font-bold text-foreground mb-1">{animatedPercentage}%</div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </div>
    );
  };

  const BarChart = ({ data, title }: { data: ChartData[]; title: string }) => {
    const maxValue = Math.max(...data.map(d => d.value));
    
    return (
      <div className="glass-strong rounded-3xl p-6">
        <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center">
          <BarChart3 className="w-5 h-5 mr-2 text-primary" />
          {title}
        </h3>
        
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={item.label} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">{item.label}</span>
                <span className="text-sm font-bold text-primary">{item.value}</span>
              </div>
              <div className="glass rounded-full h-3 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${item.color} transition-all duration-1000 ease-out animate-scale-in`}
                  style={{ 
                    width: `${(item.value / maxValue) * 100}%`,
                    animationDelay: `${index * 0.2}s`,
                    filter: `drop-shadow(0 0 4px hsl(var(--primary)))`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Interactive Stats Dashboard
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time analytics and performance metrics with fluid animations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Circular Progress Charts */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center">
              <Activity className="w-5 h-5 mr-2 text-primary" />
              Performance Metrics
            </h3>
            
            <div className="grid grid-cols-1 gap-6">
              <CircularProgress 
                percentage={passAccuracy} 
                label="Pass Accuracy" 
                icon={Target}
                color="primary"
              />
              <CircularProgress 
                percentage={shotsOnTarget} 
                label="Shots on Target" 
                icon={Award}
                color="secondary"
              />
              <CircularProgress 
                percentage={tackles} 
                label="Tackle Success" 
                icon={Users}
                color="accent"
              />
            </div>
          </div>

          {/* Bar Chart */}
          <div className="lg:col-span-2">
            <BarChart data={goalData} title="Top Goal Scorers 2024" />
            
            {/* Additional Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="glass rounded-2xl p-6 text-center animate-scale-in">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 p-3 mx-auto mb-3">
                  <TrendingUp className="w-full h-full text-white" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">450</div>
                <div className="text-sm text-muted-foreground">Total Goals</div>
              </div>
              
              <div className="glass rounded-2xl p-6 text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-secondary/60 p-3 mx-auto mb-3">
                  <Users className="w-full h-full text-white" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">284</div>
                <div className="text-sm text-muted-foreground">Assists</div>
              </div>
              
              <div className="glass rounded-2xl p-6 text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent/60 p-3 mx-auto mb-3">
                  <Award className="w-full h-full text-white" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">156</div>
                <div className="text-sm text-muted-foreground">Clean Sheets</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsDashboard;