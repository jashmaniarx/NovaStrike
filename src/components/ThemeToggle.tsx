import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Always start with dark theme
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
    setIsDark(!isDark);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full glass-strong border border-primary/20 glass-hover"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-primary animate-fade-in" />
      ) : (
        <Moon className="w-5 h-5 text-primary animate-fade-in" />
      )}
    </Button>
  );
};

export default ThemeToggle;