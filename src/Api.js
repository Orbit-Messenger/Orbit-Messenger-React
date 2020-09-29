
// Used for local server
// let base = "http://localhost:8080/api";
// let loginBase = "http://localhost:8080/login";

// Used for live server
let loginBase = "https://onebadbyte.com/login";
let base = "https://onebadbyte.com/api"

/**
 * Used for all the urls in every request
 * @type {{getPosts: string, addArticle: string, updateArticle: string, getArticle: string, loginBase: string, tokenAuth: string, addPost: string, getArticleTitles: string, login: string}}
 */
export const siteApiUrls = {
        loginBase: loginBase,
        addPost: base + "/addPost",
        updateBlog: base + "/updateBlog/",
        getPost: base + "/getPost/",
        getBlogTitles: base + "/getBlogTitles",
        getPosts: base + "/getPosts",
        getArticle: base + "/getArticle/",
        addArticle: base + "/addArticle",
        updateArticle: base + "/updateArticle/",
        getArticleTitles: base + "/getArticleTitles",
        login: base + "/login",
        tokenAuth: base + "/tokenAuth"
    }

/**
 * Used for checking statues' from the server
 * @type {{SERVER_ERROR: number, OK: number, FORBIDDEN: number}}
 */
export const StatusTypes = {
    OK: 200,
    FORBIDDEN: 403,
    SERVER_ERROR: 500,
};


/**
 * ApiUtils contains helper functions for all requests done on the website
 */
export class ApiUtils{

    /**
     * sendPostRequest sends a post request to the url provided with the json data provided
     */
    static async sendPostRequest(url, json){
        const options = {
            method: 'POST',
            body: JSON.stringify(json),
            headers:{
                'Content-Type': 'application/json'
            },
        }
        let response = await fetch(url, options);
        return await response.json()
    }

    static async sendGetRequest(url){
        const options = {
            method: 'GET',
            // body: JSON.stringify(json),
            headers:{
                'Content-Type': 'application/json'
            },
        }
        let response = await fetch(url, options);
        return await response.json()
    }

    /**
     * checkLoginStatus checks the status from a login request
      */
    static checkLoginStatus(status){
        if(status === 200){
            return StatusTypes.OK;
        }else if(status === 403){
            return StatusTypes.FORBIDDEN;
        }else{
            return StatusTypes.SERVER_ERROR
        }
    }
}
