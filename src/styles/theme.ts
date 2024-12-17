export const lightTheme = {
  name: "light",
  background: "#b8c3b1",
  text: "#090909",
  buttonBackground: "#ffffff",
  buttonText: "#b8c3b1",
  buttonHoverBackground: "#42503f",
  buttonHoverText: "#ffffff",
  toggleBg: "#1a1a1a",
  toggleHandle: "#ccc",
  headerBg: "#d2d9ce", // Ljus bakgrund för headern
  headerText: "#090909", // Textfärg för headern
};

export const darkTheme = {
  name: "dark",
  background: "#1a1a1a",
  text: "#f5f5f5",
  buttonBackground: "#444",
  buttonText: "#f5f5f5",
  buttonHoverBackground: "#222",
  buttonHoverText: "#ffffff",
  toggleBg: "#b8c3b1",
  toggleHandle: "#ccc",
  headerBg: "#3f3f2f", // Mörk bakgrund för headern
  headerText: "#ffffff", // Textfärg för headern
};

export const getDefaultTheme = () =>
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? darkTheme
    : lightTheme;
