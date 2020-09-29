import * as React from "react";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import {makeStyles} from "@material-ui/core/styles";
import {theme} from "../Theme";

const useStyles = makeStyles({
    root: {
        backgroundColor: theme.footerBackground,
        color: theme.defaultTextColor,
        height: "60px",
        position: "absolute",
        width: "100%",
    },
});

export default function Footer() {
    const classes = useStyles();
    const [value, setValue] = React.useState();

    const handleChange = (event, newValue) => {
        setValue(newValue);
        switch (newValue) {
            case "github":
                window.open("https://www.github.com/blackdartq");
                break;
            case "linkedin":
                window.open("https://www.linkedin.com/in/brody-prestwich/");
                break;
            case "email":
                window.open("mailto:brody.prestwich18@gmail.com");
                break;
            default:
                break;

        }
    };
   return(
       <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
           <BottomNavigationAction label="Github" value="github" icon={<GitHubIcon fontSize={"large"} style={{color: theme.iconColor}} />} />
           <BottomNavigationAction label="Linkedin" value="linkedin" icon={<LinkedInIcon fontSize={"large"} style={{color: theme.iconColor}} />} />
           <BottomNavigationAction label="Email" value="email" icon={<MailOutlineIcon fontSize={"large"} style={{color: theme.iconColor}} />} />
       </BottomNavigation>
   );
}

