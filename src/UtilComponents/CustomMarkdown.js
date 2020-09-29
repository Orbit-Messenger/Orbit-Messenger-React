import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {theme} from "../Theme";
import Markdown from "markdown-to-jsx";

const useStyles = makeStyles({
    root:{
        textAlign: "left",
        marginLeft: "3%",
        marginRight: "3%",
        color: theme.defaultLightTextColor,
        "& h1": {
            textAlign: "center",
            color: theme.headerTextColor,
            fontFamily: theme.headerFontFamily,
            fontSize: "240%",
        },
        "& h2": {
            textAlign: "center",
            color: theme.header2TextColor,
            fontFamily: theme.headerFontFamily,
            fontSize: "200%",
        },

        "& h3": {
            textAlign: "left",
            color: theme.defaultLightTextColor,
            fontFamily: theme.defaultTextFontFamily,
            fontSize: "110%",
        },

        "& h4": {
            textAlign: "center",
            color: theme.defaultTextColor,
            fontFamily: theme.defaultTextFontFamily,
            fontSize: "110%",
        },

        "& h5": {
            textAlign: "center",
            color: theme.defaultTextColor,
            fontFamily: theme.defaultTextFontFamily,
            fontStyle: "normal",
            fontSize: "90%",
        },

        "& li": {
            textAlign: "left",
            color: theme.defaultLightTextColor,
            fontFamily: theme.defaultTextFontFamily,
            fontSize: "100%",
        },

        "& p": {
            fontFamily: theme.defaultTextFontFamily,
            fontSize: "100%",
            paddingBottom: "1%",
            color: theme.defaultLightTextColor,
        },

        '& img': {
            borderRadius: "8px",
            maxWidth: "100%",
            height: 'auto'
        },

        '& a': {
            color: theme.headerTextColor
        },

        img: {
            borderRadius: "8px",
            maxWidth: "100%",
            height: 'auto'
        },
    },

    centered:{
        textAlign: "center",
        marginLeft: "3%",
        marginRight: "3%",
        // marginBottom: "3%",
        "& h1": {
            textAlign: "center",
            // color: theme.headerTextColor,
            color: theme.header2TextColor,
            fontFamily: theme.headerFontFamily,
            fontSize: "240%",
        },
        "& h2": {
            textAlign: "center",
            color: theme.headerTextColor,
            fontFamily: theme.headerFontFamily,
            fontSize: "200%",
        },

        "& h3": {
            textAlign: "center",
            color: theme.header2TextColor,
            fontFamily: theme.defaultTextFontFamily,
            fontStyle: "bold",
            fontSize: "110%",
            margin: "0px",
            padding: "0px",
        },

        "& h4": {
            textAlign: "center",
            color: theme.defaultLightTextColor,
            fontFamily: theme.defaultTextFontFamily,
            fontSize: "110%",
            margin: "0px",
            padding: "0px",
        },

        "& h5": {
            textAlign: "center",
            color: theme.defaultTextColor,
            fontFamily: theme.defaultTextFontFamily,
            fontStyle: "normal",
            fontSize: "90%",
        },

        "& li": {
            textAlign: "center",
            color: theme.defaultLightTextColor,
            fontFamily: theme.defaultTextFontFamily,
            fontSize: "100%",
            // listStyleType: "none",
        },

        "& a": {
            textAlign: "center",
            color: theme.defaultLightTextColor,
            fontFamily: theme.defaultTextFontFamily,
            fontSize: "100%",
            // listStyleType: "none",
        },


        "& p": {
            fontFamily: theme.defaultTextFontFamily,
            textAlign: "center",
            fontSize: "100%",
            paddingBottom: "1%",
            color: theme.defaultLightTextColor,
        },

        '& img': {
            borderRadius: "8px",
            maxWidth: "100%",
            height: 'auto'
        },

        img: {
            borderRadius: "8px",
            maxWidth: "100%",
            height: 'auto'
        },
    },

})

export default function CustomMarkdown(props){
    const classes = useStyles();
    switch (props.align) {
        case "center":
            return(
                <Markdown className={classes.centered}>{props.text}</Markdown>
            );
        default:
            return(
                <Markdown className={classes.root}>{props.text}</Markdown>
            );
    }
}
