/**
 * Do not edit directly
 * Generated on Thu, 28 Dec 2023 05:42:06 GMT
 */

export default tokens;

declare interface DesignToken {
  value: any;
  name?: string;
  comment?: string;
  themeable?: boolean;
  attributes?: {
    category?: string;
    type?: string;
    item?: string;
    subitem?: string;
    state?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

declare const tokens: {
  "color": {
    "base": {
      "black": {
        "oil": DesignToken,
        "obsidian": DesignToken,
        "slate": DesignToken,
        "midnight": DesignToken,
        "charcoal": DesignToken,
        "deepNavy": DesignToken,
        "richBlack": DesignToken
      },
      "white": DesignToken,
      "purple": {
        "dark": {
          "soft-100": DesignToken,
          "soft-200": DesignToken,
          "soft-300": DesignToken
        }
      },
      "green": {
        "dark": {
          "soft-100": DesignToken
        }
      },
      "blue": {
        "dark": {
          "soft-100": DesignToken
        },
        "light": {
          "soft-100": DesignToken,
          "soft-200": DesignToken
        }
      },
      "red": {
        "light": {
          "soft-100": DesignToken,
          "soft-200": DesignToken
        }
      }
    },
    "font": {
      "dark": {
        "highContrast": DesignToken,
        "mediumContrast": DesignToken,
        "lowContrast": DesignToken
      },
      "light": {
        "highContrast": DesignToken,
        "mediumContrast": DesignToken,
        "lowContrast": DesignToken
      }
    }
  },
  "size": {
    "spacing": {
      "none": DesignToken,
      "small-100": DesignToken,
      "small-200": DesignToken,
      "medium-100": DesignToken,
      "medium-200": DesignToken,
      "large-100": DesignToken,
      "large-200": DesignToken
    }
  }
}
