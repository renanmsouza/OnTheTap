import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

import Login from './pages/Login';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/admin/dashboard" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;