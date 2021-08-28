import React from 'react';

import { MainTree } from './components/Tree';

const App: React.FC = () => {
    return (
        <main
            style={{
                display: 'flex',
                flex: 'min-content',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <MainTree />
        </main>
    );
};

export default App;
