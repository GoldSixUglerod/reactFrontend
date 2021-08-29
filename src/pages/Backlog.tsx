import React from 'react';
import { Button } from '@material-ui/core';

import { PageWrapper } from '../components/Material/PageWrapper';
import { TaskTable } from '../components/TaskTable';
import { UserTable } from '../components/UserTable';

export const Backlog: React.FC = () => {
    const [selectedTask, setSelectedTask] = React.useState('');
    const [selectedUser, setSelectedUser] = React.useState('');

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
