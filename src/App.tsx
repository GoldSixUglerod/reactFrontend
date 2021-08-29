import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import { Main } from './pages/Main';
import { Profile } from './pages/Profile';
import { Backlog } from './pages/Backlog';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/profile">
                    <Profile />
                </Route>

                <Route path="/backlog">
                    <Backlog />
                </Route>

                <Route path="/tree/:id">
                    <Main />
                </Route>
                <Route path="/tree">
                    <Main />
                </Route>

                <Route path="/">
                    <Redirect to="/tree" />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
