import React from "react";
import {theme} from "../Theme";
import {withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import AdminUpdateArticle from "./AdminUpdateArticle";
import Hidden from "@material-ui/core/Hidden";
import AdminUpdateBlog from "./AdminUpdateBlog";

/**
 * Author Brody Prestwich
 */

/**
 * AdminLogic contains all the logic for the Admin component
 */
export class AdminLogic {
}

const interfaces = {
    GRID: 1,
    UPDATE_ARTICLE: 2,
    UPDATE_BLOG: 3
}

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {interface: interfaces.GRID}
    }


    render() {
        const {classes} = this.props;
        switch (this.state.interface){

            case interfaces.UPDATE_ARTICLE:
                return (
                    <AdminUpdateArticle/>
                );
            case interfaces.UPDATE_BLOG:
                return (
                    <AdminUpdateBlog/>
                );
            default:
                return (
                    <Grid container className={classes.root} justify={"center"}>
                        <Grid item xl={11} lg={11} md={11} sm={12} xs={12} alignItems={"center"}>
                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                <h1 className={classes.title}>Welcome to the Admin Console {sessionStorage.getItem("username")}!</h1>
                                <br/>
                            </Grid>
                            <Hidden only={"xs"}>
                            <GridList cellHeight={"250"} cols={3} className={classes.subRoot} spacing={12}>
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
                        </Hidden>
                            <Hidden only={["xl", "lg", "md", "sm"]}>
                                <GridList cellHeight={"250"} cols={1} className={classes.subRoot} spacing={12}>
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
                                        <img src={"./res/img/updateBlog.png"} alt={"blog writer"} onClick={() => window.location.href="/"}/>
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

                            </Hidden>

                        </Grid>
                    </Grid>
                );
        }
    }
}

/**
 * useStyles is used as the object for the css in the Admin component
 */
const useStyles = () => ({
    root: {
        background: theme.background,
        minHeight: theme.defaultHeight,
        width: "100%",
        paddingBottom: "5%",
    },

    title: {
        color: theme.defaultLightTextColor,
        fontFamily: theme.titleFontFamily,
        textAlign: "center"
    },

    button: {
        backgroundColor: theme.buttonBackground,

    },

    img: {
        // borderRadius: "8%",
        // borderStyle: "solid",
        // borderColor: theme.header2TextColor,
    },
});


export default withStyles(useStyles)(Admin);
