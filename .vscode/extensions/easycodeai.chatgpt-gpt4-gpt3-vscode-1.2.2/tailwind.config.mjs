import { nextui } from "@nextui-org/react";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['var(--vscode-font-family)', ...defaultTheme.fontFamily.sans],
      mono: ['var(--vscode-editor-font-family)', ...defaultTheme.fontFamily.mono],
    }
  },
  // next-ui only works with class, and only with .dark class
  darkMode: ['class', 'body.dark'],
  // TODO: use this instead when nextui supports it
  // darkMode: ['class', 'body[data-vscode-theme-kind="vscode-dark"],body[data-vscode-theme-kind="vscode-high-contrast"]'],
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#f3f3f4", // or DEFAULT
            foreground: "#11181C", // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#006FEE",
            },
            // ... rest of the colors
          },
        },
        dark: {
          colors: {
            background: "#252526", // or DEFAULT
            foreground: "#ECEDEE", // or 50 to 900 DEFAULT
            content1: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#333333",
            },
            default: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#737373",
            },
            primary: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#006FEE",
            },
          },
          // ... rest of the colors
        },
        mytheme: {
          // custom theme
          extend: "dark",
          colors: {
            primary: {
              DEFAULT: "#BEF264",
              foreground: "#000000",
            },
            focus: "#BEF264",
          },
        },
      },
    }),
  ],
};
