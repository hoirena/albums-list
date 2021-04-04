import React from 'react';
import Home from './pages/Home';
import Artist from './pages/Artist';
import { Route } from 'react-router-dom';

import './App.scss';

function App() {
    return (
        <div className="app">
            <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
            <Route path={`${process.env.PUBLIC_URL}/artist/:id`} component={Artist} />
        </div>
    );
}

export default App;
