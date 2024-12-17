import './App.css';
import { Home } from './components/Home';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, getDefaultTheme } from './styles/theme';
import { GlobalStyles } from './styles/globalStyles';
import { Exit } from './components/Exit';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const App = () => {
  const [theme, setTheme] = useState(getDefaultTheme());

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header onThemeToggle={toggleTheme} themeName={theme.name} />
      <Exit />
      <Home />
      <Footer />
    </ThemeProvider>
  );
};

export default App;