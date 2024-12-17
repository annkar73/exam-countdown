export const lightTheme = {
  name: "light",
    background: '#8d9e84',
    text: '#090909',
    buttonBackground: '#ffffff',
    buttonText: '#8d9e84',
    buttonHoverBackground: '#42503f',
    buttonHoverText: '#ffffff',
    toggleBg: "#1a1a1a",
    toggleHandle: "#ccc",
  };
  
  export const darkTheme = {
    name: "dark",
    background: '#1a1a1a',
    text: '#f5f5f5',
    buttonBackground: '#444',
    buttonText: '#f5f5f5',
    buttonHoverBackground: '#222',
    buttonHoverText: '#ffffff',
    toggleBg: "#8d9e84",
    toggleHandle: "#ccc",
  };
  
  export const getDefaultTheme = () =>
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? darkTheme
      : lightTheme;
  