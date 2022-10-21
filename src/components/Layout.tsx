import {
    MantineProvider,
    MantineThemeBase,
    MantineThemeOverride,
} from "@mantine/core";
import React from "react";
import "../main.css"

const customTheme: MantineThemeOverride = {
    dir: "ltr",
    primaryShade: {
        light: 6,
        dark: 8,
    },
    focusRing: "auto",
    loader: "oval",
    dateFormat: "MMMM D, YYYY",
    colorScheme: "light",
    white: "#fff",
    black: "#000",
    defaultRadius: "sm",
    transitionTimingFunction: "ease",
    lineHeight: 1.5,
    fontFamily:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
    fontFamilyMonospace:
        "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
    respectReducedMotion: true,
    cursorType: "default",
    defaultGradient: {
        from: "indigo",
        to: "cyan",
        deg: 45,
    },

    shadows: {
        xs: "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",
        sm: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",
        md: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
        lg: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",
        xl: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px",
    },

    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 18,
        xl: 20,
    },

    radius: {
        xs: 2,
        sm: 4,
        md: 8,
        lg: 16,
        xl: 32,
    },

    spacing: {
        xs: 10,
        sm: 12,
        md: 16,
        lg: 20,
        xl: 24,
    },

    breakpoints: {
        xs: 576,
        sm: 768,
        md: 992,
        lg: 1200,
        xl: 1400,
    },

    headings: {
        fontFamily:
            "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
        fontWeight: 600,
        sizes: {
            h1: { fontSize: 34, lineHeight: 1.3, fontWeight: undefined },
            h2: { fontSize: 26, lineHeight: 1.35, fontWeight: undefined },
            h3: { fontSize: 22, lineHeight: 1.4, fontWeight: undefined },
            h4: { fontSize: 18, lineHeight: 1.45, fontWeight: undefined },
            h5: { fontSize: 16, lineHeight: 1.5, fontWeight: undefined },
            h6: { fontSize: 14, lineHeight: 1.5, fontWeight: undefined },
        },
    },

    other: {},
    activeStyles: { transform: "translateY(1px)" },
    datesLocale: "en",
    primaryColor: "red",
    components: {
        Container: {
            defaultProps: {
                sizes: {
                    xs: 540,
                    sm: 720,
                    md: 960,
                    lg: 1140,
                    xl: 1320,
                },
            },
        },
    },
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS theme={customTheme}>
            {children}
        </MantineProvider>
    );
};
