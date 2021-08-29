import React from 'react';

import { MainTree } from '../components/Tree/Tree';
import { PageWrapper } from '../components/Material/PageWrapper';

export const Main: React.FC = () => {
    return (
        <PageWrapper>
            <MainTree />
        </PageWrapper>
    );
};
