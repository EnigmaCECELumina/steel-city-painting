'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';
import { Sun, Moon, Palette } from 'lucide-react';

const themes = [
  { id: 'slate-brass', name: 'Slate & Brass', icon: Moon },
  { id: 'architectural-white', name: 'Architectural White', icon: Sun },
  { id: 'stealth-onyx', name: 'Stealth Onyx', icon: Palette },
] as const;

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative group">
      <button
        className="p-2 rounded-lg bg-card border border-border hover:border-accent transition-colors"
        aria-label="Switch theme"
      >
        <Palette className="w-5 h-5 text-foreground" />
      </button>
      
      <div className="absolute right-0 top-full mt-2 w-48 bg-card border border-border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="p-2 space-y-1">
          {themes.map((t) => {
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                  theme === t.id
                    ? "bg-accent text-white"
                    : "hover:bg-muted text-foreground"
                )}
              >
                <Icon className="w-4 h-4" />
                <span>{t.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}