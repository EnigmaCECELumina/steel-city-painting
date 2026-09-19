'use client';

import { createContext, useContext } from 'react';

const ThemeContext = createContext({ theme: 'industrial', setTheme: (_theme: string) => undefined });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContext.Provider value={{ theme: 'industrial', setTheme: () => undefined }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
