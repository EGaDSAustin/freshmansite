import React from "react";
import { Typography, Button, Container, Paper, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import Header from "./components/Header.js";
import cn from "classnames";
import goodboye from "./goodboye.png";

const styles = (theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
        backgroundImage: `linear-gradient(${theme.palette.gradient.primary} 0%, ${theme.palette.gradient.secondary} 75%, ${theme.palette.gradient.tertiary} 100%)`,
    },
    splash: {
        backgroundColor: theme.palette.background.default,
        height: "100vh",
        margin: 0,
        maxWidth: "100vw",
    },
    papuh: {},
    footer: {
        backgroundColor: theme.palette.primary,
    },
    box1: {
        paddingBottom: "4px",
        color: theme.palette.text.primary, // TODO: this jank
    },
    goodBoye: {
        width: "15%",
        position: "relative",
        left: "42.5%",
    },
});

const Page = ({ classes, rootClassName, className, ...props }) => {
    return (
        <div className={cn(classes.root, rootClassName, className)}>
            <Header position="sticky" />

            <Container className={cn(classes.splash)}>
                <Box className={cn(classes.box1)}>
                    {/* <Paper variant="outlined" square> */}
                    <Typography>
                        <b>Love video games?</b> Curious as to how they get
                        made? Then EGaDS is the club for you! We are a group of
                        interdisciplinary game development lovers; we want to
                        give you a peek behind the curtain as to how they are
                        created, and give you the skills and confidence to begin
                        creating your own.
                    </Typography>
                    {/* </Paper> */}
                </Box>

                <Box className={cn(classes.box1)}>
                    {/* <Paper> */}
                    <Typography>
                        <b>Weekly Meetings</b> -- Tune in each week as numerous
                        gaming professionals stop by the GDC to share their
                        stories of how they made it, and the advice they have
                        for those who are looking to enter into the gaming
                        industry. On top of giving career advice, members are
                        also exposed to various topics concerning the industry.
                        Great chances to learn about diverse aspects of the game
                        development world!
                        <br />
                    </Typography>
                    {/* </Paper> */}
                </Box>

                <Box className={cn(classes.box1)}>
                    {/* <Paper> */}
                    <Typography>
                        <b>Workshops</b> -- Led by EGaDS officers, students will
                        get hands-on experience in vital tools to game
                        development such as Unreal Blueprints, C# scripting for
                        Unity, and Blender. Designed for beginners in mind (and
                        intermediate users), members will walk away being
                        confident in starting their own projects!
                        <br />
                    </Typography>
                    {/* </Paper> */}
                </Box>

                <Box className={cn(classes.box1)}>
                    {/* <Paper> */}
                    <Typography>
                        <b>Game Jams</b> -- Throughout the academic year, EGaDs
                        hosts game jams such as the Global Game Jam and the UT
                        Game Jame where members have the chance to collaborate
                        with their fellow peers and friends to design a game. A
                        fun opportunity to test your skills and gain experience!{" "}
                        <br />
                    </Typography>
                    {/* </Paper> */}
                </Box>

                <Box className={cn(classes.box1)}>
                    {/* <Paper> */}
                    <Typography>
                        <b>Social Events</b> -- Members will have the
                        opportunity to attend socials to meet fellow developers.
                        Professionals such as artists, designers, programmers
                        where you will have the chance to learn about various
                        companies around Austin and the gaming culture here, in
                        addition to networking!
                    </Typography>
                    {/* </Paper> */}
                </Box>

                <Button>hewwo</Button>
            </Container>
            <Container className={cn(classes.splash)}>
                <Paper>
                    <Typography>hi next area!!!</Typography>
                </Paper>
            </Container>
            <Container className={cn(classes.footer)}>
                <Typography>welcome to stinky feetgads</Typography>
                <img
                    src={goodboye}
                    alt="a very good boye"
                    className={cn(classes.goodBoye)}
                />
            </Container>
        </div>
    );
};

export default withStyles(styles)(Page);
