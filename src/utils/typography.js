import Typography from "typography";
import Noriega from "typography-theme-noriega";

Noriega.overrideThemeStyles = () => {
  return {
    "a:-webkit-any-link": {
      color: "honeydew"
    },
    html: {
      backgroundColor: "darkslateblue"
    },
    body: {
      color: "navajowhite"
    },
    h1: {
      color: "honeydew"
    },
    h2: {
      color: "honeydew"
    },
    h3: {
      color: "honeydew"
    },
    li: {
      listStyleType: "hiragana-iroha"
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
