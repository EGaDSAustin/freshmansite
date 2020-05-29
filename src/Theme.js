import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { red, green, indigo } from "@material-ui/core/colors";

const EGaDSTheme = createMuiTheme({
    palette: {
        common: {
            black: "rgba(255, 255, 255, 1)",
            white: "rgba(255, 0, 0, 1)",
        },
        background: {
            paper: "rgba(57, 57, 57, 1)",
            default: "rgba(53, 53, 53, 1)",
        },
        primary: {
            light: "rgba(255, 0, 0, 1)",
            main: "rgba(142, 0, 0, 1)",
            dark: "#303f9f",
            contrastText: "rgba(255, 255, 255, 1)",
        },
        secondary: {
            light: "#ff4081",
            main: "rgba(138, 90, 107, 1)",
            dark: "rgba(87, 14, 47, 1)",
            contrastText: "rgba(255, 255, 255, 1)",
        },
        error: {
            light: "rgba(255, 215, 215, 1)",
            main: "rgba(255, 38, 20, 1)",
            dark: "rgba(131, 0, 0, 1)",
            contrastText: "#fff",
        },
        text: {
            primary: "rgba(255, 255, 255, 0.87)",
            secondary: "rgba(204, 204, 204, 0.54)",
            disabled: "rgba(134, 113, 113, 0.38)",
            hint: "rgba(233, 202, 243, 1)",
        },
    },
});

export default EGaDSTheme;
