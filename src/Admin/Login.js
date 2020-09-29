import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React from "react";
import TextField from "@material-ui/core/TextField";
import {theme} from "../Theme";
import {withStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {ApiUtils, siteApiUrls} from "../Api";
import StatusBar from "../UtilComponents/StatusBar";
import {StatusTypes} from "../Api";

/**
 * Author Brody Prestwich
 */

/**
 * LoginLogic contains all the logic for the Login component
 */
export class LoginLogic {
    /**
     * returns the usename and password from the textboxs on the login page
     * @returns {*[String, String]}
     */
    static getUsernameAndPassword() {
        let username = document.getElementById("usernameInput").value;
        let password = document.getElementById("passwordInput").value;
        return [username, password];
    }

    static setLoginSessionStorage(username, token) {
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("token", token);
    }

    static async sendRequest(username, password) {
        return await ApiUtils.sendPostRequest(siteApiUrls.login, {
            "username": username,
            "password": password
        })
    }

    static checkLoginStatus(data) {
        if (data.status === 200) {
            return StatusTypes.OK;
        } else if (data.status === 403) {
            return StatusTypes.FORBIDDEN;
        } else {
            return StatusTypes.SERVER_ERROR
        }
    }
}


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {status: "", statusWarning: false}
    }

    onSubmit() {
        const loginInfo = LoginLogic.getUsernameAndPassword();
        LoginLogic.sendRequest(loginInfo[0], loginInfo[1])
            .then(request => {
                const status = LoginLogic.checkLoginStatus(request);
                if (status === StatusTypes.OK) {
                    this.setState({status: "User successfully logged in!", statusWarning: false})
                    LoginLogic.setLoginSessionStorage(loginInfo[0], request.token)
                    if (window.location === siteApiUrls.loginBase) {
                        window.location = "/admin";
                    }
                } else if (status === StatusTypes.FORBIDDEN) {
                    this.setState({status: `Username or password incorrect`, statusWarning: true})
                } else {
                    this.setState({status: `Internal Server Error ${request.status}`, statusWarning: true})
                }
            });
        window.scrollTo(0, 0);
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.onSubmit();
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <Grid container justify={"center"} className={classes.root}>
                <Grid item xl={8} lg={8} md={10} sm={10} xs={10} className={classes.subroot}>
                    <br/>
                    <br/>
                    <StatusBar text={this.state.status} warning={this.state.statusWarning}/>
                    <Paper elevation={3} className={classes.paper}>
                        <h1 className={classes.title}>Login</h1>
                        <TextField id={"usernameInput"} data-testid={"usernameInput"}
                                   label={"Login"} variant={"filled"} className={classes.inputs} autoFocus={true}/>
                        <br/>
                        <TextField id={"passwordInput"} data-testid={"passwordInput"}
                                   type={"password"} label={"Password"} variant={"filled"} className={classes.inputs}
                                   onKeyDown={this.handleKeyPress}/>
                        <Button id={"loginButton"} variant={"contained"}
                                color={"secondary"} className={classes.buttons} onClick={() => this.onSubmit()}>Login
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

/**
 * useStyles is used as the object for the css in the Login component
 * @returns {{buttons: {marginRight: string, backgroundColor: string, fontFamily: string, width: string, marginBottom: string, fontSize: string, "&:hover": {backgroundColor: string}, marginTop: string, marginLeft: string, height: string}, paper: {backgroundColor: string, margin: string, paddingTop: string}, inputs: {marginRight: string, backgroundColor: string, width: string, marginTop: string, marginLeft: string}, root: {minHeight: string, background: string, backgroundSize: string}, title: {fontFamily: string, color: string, textAlign: string, paddingTop: string}}}
 */
const useStyles = () => ({
    root: {
        background: theme.background,
        backgroundSize: theme.backgroundSize,
        minHeight: theme.defaultHeight,
    },

    title: {
        fontFamily: theme.titleFontFamily,
        textAlign: "center",
        paddingTop: "2%",
        color: theme.defaultLightTextColor,

    },

    paper: {
        backgroundColor: theme.navBarBackground,
        margin: "0px",
        paddingTop: "0px"
    },

    inputs: {
        backgroundColor: "white",
        marginLeft: "5%",
        marginRight: "5%",
        marginTop: "1%",
        width: "90%",
    },

    buttons: {
        backgroundColor: theme.buttonSecondaryBackground,
        marginTop: "1%",
        marginLeft: "5%",
        marginRight: "5%",
        marginBottom: "5%",
        width: "90%",
        height: "60px",
        fontFamily: theme.titleFontFamily,
        fontSize: "150%",
        "&:hover": {
            backgroundColor: theme.buttonHoverBackground,
        }
    },
});


export default withStyles(useStyles)(Login);

