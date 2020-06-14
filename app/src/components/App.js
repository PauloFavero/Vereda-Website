import React from 'react';
import Home from  './Home';

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
                    <Home/>
                </Route>
                <Route exact path="/about">
                    <div>SOBRE NOIS !</div>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
