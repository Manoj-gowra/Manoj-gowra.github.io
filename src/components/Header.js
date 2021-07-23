import { Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import image from '../images/manoj_g.jpeg'

const useStyles = makeStyles((theme) => ({

    large: {
        width: theme.spacing(12),
        height: theme.spacing(12),
    },
}));
const Header = () => {
    const classes = useStyles()
    return (
        <div >
            <center id="image" ><Avatar src={image} alt={image} className={classes.large} /></center>
            <h1 className="ui header">
                Manoj Gowra
            </h1>
        </div >
    )
}

export default Header



