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
import Axios from 'axios';

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

const initRows: Task[] = [{ id: '1', name: '1', description: '' }];

export interface TaskTableProps {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const TaskTable: React.FC<TaskTableProps> = ({ value, setValue }) => {
    const [rows, setRows] = React.useState<Task[]>(initRows);
    React.useEffect(() => {
        Axios.get('http://10.91.54.226:8000/api/task/').then((response) => {
            setRows(
                response.data.tasks.map((task: any) => ({
                    id: `${task.id}`,
                    name: task.name,
                    description: task.description,
                })),
            );
        });
    }, []);

    const handleChange = (event: React.ChangeEvent) => {
        setValue((event.target as any).value);
    };

    return (
        <div style={{ width: '100%', marginRight: '10px' }}>
            <RadioGroup name="taskselected" value={value} onChange={handleChange}>
                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <TableCell />
                                <TableCell>Ключевые слова</TableCell>
                                <TableCell>Выбор</TableCell>
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
