import React from "react";
import logo from "./logo.svg";
import { Typography, Button, Container } from "@material-ui/core";
import { ThemeProvider, withStyles } from "@material-ui/styles";

const styles = (theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
    },
});

const Page = ({ className, classes, ...props }) => {
    return (
        <div>
            <Container className={className}>
                <Typography color="primary">
                    <p>
                        he be <b>spinning</b>
                    </p>
                    <img src={logo} alt="logo" />
                    <p>uh oh stinky</p>
                    <a>uwu click me</a>
                </Typography>
                <Button>hewwo</Button>
            </Container>
        </div>
    );
};

export default withStyles(styles)(Page);
