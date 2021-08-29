import React from 'react';
import { CssBaseline, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { MenuTopBar } from './MenuTopBar';
import { Drawer } from './Drawer';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export const PageWrapper: React.FC = ({ children }) => {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    return (
        <div className={classes.root}>
            <CssBaseline />

            <MenuTopBar setMobileButton={setMobileOpen} />
            <Drawer opened={mobileOpen} setOpened={setMobileOpen} />

            <div className={classes.content}>
                <Toolbar />
                {children}
            </div>
        </div>
    );
};
