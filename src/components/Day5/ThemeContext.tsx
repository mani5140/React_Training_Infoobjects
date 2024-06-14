import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextType {
  theme: 'white' | 'black';
  toggleTheme: () => void;
}

interface props {
    children: ReactNode;
  }
  

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const useTheme = () => {

  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};


const ThemeProvider: React.FC<props> = ({ children }) => {
  const [theme, setTheme] = useState<'white' | 'black'>('black');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'white' ? 'black' : 'white'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme };
