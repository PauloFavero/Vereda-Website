import React from 'react';
import Home from  './Home';
import Footer from './Footer';
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
        
            <Route path="/">
                <Footer/>
            </Route>
        </Router>
    );
}

export default App;
