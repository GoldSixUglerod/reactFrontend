import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { ButtonProps } from '@material-ui/core/Button/Button';
import { Button } from '@material-ui/core';
// import Axios from 'axios';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
        label: {
            textTransform: 'none',
            borderRadius: '0 0 0 0',
        },
    }),
);

export const ButtonModal: React.FC<ButtonProps & { modalContent: string }> = ({ children, modalContent, ...props }) => {
    // const [notAssignedTasks, setNotAssignedTasks] = React.useState('');
    // Axios.get('').then((response) => {
    //     setNotAssignedTasks(response.data);
    // });
    // const [currentDepartmentTasks, setCurrentDepartmentTasks] = React.useState('');
    // Axios.get('').then((response) => {
    //     setCurrentDepartmentTasks(response.data);
    // });
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Description</h2>
            <p id="simple-modal-description">{modalContent}</p>
        </div>
    );

    return (
        <>
            <Button {...props} onClick={handleOpen} className={classes.label}>
                {children}
            </Button>
            <Modal open={open} onClose={handleClose}>
                {body}
            </Modal>
        </>
    );
};
