import React from 'react';
import { Button } from '@material-ui/core';

import { PageWrapper } from '../components/Material/PageWrapper';
import { TaskTable } from '../components/TaskTable';
import { UserTable } from '../components/UserTable';

interface BacklogProps {
    user: string | null;
    task: string | null;
}

export const Backlog: React.FC<BacklogProps> = (props) => {
    const [selectedTask, setSelectedTask] = React.useState(props.task !== null ? props.task : '');
    const [selectedUser, setSelectedUser] = React.useState(props.user !== null ? props.user : '');

    return (
        <PageWrapper>
            <Button
                fullWidth
                variant="contained"
                color="primary"
                style={{ marginBottom: '20px' }}
                disabled={selectedTask === '' || selectedUser === ''}
            >
                Назначить задачу
            </Button>
            <div style={{ display: 'flex' }}>
                <TaskTable value={selectedTask} setValue={setSelectedTask} />
                <UserTable value={selectedUser} setValue={setSelectedUser} />
            </div>
        </PageWrapper>
    );
};
