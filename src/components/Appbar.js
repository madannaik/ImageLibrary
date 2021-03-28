import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Avatar} from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <AppBar position="static"  style={{background:'#1a1a2e'}}>

                <Toolbar>
                    <Avatar  className={classes.large} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/NASA_Wormball_logo.svg/1024px-NASA_Wormball_logo.svg.png"} style={{objectFit:'fit'}}/> >
                    {/*    <img src="http://www.simpleimageresizer.com/_uploads/photos/357d9c28/nasa_1_150x100.jpg"  alt={"logo"}/>*/}
                    {/*</Avatar>*/}
                    <Typography variant="h5" style={{fontFamily:'cursive',alignContent:"center"}}  className={classes.title}>
                        Nasa Image Gallery
                    </Typography>
                    <Button  variant="outlined" size="small" color={'inherit'} className={classes.margin}>Image Gallery</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
