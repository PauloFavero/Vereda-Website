import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
	  BrowserRouter as Router,
		  Switch,
		  Route,
		  Link
} from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <div>FALAE QUE ESSA AQUI EH A HOME</div>
                </Route>
                <Route exact path="/about">
                    <div>SOBRE NOIS !</div>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
