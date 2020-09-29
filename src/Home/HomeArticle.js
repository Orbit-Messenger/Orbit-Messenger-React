import Paper from "@material-ui/core/Paper";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {theme} from "../Theme";
import CustomMarkdown from "../UtilComponents/CustomMarkdown";

/**
 * HomeArticle is a component used in the Home component
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function HomeArticle(props){
    const classes = useStyles();
    if(props.transparent){
        return(
            <Paper className={classes.transparentArticle}>
                <CustomMarkdown text={props.text} align={"center"}/>
            </Paper>
        )
    }
   return(
      <Paper className={classes.article}>
         <br/>
          <CustomMarkdown text={props.text} align={"center"}/>
      </Paper>
   )
}

/**
 * Css for the HomeArticle component
 * @type {(props?: any) => ClassNameMap<"articleTitle"|"transArticle"|"articleText"|"article">}
 */
const useStyles = makeStyles({

    article: {
        margin: "0px 0px 0px 0px",
        padding: "0px",
        color: theme.defaultTextColor,
        backgroundColor: theme.lightPaperBackground,
        minHeight: "300px",
    },

    transparentArticle: {
        color: theme.defaultTextColor,
        backgroundColor: "rgba(0, 0, 0, 0.55)",
        minHeight: "300px",
    },

    articleText: {
        // marginBottom: "3%",
        marginTop: "3%",
        marginLeft: "2%",
        marginRight: "2%",
    },

    articleTitle: {
        color: theme.titleTextColor,
        fontFamily: theme.titleFontFamily,
        fontSize: "100%",
        marginLeft: "2%",
        marginRight: "2%",
        // paddingTop: "3%",
    },

});

