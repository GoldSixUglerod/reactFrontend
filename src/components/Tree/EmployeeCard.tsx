import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { Popover } from '@material-ui/core';
import styled from 'styled-components';
import { RawNodeDatum } from 'react-d3-tree/lib/types/common';
import Chip from '@material-ui/core/Chip';

import { ButtonModal } from '../Material/Modal';

import { NodeAttrs } from './Tree';

const CardBottomActionsStyled = styled(CardActions)`
    display: flex;
    justify-content: center;
    padding: 0;
`;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 350, // Card width
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },
        paper: {
            padding: theme.spacing(1),
        },
        upperChip: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            '& > *': {
                margin: theme.spacing(0.5),
            },
        },
        bottomChip: {
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            '& > *': {
                margin: theme.spacing(0.5),
            },
        },
        popover: {
            pointerEvents: 'none',
        },
    }),
);

interface EmployeeCardProps {
    width: number;
    height: number;
    x: number;
    y: number;
}

export const EmployeeCard: React.FC<{
    nodeData: RawNodeDatum;
    triggerNodeToggle: () => void;
    foreignObjectProps: EmployeeCardProps;
}> = ({ nodeData, triggerNodeToggle, foreignObjectProps }) => {
    const classes = useStyles();

    const attrs = nodeData.attributes as NodeAttrs;
    const {
        userId,
        avatar,
        contact,
        position,
        department,
        score,
        taskName,
        taskDescription,
        taskPriority,
        taskDeadline,
        completed,
    } = attrs;
    console.log(taskName);
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget);
    };
    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);

    return (
        <>
            <foreignObject {...foreignObjectProps}>
                <Card className={classes.root}>
                    <CardHeader
                        onClick={triggerNodeToggle}
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                {avatar}
                            </Avatar>
                        }
                        title={<b>{nodeData.name}</b>}
                        subheader={<u>{contact}</u>}
                        style={{ paddingBottom: 0 }}
                    />
                    {/* eslint-disable-next-line max-len */}
                    {/* <CardMedia className={classes.media} image="/static/images/cards/paella.jpg" title="Paella dish" />*/}
                    <CardContent onClick={triggerNodeToggle}>
                        <div className={classes.upperChip}>
                            <Chip size="small" label={position} />
                            <Chip size="small" label={department} color="primary" />
                            <Chip size="small" label={<b>{score}</b>} color="secondary" />
                        </div>
                        {taskName === null || taskName === undefined ? (
                            <Typography
                                variant="h6"
                                color="textPrimary"
                                component="p"
                                style={{ marginBottom: 8, marginTop: 8 }}
                            >
                                Новый сотрудник
                            </Typography>
                        ) : (
                            <>
                                <Typography
                                    variant="body2"
                                    color="textPrimary"
                                    component="p"
                                    style={{ marginBottom: 8, marginTop: 8 }}
                                >
                                    {taskName}
                                </Typography>
                                <div className={classes.bottomChip}>
                                    <Chip variant="outlined" size="small" label={taskPriority} color="default" />
                                    <Chip
                                        variant="outlined"
                                        size="small"
                                        label={completed ? 'Свободен' : taskDeadline}
                                        color={completed ? 'primary' : 'secondary'}
                                    />
                                    <Chip
                                        variant="outlined"
                                        size="small"
                                        label={<b>?</b>}
                                        onMouseEnter={handlePopoverOpen}
                                        onMouseLeave={handlePopoverClose}
                                    />
                                    <Popover
                                        id="mouse-over-popover"
                                        className={classes.popover}
                                        classes={{
                                            paper: classes.paper,
                                        }}
                                        open={open}
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        onClose={handlePopoverClose}
                                        disableRestoreFocus
                                    >
                                        <Typography variant="body2">Дополнительная информация</Typography>
                                    </Popover>
                                </div>
                            </>
                        )}
                    </CardContent>
                    <CardBottomActionsStyled>
                        <ButtonModal
                            fullWidth
                            variant="contained"
                            size="small"
                            color={completed || taskName === null || taskName === undefined ? 'primary' : 'default'}
                            modalContent={taskDescription}
                        >
                            {completed || taskName === null || taskName === undefined
                                ? 'Назначить задачу'
                                : 'Подробнее'}
                        </ButtonModal>
                    </CardBottomActionsStyled>
                </Card>
            </foreignObject>
        </>
    );
};

export const employeeCardFn = ({
    nodeDatum,
    toggleNode,
}: {
    nodeDatum: RawNodeDatum;
    toggleNode: () => void;
}): React.ReactElement => (
    <EmployeeCard
        nodeData={nodeDatum}
        triggerNodeToggle={toggleNode}
        foreignObjectProps={{
            width: 350,
            height: 300,
            x: -175,
            y: -150,
        }}
    />
);
