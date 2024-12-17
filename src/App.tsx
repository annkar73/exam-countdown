import './App.css';
import { Home } from './components/Home';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, getDefaultTheme } from './styles/theme';
import { GlobalStyles } from './styles/globalStyles';
import { ThemeToggleButton } from './styles/ThemeToggleButton';

export const App = () => {
  const [theme, setTheme] = useState(getDefaultTheme());

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ThemeToggleButton onClick={toggleTheme} themeName={theme.name} />
      <Home />
    </ThemeProvider>
  );
};

export default App;