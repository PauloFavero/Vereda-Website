import React from 'react';
import Home from './Home';
import Footer from './Footer/Footer';
import Header from './Header/Header-nav';
import CarouselDisplay from './Carousel/ImageCarousel'
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
                    <CarouselDisplay />
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
