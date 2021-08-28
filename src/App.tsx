import React from 'react';
import {
    AppBar,
    Button,
    CssBaseline,
    Divider,
    Hidden,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
    useTheme,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles } from '@material-ui/core/styles';

import { MainTree } from './components/Tree/Tree';
import { MenuTopBar } from './components/Material/MenuTopBar';
import { Drawer } from './components/Material/Drawer';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
}));

const App: React.FC = () => {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <MenuTopBar setMobileButton={setMobileOpen} />
            {/*<AppBar position="fixed" className={classes.appBar}>*/}
            {/*    <Toolbar>*/}
            {/*        <IconButton color="inherit" aria-label="open drawer" edge="start">*/}
            {/*            <MenuIcon*/}
            {/*                onClick={() => {*/}
            {/*                    setMobileOpen(true);*/}
            {/*                }}*/}
            {/*            />*/}
            {/*        </IconButton>*/}
            {/*        <Typography variant="h6" noWrap>*/}
            {/*            Clipped drawer*/}
            {/*        </Typography>*/}
            {/*    </Toolbar>*/}
            {/*</AppBar>*/}
            <Drawer opened={mobileOpen} setOpened={setMobileOpen} />
            <MainTree />
        </div>
    );
};

export default App;
