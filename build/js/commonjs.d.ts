/**
 * Do not edit directly
 * Generated on Mon, 19 Feb 2024 23:19:30 GMT
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
      "none": DesignToken,
      "dark": {
        "thin": DesignToken,
        "medium": DesignToken,
        "thick": DesignToken
      },
      "light": {
        "thin": DesignToken,
        "medium": DesignToken,
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
      "rad-800": DesignToken,
      "rad-900": DesignToken,
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
      "gray": {
        "alpha": DesignToken,
        "beta": DesignToken,
        "gamma": DesignToken,
        "epsilon": DesignToken,
        "theta": DesignToken,
        "eta": DesignToken,
        "iota": DesignToken
      },
      "green": {
        "primary": DesignToken
      },
      "blue": {
        "primary": DesignToken,
        "secondary": DesignToken
      },
      "synthwave": {
        "pink": {
          "primary": DesignToken,
          "secondary": DesignToken
        },
        "purple": {
          "primary": DesignToken,
          "secondary": DesignToken,
          "tertiary": DesignToken,
          "quadratic": DesignToken
        },
        "blue": {
          "primary": DesignToken,
          "secondary": DesignToken,
          "tertiary": DesignToken,
          "quadratic": DesignToken
        }
      },
      "system": {
        "info": {
          "light": DesignToken,
          "dark": DesignToken
        },
        "warning": {
          "light": DesignToken,
          "dark": DesignToken
        },
        "success": {
          "light": DesignToken,
          "dark": DesignToken
        },
        "error": {
          "light": DesignToken,
          "dark": DesignToken
        }
      }
    },
    "button": {
      "light": {
        "background": {
          "primary": DesignToken,
          "secondary": DesignToken,
          "tertiary": DesignToken,
          "states": {
            "active": DesignToken,
            "hover": DesignToken
          }
        },
        "color": {
          "primary": DesignToken,
          "secondary": DesignToken,
          "tertiary": DesignToken
        }
      },
      "dark": {
        "background": {
          "primary": DesignToken,
          "secondary": DesignToken,
          "tertiary": DesignToken,
          "states": {
            "active": DesignToken,
            "hover": DesignToken
          }
        },
        "color": {
          "primary": DesignToken,
          "secondary": DesignToken,
          "tertiary": DesignToken
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
        "h1": DesignToken,
        "h2": DesignToken,
        "h3": DesignToken,
        "h4": DesignToken,
        "h5": DesignToken,
        "h6": DesignToken
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
    },
    "lineHeight": {
      "base": DesignToken
    },
    "letterSpacing": {}
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
