export const getColors = (color: string) => {
  switch (color) {
    case "ORANGE" || "Ember": {
      return {
        primary: "#ff3d00",
        secondary: "#ff3c00e6",
        tertiary: "#ffc2e7",
        quadrple: "#c83102",
        colorSlug: "Ember",
      };
    }
    case "LEAF" || "Zephyr": {
      return {
        primary: "#d6f31f",
        secondary: "#d7f31fe7",
        tertiary: "#309875",
        quadrple: "#b2cb13",
        colorSlug: "Zephyr",
      };
    }
    case "PINK" || "Cotton": {
      return {
        primary: "#ffc2e7",
        secondary: "#ffc2e7e7",
        tertiary: "#5200ff",
        quadrple: "#e398c6",
        colorSlug: "Cotton",
      };
    }
    case "TORQUISE" || "Aqua": {
      return {
        primary: "#3cffd0",
        secondary: "#3dffd2e6",
        tertiary: "#5100ffe6",
        quadrple: "#33cea8",
        colorSlug: "Aqua",
      };
    }
    default: {
      return {
        primary: "#d6f31f",
        secondary: "#d7f31fe7",
        tertiary: "#309875",
        quadrple: "#b2cb13",
        colorSlug: "Zephyr",
      };
    }
  }
};
