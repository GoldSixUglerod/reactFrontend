import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Main } from './pages/Main';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Main />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
