import React from 'react';
import Home from './pages/Home';
import Artist from './pages/Artist';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.scss';

function App() {
    return (
    <Router>
        <div className="app">
            <Route path="/" exact component={Home} />
            <Route path="/artist/:id" exact component={Artist} />
        </div>
    </Router>
    );
}

export default App;
