import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Divider,
    Hidden,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Drawer as MaterialDrawer,
} from '@material-ui/core';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import { Link } from 'react-router-dom';

const DrawerContainer: React.FC = () => (
    <div>
        <div />
        <Divider />
        <List>
            {['Сотрудники'].map((text, index) => (
                <ListItem button key={text} component={Link} to="/tree">
                    <ListItemIcon>
                        <AccountTreeIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            {['Новые задачи'].map((text, index) => (
                <ListItem button key={text} component={Link} to="/backlog">
                    <ListItemIcon>
                        <FormatListBulletedIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
    </div>
);

const drawerWidth = 240;
const useStyles = makeStyles({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
});

export interface DrawerProps {
    opened: boolean;
    setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Drawer: React.FC<DrawerProps> = ({ opened, setOpened }) => {
    const classes = useStyles();

    return (
        <>
            <Hidden smUp implementation="css">
                <MaterialDrawer
                    className={classes.drawer}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="temporary"
                    open={opened}
                    onClose={() => {
                        setOpened(false);
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    <DrawerContainer />
                </MaterialDrawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <MaterialDrawer
                    className={classes.drawer}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    <Toolbar />
                    <DrawerContainer />
                </MaterialDrawer>
            </Hidden>
        </>
    );
};
