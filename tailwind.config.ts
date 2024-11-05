import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
    prefix: "tw-",
    darkMode: ["class"],
    content: ["./src/**/*.{html,js,svelte,ts}"],
    safelist: ["dark"],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px"
            }
        },
        borderWidth: {
            DEFAULT: "1px",
            0: "0",
            1: "1px",
            2: "2px",
            3: "3px",
            4: "4px",
            6: "6px"
        },
        extend: {
            colors: {
                primary: "#433a5f",
                primaryForeground: "#201c2e",
                secondary: "#a295cb",
                secondaryForeground: "#5a5370",
                accent: "#5c43a8",
                accentForeground: "#3a2a6b",
                text: "#000000",
                background: "#ffffff"
            },
            // borderRadius: {
            //     lg: "var(--radius)",
            //     md: "calc(var(--radius) - 2px)",
            //     sm: "calc(var(--radius) - 4px)"
            // },
            fontFamily: {
                sans: [...fontFamily.sans],
                sourcesans: ["Source Sans Pro", "sans"],
                opensans: ["Open Sans", "sans"],
                chewy: ["Chewy", "sans"]
            }
        }
    }
};

export default config;
