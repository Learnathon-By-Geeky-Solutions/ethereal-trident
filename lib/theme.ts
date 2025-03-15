export interface Theme {
  colors: {
    background: string;
    text: string;
    accent: string;
    secondaryAccent: string;
    fade: string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
}

export const lightTheme: Theme = {
  colors: {
    background: "#F4F4F5", // zinc-100
    text: "#18181B", // zinc-900
    accent: "#314158", // slate-700
    secondaryAccent: "#1447e6", // blue-600
    fade: "#d4d4d8", // zinc-300
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
};

export const darkTheme: Theme = {
  colors: {
    background: "#18181B", // zinc-900
    text: "#F4F4F5", // zinc-100
    accent: "#cad5e2", // slate-300
    secondaryAccent: "#51a2ff", // blue-400
    fade: "#3f3f46", // zinc-500
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
};
