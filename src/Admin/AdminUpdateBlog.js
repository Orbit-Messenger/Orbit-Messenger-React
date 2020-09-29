import React from "react";
import {theme} from "../Theme";
import {withStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import {ApiUtils, siteApiUrls} from "../Api";

/**
 * Author Brody Prestwich
 */

/**
 * AdminUpdateBlogLogic contains all the logic for the AdminUpdateBlog component
 */
export class AdminUpdateBlogLogic {
}

class AdminUpdateBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []}
    }

    componentDidMount() {
        ApiUtils.sendGetRequest(siteApiUrls.getBlogTitles).then((res) => {
                console.log(res);
                this.setState({data: res});
            }
        );
        window.scrollTo(0,0);
    }

    render() {
        const {classes} = this.props;
        return (
            <Grid container justify={"center"} className={classes.root}>
                <Grid item xl={11} lg={11} md={11} sm={12} xs={12} alignItems={"center"} id={"updateBlogGrid"}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <h1 className={classes.title}>Blog Update/Delete</h1>
                        <br/>
                    </Grid>
                    <List className={classes.listItem}>
                        {this.state.data.map((data) => {
                            return (
                                <ListItem dense button>
                                    <ListItemText
                                        primary={`${data.title}`}
                                        disableTypography={true}
                                    />
                                    <Button
                                        onClick={() => window.location.href = `/updateBlog/${data.id}`}
                                        className={classes.button}>Update</Button>
                                    <Button
                                        onClick={() => window.location.href = `/deleteBlog/${data.id}`}
                                        className={classes.button}>Delete</Button>
                                </ListItem>
                            )
                        })}
                    </List>
                </Grid>
            </Grid>
        );
    }
}

/**
 * useStyles is used as the object for the css in the AdminUpdateBlog component
 */
const useStyles = () => ({
    root: {
        background: theme.defaultTextColor,
        minHeight: theme.defaultHeight,
    },

    title: {
        color: theme.header2TextColor,
        fontFamily: theme.titleFontFamily,
        textAlign: "center",
        fontSize: "100%",
        paddingTop: "2%",
        marginTop: "2%",
        marginBottom: "2%",
    },

    listItem:{
        background: theme.buttonBackground,
        color: theme.defaultLightTextColor,
    },

    button: {
        background: theme.buttonBackground,
        color: theme.defaultLightTextColor,
        "&:hover": {
            backgroundColor: theme.buttonHoverBackground,
        }
    },

});


export default withStyles(useStyles)(AdminUpdateBlog);
