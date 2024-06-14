
import { useTheme } from './ThemeContext';

const Theme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{background:theme}}>
      <p style={{color: theme === "black"?"white":"black"}}>The current theme is {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Theme;
