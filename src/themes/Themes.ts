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
      primary: "#F51A73",
      secondary: "#161616",
      background: "#F2F2F2",
      text: "#0D0D0D",
      mobileMenuOverlay: "#000000",
      card: "#FFFFFF",
      themeToggleThumb: "#161616",
      paginationHover: "#CDCDCD",
    },
  },
  dark: {
    colors: {
      primary: "#F51A73",
      secondary: "#090909",
      background: "#0D0D0D",
      text: "#F2F2F2",
      mobileMenuOverlay: "#FFFFFF",
      card: "#090909",
      themeToggleThumb: "#FFFFFF",
      paginationHover: "#292929",
    },
  },
};

export default Themes;
