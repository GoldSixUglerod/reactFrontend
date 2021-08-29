import React from 'react';

import { PageWrapper } from '../components/Material/PageWrapper';
import { TaskTable } from '../components/TaskTable';
import { UserTable } from '../components/UserTable';

export const Backlog: React.FC = () => {
    return (
        <PageWrapper>
            <div style={{ display: 'flex' }}>
                <TaskTable />
                <UserTable />
            </div>
        </PageWrapper>
    );
};
