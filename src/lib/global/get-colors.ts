export const getColors = (color: string) => {
  switch (color) {
    case "ORANGE": {
      return {
        primary: "#ff3d00",
        secondary: "#ff3c00e6",
        tertiary: "#ffc2e7",
        quadrple: "#c83102",
        colorSlug: "Ember",
      };
    }
    case "LEAF": {
      return {
        primary: "#d6f31f",
        secondary: "#d7f31fe7",
        tertiary: "#309875",
        quadrple: "#b2cb13",
        colorSlug: "Zephyr",
      };
    }
    case "PINK": {
      return {
        primary: "#ffc2e7",
        secondary: "#ffc2e7e7",
        tertiary: "#5200ff",
        quadrple: "#e398c6",
        colorSlug: "Cotton",
      };
    }
    case "TORQUISE": {
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
        primary: "#ff3d00",
        secondary: "#ff3c00e6",
        tertiary: "#ffc2e7",
        quadrple: "#c83102",
        colorSlug: "Ember",
      };
    }
  }
};

export const getColorForPost = (color: string) => {
  switch (color) {
    case "Ember": {
      return "#ff3d00";
    }
    case "Zephyr": {
      return "#d6f31f";
    }
    case "Cotton": {
      return "#ffc2e7";
    }
    case "Aqua": {
      return "#3cffd0";
    }
    default: {
      return "#ff3d00";
    }
  }
};
