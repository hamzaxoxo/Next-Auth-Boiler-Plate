"use client";

import { colors } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Poppins } from "next/font/google";

export const plus = Poppins({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
});

const theme = createTheme({
    direction: "ltr",
    palette: {
        success: {
            main: "#6366F1",
            light: "#6366F1",
            dark: "#6366F1",
            contrastText: "#6366F1",
        },
        text: {
            primary: "#6366F1",
            secondary: "#5A6A85",
        },
        action: {
            disabledBackground: "rgba(73,82,88,0.12)",
            hoverOpacity: 0.02,
            hover: "#f6f9fc",
        },
        divider: "#e5eaef",
    },
    typography: {
        fontFamily: plus.style.fontFamily,
    },

    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '5px',
                        colors: "#6366F1",
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#6366F1',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#6366F1',
                        },
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: "10px",
                    borderRadius: '5px',
                    border: 'none',
                    '&.MuiButton-contained': {
                        boxShadow: 'none',
                        backgroundColor: '#6366F1',
                        '&:hover': {
                            boxShadow: 'none',
                            backgroundColor: '#6366F1',
                        },
                    },
                },
                outlined: {
                    border: '1px solid #6366F1',
                    color: '#6366F1',
                    fontWeight: 600,
                    fontSize: '12px',
                    '&:hover': {
                        color: 'rgb(99,102,241)',
                        backgroundColor: 'rgb(99,102,241,0.3)',
                        border: '1px solid #6366F1',
                    },
                },
            },

        },
    },
});

export default theme;