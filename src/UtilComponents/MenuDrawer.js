import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {
    Link as RouterLink,
} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {theme} from "../Theme";

const useStyles = makeStyles({
   root:{
        width: "0px",
       background: theme.drawerBackground,
       fontFamily: theme.drawerFontFamily,
       color: theme.drawerTextColor,
   },

    list: {
        width: "350px",
        backgroundColor: theme.paperBackground,
        height:"100%",
    },

    itemHolder:{
       backgroundColor: theme.paperBackground,
        fontFamily: theme.drawerFontFamily,
        color: theme.drawerTextColor,

    },

    listItem:{
        fontFamily: theme.drawerFontFamily,
        color: theme.drawerTextColor,
        textAlign: "center",
        fontSize: "170%",
    },
});

export default function MenuDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}

        >
                <List>
                    {['Home','Blog', 'Projects', 'About', 'Photography', 'Articles', 'Drawings'].map((text, index) => (
                        <ListItem button key={text} component={RouterLink} to={text.toLowerCase()} className={classes.itemHolder}>
                            <ListItemText primary={text} className={classes.listItem} disableTypography={true}/>
                        </ListItem>
                    ))}
                </List>

        </div>
    );

    return (
        <div className={classes.root}>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <IconButton color="inherit" aria-label="menu" edge={"start"} size={"medium"} disableFocusRipple={true}>
                        <MenuIcon onClick={toggleDrawer(anchor, true)}/>
                    </IconButton>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                    {/*<Routes/>*/}
                </React.Fragment>
            ))}
        </div>
    );
}
