let defaultConfig = require("tailwindcss/defaultConfig")();

let colors = {
  inherit: "inherit",
  transparent: "transparent",

  foreground: "rgb(250, 250, 250)",
  foregroundLight: "rgba(250, 250, 250, .75)",
  foregroundLighter: "rgba(250, 250, 250, .5)",
  foregroundSlight: "rgba(250, 250, 250, .05)",

  background: "rgb(70, 45, 155)",
  backgroundDark: "rgb(60, 35, 145)",
  backgroundLight: "rgba(70, 45, 155, .75)",
  backgroundLighter: "rgba(70, 45, 155, .5)",

  primary: "rgb(40, 40, 40)",
  primaryLight: "rgba(50, 50, 50)",
  primaryText: "rgb(250, 250, 250)",
  primaryTextSlight: "rgba(250, 250, 250, .1)",

  secondary: "rgb(65, 120, 225)",
  secondaryLight: "rgb(100, 170, 255)",
  secondaryDark: "rgb(45, 100, 200)",
  secondaryText: "rgb(250, 250, 250)"
};

module.exports = {
  colors: colors,

  screens: {
    desktop: "992px"
  },

  fonts: {
    sans: [
      "Roboto",
      "Droid Sans",
      "Fira Sans",
      "Helvetica Neue",
      "system-ui",
      "BlinkMacSystemFont",
      "-apple-system",
      "Segoe UI",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "sans-serif"
    ]
  },

  textSizes: {
    xxs: ".5rem",
    xs: ".7rem",
    base: "16px",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem"
  },

  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },

  leading: {
    none: 1,
    tight: 1.25,
    normal: 1.5,
    loose: 2
  },

  tracking: {
    tight: "-0.05em",
    normal: "0",
    wide: "0.05em"
  },

  textColors: colors,

  backgroundColors: colors,

  backgroundSize: {
    auto: "auto",
    cover: "cover",
    contain: "contain"
  },

  borderWidths: {
    default: "1px",
    "0": "0",
    "2": "2px",
    "4": "4px",
    "8": "8px"
  },

  borderColors: global.Object.assign({ default: colors["grey-light"] }, colors),

  borderRadius: {
    none: "0",
    sm: ".125rem",
    default: ".25rem",
    lg: ".5rem",
    full: "9999px"
  },

  width: {
    contentWidth: "940px",
    auto: "auto",
    px: "1px",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
    "24": "6rem",
    "32": "8rem",
    "48": "12rem",
    "64": "16rem",
    "1/2": "50%",
    "1/3": "33.33333%",
    "2/3": "66.66667%",
    "1/4": "25%",
    "3/4": "75%",
    "1/5": "20%",
    "2/5": "40%",
    "3/5": "60%",
    "4/5": "80%",
    "1/6": "16.66667%",
    "5/6": "83.33333%",
    full: "100%",
    screen: "100vw"
  },

  height: {
    auto: "auto",
    px: "1px",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
    "24": "6rem",
    "32": "8rem",
    "48": "12rem",
    "64": "16rem",
    full: "100%",
    screen: "100vh"
  },

  minWidth: {
    "0": "0",
    full: "100%"
  },

  minHeight: {
    "0": "0",
    full: "100%",
    screen: "100vh"
  },

  maxWidth: {
    contentWidth: "960px",
    xs: "20rem",
    sm: "30rem",
    md: "40rem",
    lg: "50rem",
    xl: "60rem",
    "2xl": "70rem",
    "3xl": "80rem",
    "4xl": "90rem",
    "5xl": "100rem",
    full: "100%"
  },

  maxHeight: {
    full: "100%",
    screen: "100vh"
  },

  padding: {
    px: "1px",
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "5": "1.25rem",
    "8": "2rem",
    "13": "3rem",
    "21": "5rem",
    "34": "8rem"
  },

  margin: {
    auto: "auto",
    px: "1px",
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "5": "1.25rem",
    "8": "2rem",
    "13": "3rem",
    "21": "5rem",
    "34": "8rem"
  },

  negativeMargin: {
    px: "1px",
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "5": "1.25rem",
    "8": "2rem",
    "13": "3rem",
    "21": "5rem",
    "34": "8rem"
  },

  shadows: {
    default: "0 2px 4px 0 rgba(0,0,0,0.10)",
    md: "0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)",
    lg: "0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)",
    inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
    outline: "0 0 0 3px rgba(52,144,220,0.5)",
    none: "none"
  },

  zIndex: {
    auto: "auto",
    "0": 0,
    "10": 10,
    "20": 20,
    "30": 30,
    "40": 40,
    "50": 50
  },

  opacity: {
    "0": "0",
    "10": ".1",
    "25": ".25",
    "50": ".5",
    "75": ".75",
    "100": "1"
  },

  svgFill: {
    current: "currentColor"
  },

  svgStroke: {
    current: "currentColor"
  },

  modules: {
    appearance: ["responsive"],
    backgroundAttachment: ["responsive"],
    backgroundColors: ["responsive", "hover", "focus"],
    backgroundPosition: ["responsive"],
    backgroundRepeat: ["responsive"],
    backgroundSize: ["responsive"],
    borderCollapse: [],
    borderColors: ["responsive", "hover", "focus"],
    borderRadius: ["responsive"],
    borderStyle: ["responsive"],
    borderWidths: ["responsive"],
    cursor: ["responsive"],
    display: ["responsive"],
    flexbox: ["responsive"],
    float: ["responsive"],
    fonts: ["responsive"],
    fontWeights: ["responsive", "hover", "focus"],
    height: ["responsive"],
    leading: ["responsive"],
    lists: ["responsive"],
    margin: ["responsive"],
    maxHeight: ["responsive"],
    maxWidth: ["responsive"],
    minHeight: ["responsive"],
    minWidth: ["responsive"],
    negativeMargin: ["responsive"],
    objectFit: false,
    objectPosition: false,
    opacity: ["responsive", "hover", "focus"],
    outline: ["focus"],
    overflow: ["responsive"],
    padding: ["responsive"],
    pointerEvents: ["responsive"],
    position: ["responsive"],
    resize: ["responsive"],
    shadows: ["responsive", "hover", "focus"],
    svgFill: [],
    svgStroke: [],
    tableLayout: ["responsive"],
    textAlign: ["responsive"],
    textColors: ["responsive", "hover", "focus"],
    textSizes: ["responsive"],
    textStyle: ["responsive", "hover", "focus"],
    tracking: ["responsive"],
    userSelect: ["responsive"],
    verticalAlign: ["responsive"],
    visibility: ["responsive"],
    whitespace: ["responsive"],
    width: ["responsive"],
    zIndex: ["responsive"]
  },

  plugins: [
    require("tailwindcss/plugins/container")({
      // center: true,
      // padding: '1rem',
    })
  ],

  options: {
    prefix: "",
    important: false,
    separator: ":"
  }
};
