import React from 'react';
import Home from './Home';
import Footer from './Footer';
import Header from './Header-nav';
import CarouselDisplay from './Inicio'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <Router>
            <Route path="/">
                <Header />
            </Route>
            <Switch>
                <Route exact path="/">
                    {/* <Home /> */}
                    <CarouselDisplay />
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
