import React from "react";
import {} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import {
    Typography,
    AppBar,
    Toolbar,
    Button,
    IconButton,
} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import cn from "classnames";
import logo from "../egadscontroller2.png";
// import "../index.css";\

const styles = {
    root: {},
    toolBarLinks: {
        marginLeft: "auto",
    },
    logo: {
        position: "absolute",
        left: "calc(50% - 30px)",
        top: "calc(50% - 25px)",
        align: "center",
    },
    logoImg: {
        width: 60,
    },
    grow: {
        flexGrow: 1,
    },
    title: {
        maxWidth: "calc(50% - 60px)",
        fontFamily: "ElectricBoots",
    },
    bar: {
        padding: "16px",
    },
};

const Header = ({ classes, position, ...props }) => {
    return (
        <AppBar position={position}>
            <Toolbar className={cn(classes.bar)}>
                <Typography variant="h4" className={cn(classes.title)}>
                    electronic game developers society
                </Typography>
                <div className={cn(classes.grow)} />
                <div className={cn(classes.logo)}>
                    <img
                        src={logo}
                        // src="http://pngimg.com/uploads/soviet_union/soviet_union_PNG54.png"
                        alt="gamer"
                        className={cn(classes.logoImg)}
                    />
                </div>

                <div className={cn(classes.grow)} />
                <div className={cn(classes.grow)} />
                <div className={cn(classes.grow)} />

                {/* <Button> info </Button>
                <div className={cn(classes.grow)} onClick={executeScroll} />
                <Button> bug </Button>
                <div className={cn(classes.grow)} />
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                >
                    <MoreHorizIcon />
                </IconButton> */}
            </Toolbar>
        </AppBar>
    );
};

export default withStyles(styles)(Header);
