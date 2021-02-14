import React from 'react';
import Home from './pages/Home';
import Artist from './pages/Artist';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';

function App() {
    return (
    <Router>
        <div className="app">
        <Switch>
            <Route path="/artist/:id" exact component={Artist} />
            <Route path="/" exact component={Home} />
            {/* <Route path="/" exact component={Home} /> */}
        </Switch>
        </div>
    </Router>
    );
}

export default App;
