import React from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import {theme} from "../Theme";
import "fontsource-press-start-2p";
import CustomDivider from "../UtilComponents/CustomDivider";

/**
 * Home is the home page component to the onebadbyte website
 * @returns {JSX.Element}
 * @constructor
 */
function Home() {
    const classes = useStyles();
    return(
        <Grid container justify={"center"} className={classes.root} spacing={0}>
            {/* Title bar */}
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Paper elevation={3} className={classes.titleBar}>
                    <Avatar alt={"avatar image"} src={"./res/img/profilePic.jpg"} className={classes.avatarImg}/>
                    <CustomDivider/>
                </Paper>
            </Grid>
    </Grid>
    );
}

/**
 * Css for the Home component
 * @type {(props?: any) => ClassNameMap<"titleBarText"|"titleBar"|"homeImg"|"titleBarTitle"|"root"|"avatarImg"|"experienceBar"|"articleBar"|"blogBar">}
 */
const useStyles = makeStyles((() => ({
    root:{
        background: "#000000",
        backgroundSize: theme.backgroundSize,
        color: theme.defaultTextColor,
        textAlign: "center",
        margin: "0px",
        minHeight: theme.backgroundSize,
    },

    titleBar:{
        textAlign: "center",
        background: theme.mainPaperBackground,
        backgroundSize: "2000px 500px",
        backgroundAttachment: "fixed",
        backgroundPosition: "100% 0px",
        color: theme.titleTextColor,
        fontFamily: theme.titleFontFamily,
        paddingTop: "1%",
        // paddingBottom: "1%",
    },

    titleBarTitle:{
        color: theme.titleTextColor,
        fontFamily: theme.titleFontFamily,
        margin: "0px",
        fontSize: "200%"
    },

    titleBarText:{
        color: theme.defaultLightTextColor,
        fontFamily: theme.defaultTextFontFamily,
        fontStyle: "bold",
        fontSize: "100%",
        marginTop: "0.5%",
        marginBottom: "0.5%",
    },

    avatarImg:{
        width: "250px",
        height: "250px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "10px",
        borderStyle: "solid",
        borderWidth: "4px",
        borderColor: theme.imgBorderColor,
    },

    experienceBar: {
        margin:"0px",
    },

    blogBar: {
        background: theme.mainPaperBackground,
        backgroundSize: "2000px 500px",
        backgroundAttachment: "fixed",
        backgroundPosition: "100% 0px",
        margin:"0px",
        padding: "0px"

    },

    articleBar: {
        background: theme.mainPaperBackground,
        backgroundSize: "2000px 500px",
        backgroundAttachment: "fixed",
        backgroundPosition: "100% 0px",
        margin:"0px",
        padding: "0px"

    },

    homeImg: {
        width: "100%",
        height: "auto",
    },

})));


export default Home;
