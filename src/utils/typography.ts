import Typography from "typography";
import { Color } from "./color";

const fontFamily = ["MontserratVariable", "system-ui", "-apple-system",
  "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans",
  "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
  "Noto Color Emoji"]


const typography = new Typography({
  baseFontSize: "16px",
  bodyColor: Color.Primary,
  baseLineHeight: 1.625,
  bodyFontFamily: ['Merriweather', ...fontFamily],
  headerFontFamily: fontFamily,

  overrideStyles: () => ({
    html: { background: "#14094F" },
    p: { color: Color.Primary },
    small: { color: Color.Secondary },
    "h1,h2,h2 > a,h3": { color: Color.Highlight },
    a: { color: Color.Highlight90, textDecoration: "none" }
  })
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
