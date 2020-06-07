import React from "react";
import { Typography, Button, Container, Paper, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import Header from "./components/Header.js";
import cn from "classnames";
import goodboye from "./goodboye.png";
import splash from "./assets/photos/carmen.jpg";
import torus from "./assets/blueshape1.png";
import twisty from "./assets/blueshape3.png";
import sheets from "./assets/blueshape2.png";
import hole from "./assets/blueshape5.png";
import ball from "./assets/blueshape4.png";
import gameJam1 from "./assets/photos/gamejam1.JPG";
import gameJam2 from "./assets/photos/gamejam2.JPG";
import gameJam3 from "./assets/photos/gamejam3.JPG";
import tetris from "./assets/photos/tetris.JPG";
import whale from "./assets/photos/whale.JPG";

const styles = (theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
        backgroundImage: `linear-gradient(${theme.palette.gradient.primary} 0%, ${theme.palette.gradient.secondary} 75%, ${theme.palette.gradient.tertiary} 100%)`,
    },
    splash: {
        height: "100vh",
        textAlign: "center",
        backgroundImage: `url(${splash})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    splashText: {
        color: "white",
        position: "relative",
        zIndex: "2",
        fontFamily: "inherit",
        fontWeight: "bold",
        letterSpacing: "0.15em",
        paddingLeft: "0.15em",
    },
    splashTextBox: {
        position: "absolute",
        top: "80%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "16px",
        backgroundColor: "rgba(0,0,0,0.420)",
        borderRadius: "8px",
    },
    textBox: {
        padding: "16px",
        backgroundColor: "rgba(0,0,0,0.420)",
        borderRadius: "8px",
    },
    splashImg: {
        height: "100%",
        verticalAlign: "top",
    },
    footer: {
        backgroundColor: theme.palette.primary,
    },
    box0: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        width: "69%",
        padding: "32px",
        margin: "16px auto",
        position: "relative",
    },
    box1: {
        padding: "32px",
        color: theme.palette.text.primary,
        width: "50%",
        minWidth: "300px",
        position: "relative",
        zIndex: "2",
        boxSizing: "border-box",
        fontFamily: "inherit",
    },
    goodBoye: {
        width: "15%",
        position: "relative",
        left: "42.5%",
    },
    bestBoye: {
        width: "100%",
        verticalAlign: "top",
        borderRadius: "6.90px",
    },
    bestBoyeBox: {
        border: "4px solid white",
        borderRadius: "6.90px",
        padding: "0",
        width: "100%",
        display: "inline-block",
        margin: "auto",
        position: "relative",
    },
    bestBoyeBorderRight: {
        position: "absolute",
        border: `4px solid ${theme.palette.text.title}`,
        width: "100%",
        height: "100%",
        top: "2.5px",
        left: "4px",
        borderRadius: "6.90px",
    },
    bestBoyeBorderLeft: {
        position: "absolute",
        border: `4px solid ${theme.palette.text.title}`,
        width: "100%",
        height: "100%",
        top: "2.5px",
        left: "-12px",
        borderRadius: "6.90px",
    },
    titleLeft: {
        color: theme.palette.text.title,
        padding: "8px",
        paddingRight: "0",
        fontFamily: "inherit",
        fontWeight: "bold",
    },
    titleRight: {
        color: theme.palette.text.title,
        padding: "8px",
        paddingLeft: "0",
        fontFamily: "inherit",
        fontWeight: "bold",
    },
    paragraph: {
        fontFamily: "inherit",
    },
    body: {
        backgroundColor: theme.palette.background.default,
        maxWidth: "100vw",
        position: "relative",
        overflow: "hidden",
        top: "100%",
    },
    leftBox: {
        textAlign: "right",
    },
    shape: {
        position: "absolute",
        height: "auto",
        minWidth: "500px",
    },
    torus: {
        top: "10%",
        left:"-33%",
        width: "60%",
    },
    twisty: {
        top: "-17%",
        right: "-27%",
        width: "60%"
    },
    sheets: {
        top: "60%",
        left: "-30%",
        width: "60%",
    },
    hole: {
        top: "35%",
        right: "-25%",
        width: "60%",
    },
    ball: {
        top: "85%",
        right: "-30%",
        width: "60%",
    },
    blurBox: {
        position: "absolute",
        top: "0",
        left: "0",
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.069420)",
        zIndex: "1",
        borderRadius: "8px",
        backdropFilter: "blur(4.20px)",
        filter: "blur(0.69px)"
    },
});

const Page = ({ classes, rootClassName, className, ...props }) => {
    return (
        <div className={cn(classes.root, rootClassName, className)}>
            <Header position="sticky" />

            <Container className={cn(classes.splash)}>
                <Box className={cn(classes.splashTextBox)}>
                    <Box className={cn(classes.blurBox)}></Box>
                    <Typography className={cn(classes.splashText)}>
                        EGADS: At least we're not ACM.
                    </Typography>
                </Box>
            </Container>

            <Container className={cn(classes.body)}>
                <Box className={cn(classes.box0)}>
                    <Box className={cn(classes.blurBox)}></Box>
                    <Box className={cn(classes.box1,classes.leftBox)}>
                        <Typography variant="h4" className={cn(classes.titleLeft)}>
                            ABOUT US
                        </Typography>
                        <Typography className={cn(classes.paragraph)}>
                            Love video games? Curious as to how they get made?
                            Then EGaDS is the club for you! We are a group of
                            interdisciplinary game development lovers; we want
                            to give you a peek behind the curtain as to how they
                            are created, and give you the skills and confidence
                            to begin creating your own.
                        </Typography>
                    </Box>
                    <Box className={cn(classes.box1)}>
                        <Box className={cn(classes.bestBoyeBox)}>
                            <img
                                src={gameJam1}
                                alt="a very good boye"
                                className={cn(classes.bestBoye)}
                            />
                            <div className={cn(classes.bestBoyeBorderRight)}></div>
                        </Box>
                    </Box>
                </Box>

                <Box className={cn(classes.box0)}>
                    <Box className={cn(classes.blurBox)}></Box>
                    <Box className={cn(classes.box1)}>
                        <Box className={cn(classes.bestBoyeBox)}>
                            <img
                                src={gameJam2}
                                alt="a very good boye"
                                className={cn(classes.bestBoye)}
                            />
                            <div className={cn(classes.bestBoyeBorderLeft)}> </div>
                        </Box>
                    </Box>
                    <Box className={cn(classes.box1)}>
                        <Typography variant="h4" className={cn(classes.titleRight)}>
                            WEEKLY MEETINGS
                        </Typography>
                        <Typography className={cn(classes.paragraph)}>
                            Tune in each week as numerous gaming professionals
                            stop by the GDC to share their stories of how they
                            made it, and the advice they have for those who are
                            looking to enter into the gaming industry. On top of
                            giving career advice, members are also exposed to
                            various topics concerning the industry. Great
                            chances to learn about diverse aspects of the game
                            development world!
                            <br />
                        </Typography>
                    </Box>
                </Box>

                <Box className={cn(classes.box0)}>
                    <Box className={cn(classes.blurBox)}></Box>
                    <Box className={cn(classes.box1,classes.leftBox)}>
                        <Typography variant="h4" className={cn(classes.titleLeft)}>
                            WORKSHOPS
                        </Typography>
                        <Typography className={cn(classes.paragraph)}>
                            Led by EGaDS officers, students will get hands-on
                            experience in vital tools to game development such
                            as Unreal Blueprints, C# scripting for Unity, and
                            Blender. Designed for beginners in mind (and
                            intermediate users), members will walk away being
                            confident in starting their own projects!
                            <br />
                        </Typography>
                    </Box>
                    <Box className={cn(classes.box1)}>
                        <Box className={cn(classes.bestBoyeBox)}>
                            <img
                                src={gameJam3}
                                alt="a very good boye"
                                className={cn(classes.bestBoye)}
                            />
                            <div className={cn(classes.bestBoyeBorderRight)}></div>
                        </Box>
                    </Box>
                </Box>

                <Box className={cn(classes.box0)}>
                    <Box className={cn(classes.blurBox)}></Box>
                    <Box className={cn(classes.box1)}>
                            <Box className={cn(classes.bestBoyeBox)}>
                                <img
                                    src={tetris}
                                    alt="a very good boye"
                                    className={cn(classes.bestBoye)}
                                />
                                <div className={cn(classes.bestBoyeBorderLeft)}></div>
                            </Box>
                        </Box>
                    <Box className={cn(classes.box1)}>
                        <Typography variant="h4" className={cn(classes.titleRight)}>
                            GAME JAMS
                        </Typography>
                        <Typography className={cn(classes.paragraph)}>
                            Throughout the academic year, EGaDs hosts game jams
                            such as the Global Game Jam and the UT Game Jame
                            where members have the chance to collaborate with
                            their fellow peers and friends to design a game. A
                            fun opportunity to test your skills and gain
                            experience!
                            <br />
                        </Typography>
                    </Box>
                </Box>

                <Box className={cn(classes.box0)}>
                    <Box className={cn(classes.blurBox)}></Box>
                    <Box className={cn(classes.box1,classes.leftBox)}>
                        <Typography variant="h4" className={cn(classes.titleLeft)}>
                            SOCIAL EVENTS
                        </Typography>
                        <Typography className={cn(classes.paragraph)}>
                            Members will have the opportunity to attend socials
                            to meet fellow developers. Professionals such as
                            artists, designers, programmers where you will have
                            the chance to learn about various companies around
                            Austin and the gaming culture here, in addition to
                            networking!
                        </Typography>
                    </Box>
                    <Box className={cn(classes.box1)}>
                        <Box className={cn(classes.bestBoyeBox)}>
                            <img
                                src={whale}
                                alt="a very good boye"
                                className={cn(classes.bestBoye)}
                            />
                            <div className={cn(classes.bestBoyeBorderRight)}></div>
                        </Box>
                    </Box>
                </Box>

                <img
                src={torus}
                alt="torus"
                className={cn(classes.shape,classes.torus)}
                />
                <img
                src={twisty}
                alt="twisty"
                className={cn(classes.shape,classes.twisty)}
                />
                <img
                src={sheets}
                alt="sheets"
                className={cn(classes.shape,classes.sheets)}
                />
                <img
                src={hole}
                alt="hole"
                className={cn(classes.shape,classes.hole)}
                />
                <img
                src={ball}
                alt="ball"
                className={cn(classes.shape,classes.ball)}
                />
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
