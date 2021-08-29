import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useLocation } from 'react-router-dom';

import { Main } from './pages/Main';
import { Profile } from './pages/Profile';
import { Backlog } from './pages/Backlog';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const App: React.FC = () => {
    const query = useQuery();

    return (
        <Switch>
            <Route path="/profile">
                <Profile />
            </Route>

            <Route path="/backlog/all">
                <Backlog user={query.get('user')} task={query.get('task')} />
            </Route>
            <Route path="/backlog/department">
                <Backlog user={query.get('user')} task={query.get('task')} />
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
    );
};

export default App;
