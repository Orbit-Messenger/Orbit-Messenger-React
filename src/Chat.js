import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import 'fontsource-roboto'
import './css/Chat.css';



const useStyles = makeStyles({
    chatPageWrapper: {
        position: "relative",
        margin: "auto",
        marginTop: "85px",
        marginBottom: ":px",
    },
})

export default function Home() {
    const classes = useStyles()

    return (
        <div className={`${classes.chatPageWrapper} chatPageWrapper`}>
            Chat!
        </div>
    )
}
