/**
 * Do not edit directly
 * Generated on Fri, 29 Dec 2023 21:35:07 GMT
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
  "border": {
    "outline": {
      "dark": {
        "thin": DesignToken,
        "thick": DesignToken
      },
      "light": {
        "thin": DesignToken,
        "thick": DesignToken
      }
    },
    "radius": {
      "none": DesignToken,
      "rad-100": DesignToken,
      "rad-200": DesignToken,
      "rad-300": DesignToken,
      "rad-400": DesignToken,
      "rad-500": DesignToken,
      "rad-600": DesignToken,
      "rad-700": DesignToken,
      "max": DesignToken
    }
  },
  "boxShadow": {
    "light": {
      "elevation-100": DesignToken,
      "elevation-200": DesignToken
    },
    "dark": {
      "elevation-100": DesignToken,
      "elevation-200": DesignToken
    }
  },
  "color": {
    "base": {
      "black": {
        "alpha": DesignToken,
        "beta": DesignToken,
        "gamma": DesignToken,
        "epsilon": DesignToken,
        "theta": DesignToken,
        "eta": DesignToken,
        "iota": DesignToken
      },
      "white": {
        "alpha": DesignToken
      },
      "purple": {
        "dark": {
          "alpha": DesignToken,
          "beta": DesignToken,
          "gamma": DesignToken
        }
      },
      "green": {
        "dark": {
          "alpha": DesignToken
        }
      },
      "blue": {
        "dark": {
          "alpha": DesignToken
        },
        "light": {
          "alpha": DesignToken
        }
      },
      "red": {
        "light": {
          "alpha": DesignToken,
          "beta": DesignToken
        }
      }
    },
    "font": {
      "dark": {
        "contrast": {
          "high": DesignToken,
          "medium": DesignToken,
          "low": DesignToken
        }
      },
      "light": {
        "contrast": {
          "high": DesignToken,
          "medium": DesignToken,
          "low": DesignToken
        }
      }
    }
  },
  "font": {
    "size": {
      "small": DesignToken,
      "medium": DesignToken,
      "large": DesignToken,
      "xlarge": DesignToken,
      "body": {
        "accent": DesignToken,
        "normal": DesignToken
      },
      "heading": {
        "title": DesignToken,
        "subtitle": DesignToken
      }
    },
    "weight": {
      "thin": DesignToken,
      "light": DesignToken,
      "medium": DesignToken,
      "heavy": DesignToken,
      "thick": DesignToken,
      "body": {
        "normal": DesignToken,
        "bold": DesignToken
      },
      "heading": {
        "normal": DesignToken,
        "bold": DesignToken
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
      "large-200": DesignToken,
      "large-300": DesignToken
    }
  },
  "time": {
    "transition": {
      "enter": {
        "short": DesignToken,
        "medium": DesignToken,
        "long": DesignToken
      },
      "exit": {
        "short": DesignToken,
        "medium": DesignToken,
        "long": DesignToken
      }
    },
    "easing": {
      "base": DesignToken
    }
  }
}
