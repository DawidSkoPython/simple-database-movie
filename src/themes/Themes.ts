type Colors = { colors: Record<string, any> };

export type ThemesProps = {
  light: Colors;
  dark: Colors;
};

export type Theme = {
  theme: { colors: Record<string, any> };
};

const Themes: ThemesProps = {
  light: {
    colors: {
      primary: "#532473",
      secondary: "#532473",
      background: "#F2F2F2",
      text: "#0D0D0D",
      mobileMenuOverlay: "#000000",
      card: "#FFFFFF",
      themeToggleThumb: "#0D0D0D",
      paginationHover: "#CDCDCD",
    },
  },
  dark: {
    colors: {
      primary: "#532473",
      secondary: "#532473",
      background: "#0D0D0D",
      text: "#F2F2F2",
      mobileMenuOverlay: "#FFFFFF",
      card: "#090909",
      themeToggleThumb: "#F2F2F2",
      paginationHover: "#292929",
    },
  },
};

export default Themes;
