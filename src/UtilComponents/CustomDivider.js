import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {theme} from "../Theme";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
    root: {
        backgroundColor: theme.dividerColor,
    },

});

export default function CustomDivider() {
    const classes = useStyles();
    return (
        <Divider variant={'middle'} className={classes.root}/>
    );
}
