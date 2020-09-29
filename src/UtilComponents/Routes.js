import {Route, Switch, useParams} from "react-router-dom";
import Home from "../Home/Home";
import Blog from "../Blog/Blog";
import Projects from "../Projects/Projects";
import About from "../About/About";
import React from "react";
import Articles from "../Art/Articles/Articles";
import Login from "../Admin/Login";
import Writer from "./Writer";
import BlogSection from "../Blog/BlogSection";
import ArticleSection from "../Art/Articles/ArticleSection";
import {siteApiUrls, StatusTypes} from "../Api";
import Admin from "../Admin/Admin";

/**
 * Route component does all the routing for the single page application.
 */
class Routes extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            // Used to check if the users logged in
            loginPermission: false,

            // Used in the timer to check the users token
            checkLoginTime: 500,
        };
    }

    /**
     * getTokenAuth sends a post request to the server getting a status code
     * @returns {Promise<void>}
     */
    async getTokenAuth(){
        let username = sessionStorage.getItem("username");
        let token = sessionStorage.getItem("token");
        if(username === null || token === null){
            return;
        }

        const options = {
            method: 'POST',
            body: JSON.stringify(
                {
                    username: username,
                    token: token,
                }),
            headers: {
                'Content-Type': 'application/json'
            },
        }

        await fetch(siteApiUrls.tokenAuth, options)
            .then(res => res.json())
            .catch(err => console.log(err))
            .then(res => {
                if (res === StatusTypes.OK) {
                    this.setState({loginPermission: true})
                    this.setState({checkLoginTime: 60000})
                } else {
                    this.setState({loginPermission: false})
                }
                return res;
            })
    }

    /**
     * This function will constantly check if the user can token auth
      */
    checkTokenAuth(){
        setTimeout(() => {
            this.getTokenAuth().then();
            this.checkTokenAuth();
        }, this.state.checkLoginTime)
    }

    componentDidMount() {
        // Starts the recursive checkTokenAuth fuction once the component mounts
        this.checkTokenAuth();
    }

    render() {
    return (
        <Switch>
            {/*Basic routes*/}
            <Route path={"/blog"}><Blog/></Route>
            <Route path={"/projects"}><Projects/></Route>
            <Route path={"/about"}><About/></Route>
            <Route path={"/logout"}><Logout/></Route>

            {/* blogWriter is used to write blog posts */}
            <PrivateRoute path={"/blogWriter"}
                          component={<Writer url={siteApiUrls.addPost} component={BlogSection}/>}
                          loginPermission={this.state.loginPermission}
            />

            {/* articleWriter is used to write articles */}
            <PrivateRoute path={"/articleWriter"}
                          component={<Writer url={siteApiUrls.addArticle} component={ArticleSection}/>}
                          loginPermission={this.state.loginPermission}
            />

            {/* updateArticle is used to update articles */}
            <PrivateRoute path={"/updateArticle/:id"}
                          component={
                              <InjectDataToWriter
                                  getData={siteApiUrls.getArticle}
                                  url={siteApiUrls.updateArticle}
                              />}
                          loginPermission={this.state.loginPermission}
            />

            <PrivateRoute path={"/updateBlog/:id"}
                          component={
                              <InjectDataToWriter
                                  getData={siteApiUrls.getPost}
                                  url={siteApiUrls.updateBlog}
                              />}
                          loginPermission={this.state.loginPermission}
            />

            <PrivateRoute path={"/admin"}
                          component={
                              <Admin/>
                          }
                          loginPermission={this.state.loginPermission}
            />

            <Route path={"/articles"}><Articles/></Route>
            <Route path={"/login"}><Login/></Route>
            <Route path={"/"}><Home/></Route>
        </Switch>
    );
}
}

/**
 * PrivateRoute components won't let unauthorized users access the components provided
 */
function PrivateRoute(props) {
    if (props.loginPermission) {
        return (
            <Route path={props.path}>{props.component}</Route>
        )
    } else {
        return (
            <Login/>
        )
    }
}


/**
 * Logout clears the users sessionStorage which removes their token and returns them to the home page
 * @returns {JSX.Element}
 * @constructor
 */
function Logout(){
    sessionStorage.clear();
    return(
        <Home/>
    )
}


/**
 * InjectDataToWriter component opens a writer with a certain urls
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function InjectDataToWriter(props){
    let { id } = useParams();
    return(
        <Writer
            getData={props.getData + id}
            url={props.url + id}
            component={ArticleSection}
        />
    )
}

export default Routes;

