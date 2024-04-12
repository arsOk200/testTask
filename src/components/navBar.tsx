import React from 'react';
import {AppBar, Grid, Toolbar, Typography} from "@mui/material";

const NavBar = () => {
    return (
            <AppBar position="static" sx={{ bgcolor: 'black', boxShadow: '0px 0px 0px' }}>
                <Toolbar>
                    <Grid container sx={{ alignItems: 'center' }}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, alignItems: 'center' }}>
                           ONLINE SHOP
                        </Typography>
                    </Grid>
                </Toolbar>
            </AppBar>
    );
};

export default NavBar;