import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {theme} from "../Theme";
import CustomMarkdown from "./CustomMarkdown";

const useStyles = makeStyles({
    root: {
        width: "100%",
        minHeight: "400px",
        backgroundColor: theme.customCardBackground,
        margin:"0px",
        // marginTop: "3%"
    },

    titleImg: {
        color: theme.titleTextColor,
        fontFamily: theme.titleFontFamily,
        height: "160px",
        width: "100%",
    },

    text:{
       color: theme.defaultTextColor,
    }
});

export default function CustomCard(props) {
    const classes = useStyles();

    function onButtonClick(url){
        if(url === undefined){
            return;
        }
       window.location = url;
    }

    return (
        <Card className={classes.root} onClick={() => onButtonClick(props.url)}>
            <CardActionArea>
                <CardMedia
                    className={classes.titleImg}
                    image={props.img}
                />
                <CardContent>
                    <CustomMarkdown text={props.text} align={"center"}/>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
