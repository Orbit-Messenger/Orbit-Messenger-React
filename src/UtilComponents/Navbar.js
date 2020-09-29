import React from 'react';
import 'fontsource-press-start-2p';
import AppBar from '@material-ui/core/AppBar';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import {
    BrowserRouter as Router,
    Link as RouterLink,
} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {withStyles} from "@material-ui/core/styles";
import Routes from "./Routes";
import {theme} from "../Theme.js";
import MenuDrawer from "./MenuDrawer";

const useStyles = makeStyles(() => ({
    root: {
    },

    navBar: {
        backgroundColor: theme.navBarBackground,
        color: theme.defaultTextColor,
    },

    button:{
        fontFamily: theme.titleFontFamily,
        color: theme.defaultLightTextColor,
    },

    artMenu:{
        textAlign: "center",
        "& div": {
            background: theme.navBarBackground,
            textAlign: "center",
        },
    },

    homeButton: {
        background: "url('./res/img/onebadbyte.png') center center no-repeat",
        width: "100%",
        height: "60px"
    },

}));

const StyledButton = withStyles({
    root:{
        fontFamily: theme.titleFontFamily,
        color: theme.defaultLightTextColor,
        fontSize: theme.titleFontSize,
        border: "none",
        "&:hover": {
            background: theme.buttonHoverBackground,
        }
    },
})(Button);

const StyledButtonGroup = withStyles({
    root:{
        backgroundColor: theme.buttonBackground,
    }
})(ButtonGroup);



export default function Navbar() {
    const classes = useStyles();
    return (
                <Grid container className={classes.root}>
                        <Router>
                                <AppBar position="sticky" className={classes.navBar}>
                                    <Toolbar>
                                        <Grid item xl={1} lg={1} md={1} sm={1} xs={2}>
                                            <MenuDrawer/>
                                        </Grid>

                                        {/*Home button*/}
                                        <Grid item xl={2} lg={2} md={3} sm={4} xs={10}>
                                            <Button color={"inherit"} component={RouterLink}
                                                    to={"/"} variant={"text"} className={classes.homeButton}>
                                            </Button>
                                        </Grid>
                                        <Hidden only={"xs"}>
                                            {/*Spacing between buttons*/}
                                            <Grid item xl={5} lg={5} md={3} sm={0}/>

                                            {/*Button groups*/}
                                            <Grid item xl={4} lg={4} md={5} sm={7}>
                                                <StyledButtonGroup size={"large"}  variant={"outlined"} fullWidth={true}>
                                                    <StyledButton fullWidth={true} component={RouterLink} to={"/about"}>About</StyledButton>
                                                    <StyledButton fullWidth={true} component={RouterLink} to={"/login"}>Login</StyledButton>
                                                </StyledButtonGroup>
                                            </Grid>
                                        </Hidden>
                                    </Toolbar>
                            </AppBar>
                            <Routes/>
                        </Router>
                </Grid>

    );
}
