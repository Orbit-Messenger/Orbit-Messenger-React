import Paper from "@material-ui/core/Paper";
import * as React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {theme} from "../Theme";

const useStyles = makeStyles({
    root:{
        margin: "0px",
        padding: "0px",
        height: "auto",

    },

    paper:{
        background: theme.statusBarBackground,
        textAlign: "center",
        fontSize: "100%",
        fontFamily: theme.defaultTextFontFamily,
        color: theme.defaultLightTextColor,
        marginBottom: "1px",
        padding: "0px",
        margin: "0px"
        // height: "50px",
    },
})

export default function StatusBar(props){
    const classes = useStyles();
    let hidden = false;
    let colorScheme = theme.statusBarBackground;
    if(props.text === "" || props.text === undefined){
        hidden = true;
    }

    if(props.warning) {
        colorScheme = theme.error;
    }
    return(
        <Paper elevation={3} hidden={hidden} className={classes.paper} style={{backgroundColor: colorScheme}} id={"statusBar"}>
            <h1>{props.text}</h1>
        </Paper>
    )
}

