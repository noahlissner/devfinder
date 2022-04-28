module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        light: "0px 16px 30px -10px rgba(70, 96, 189, 0.198567)",
      },
    },
    colors: {
      "primary-blue": "#0079ff",
      "button-hover": "#60ABFF",
      "lightTheme-bg-dark": "#f6f8ff",
      "lightTheme-bg-light": "#fefefe",
      "lightTheme-text-dark": "#2b3442",
      "lightTheme-text-light": "#4b6a9b",
      "lightTheme-logo": "#222731",
      "lightTheme-switch": "#697C9A",
      "darkTheme-switch-hover": "#90a3d3",
      "darkTheme-bg-dark": "#141d2f",
      "darkTheme-bg-light": "#1e2a47",
      "darkTheme-text": "#fff",
      "darkTheme-primary-blue": "#fff",
      "lightTheme-social-hover": "#a4b4cc",
      "darkTheme-social-hover": "#8e94a3",
      transparent: "transparent",
    },
  },
  plugins: [],
};
