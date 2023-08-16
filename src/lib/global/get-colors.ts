export const getColors = (color: string) => {
  switch (color) {
    case "ORANGE": {
      return {
        primary: "#ff3d00",
        secondary: "#ff3c00e6",
        tertiary: "#ffc2e7",
        quadrple: "#c83102",
      };
    }
    case "LEAF": {
      return {
        primary: "#d6f31f",
        secondary: "#d7f31fe7",
        tertiary: "#309875",
        quadrple: "#b2cb13"
      };
    }
    case "PINK": {
      return {
        primary: "#ffc2e7",
        secondary: "#ffc2e7e7",
        tertiary: "#5200ff",
        quadrple: "#e398c6",
      };
    }
    case "TORQUISE": {
      return {
        primary: "#3cffd0",
        secondary: "#3dffd2e6",
        tertiary: "#5100ffe6",
        quadrple: "#33cea8",
      };
    }
    default: {
      return {
        primary: "#d6f31f",
        secondary: "#d7f31fe7",
        tertiary: "#309875",
        quadrple: "#b2cb13",
      };
    }
  }
};
