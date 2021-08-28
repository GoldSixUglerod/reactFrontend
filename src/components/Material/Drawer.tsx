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
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';

const DrawerContainer: React.FC = () => (
    <div>
        <div />
        <Divider />
        <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
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
