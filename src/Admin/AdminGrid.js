import Grid from "@material-ui/core/Grid";
import React from "react";
import {theme} from "../Theme";
import {withStyles} from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import {Route, Switch, useParams} from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";

/**
 * Author Brody Prestwich
 */

/**
 * AdminLogic contains all the logic for the Admin component
 */
export class AdminLogic {
}


class AdminGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {status: "", statusWarning: false}
    }

    render() {
        const {classes} = this.props;
        return (
        <GridList cellHeight={"250"} cols={props.columns} className={classes.subRoot} spacing={12}>
            <GridListTile key={"1"} cols={1} className={classes.img}>
                <img src={"./res/img/blogWriter.png"} alt={"blog writer"} onClick={() => window.location.href="/blogWriter"}/>
            </GridListTile>
            <GridListTile key={"2"} cols={1} className={classes.img}>
                <img src={"./res/img/articleWriter.png"} alt={"article writer"} onClick={() => window.location.href="/articleWriter"}/>
            </GridListTile>
            <GridListTile key={"3"} cols={1} className={classes.img}>
                <img src={"./res/img/updateArticle.png"} alt={"update article logo"} onClick={() => this.setState({interface: interfaces.UPDATE_ARTICLE})}/>
            </GridListTile>
            <GridListTile key={"4"} cols={1} className={classes.img}>
                <img src={"./res/img/updateBlog.png"} alt={"blog writer"} onClick={() => this.setState({interface: interfaces.UPDATE_BLOG})}/>
            </GridListTile>
            <GridListTile key={"5"} cols={1} className={classes.img}>
                <img src={"./res/img/goals.png"} alt={"blog writer"} onClick={() => window.location.href="/goals"}/>
            </GridListTile>
            <GridListTile key={"6"} cols={1} className={classes.img}>
                <img src={"./res/img/health.png"} alt={"blog writer"} onClick={() => window.location.href="/health"}/>
            </GridListTile>
            <GridListTile key={"7"} cols={1} className={classes.img}>
                <img src={"./res/img/productivity.png"} alt={"blog writer"} onClick={() => window.location.href="/productivity"}/>
            </GridListTile>
            <GridListTile key={"8"} cols={1} className={classes.img}>
                <img src={"./res/img/todoList.png"} alt={"todo list logo"} onClick={() => window.location.href="/todoList"}/>
            </GridListTile>
        </GridList>
        );
    }
}

/**
 * useStyles is used as the object for the css in the Admin component
 */
const useStyles = () => ({
    root: {
        background: theme.defaultTextColor,
        minHeight: theme.defaultHeight,
        width: "100%",
        paddingBottom: "5%",
    },

    title: {
        color: theme.header2TextColor,
        fontFamily: theme.titleFontFamily,
        textAlign: "center"
    },

    img: {
        // borderRadius: "8%",
        // borderStyle: "solid",
        // borderColor: theme.header2TextColor,
    },
});


export default withStyles(useStyles)(AdminGrid);
