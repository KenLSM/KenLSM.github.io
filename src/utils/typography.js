import Typography from "typography";
import Noriega from "typography-theme-noriega";

Noriega.overrideThemeStyles = () => {
  return {
    "a:-webkit-any-link": {
      color: "honeydew",
      textDecorationColor: "#cccbff",
    },
    html: {
      backgroundColor: "darkslateblue",
    },
    body: {
      color: "navajowhite",
    },
    h1: {
      color: "honeydew",
    },
    h2: {
      color: "honeydew",
    },
    h3: {
      color: "honeydew",
    },
    li: {
      listStyleType: "hiragana-iroha",
    },
    blockquote: {
      backgroundColor: "#f1f1f1",
      color: "#1e2e54",
      margin: "12px",
      padding: "6px",
      borderLeftColor: "green",
      borderLeftWidth: "6px",
      borderLeftStyle: "solid",
      fontStyle: "italic",
    },
  };
};

const typography = new Typography(Noriega);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
