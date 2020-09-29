import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import 'fontsource-roboto'
import './css/Navigation.css';



const useStyles = makeStyles({
    navigationPageWrapper: {
        position: "relative",
        margin: "auto",
        marginTop: "85px",
        marginBottom: ":px",
    },
})

export default function Home() {
    const classes = useStyles()

    return (
        <div className={`${classes.navigationPageWrapper} navigationPageWrapper`}>
            Navigation!
        </div>
    )
}
