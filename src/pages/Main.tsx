import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { MenuTopBar } from '../components/Material/MenuTopBar';
import { MainTree } from '../components/Tree/Tree';
import { Drawer } from '../components/Material/Drawer';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
}));

export const Main: React.FC = () => {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    return (
        <div className={classes.root}>
            <CssBaseline />

            <MenuTopBar setMobileButton={setMobileOpen} />
            <Drawer opened={mobileOpen} setOpened={setMobileOpen} />

            <MainTree />
        </div>
    );
};
