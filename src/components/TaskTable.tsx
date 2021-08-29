import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Radio, RadioGroup } from '@material-ui/core';

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

export interface Task {
    id: string;
    name: string;
    description: string;
}

const TaskRow: React.FC<Task> = (props) => {
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (
        <>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {props.name}
                </TableCell>
                <TableCell>
                    <Radio value={props.id} />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                Description
                            </Typography>
                            {props.description}
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
};

const rows: Task[] = [
    { id: '1', name: 'govno', description: 'jfdbhsvuisibd' },
    { id: '2', name: 'gdgf', description: 'ggfgd' },
];

export const TaskTable: React.FC = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: any) => {
        console.log(event);
        setValue(event.target.value);
        console.log(value);
    };

    return (
        <div>
            <RadioGroup name="taskselected" value={value} onChange={handleChange}>
                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <TableCell />
                                <TableCell>Name</TableCell>
                                <TableCell>Select</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TaskRow key={row.name} {...row} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </RadioGroup>
        </div>
    );
};
