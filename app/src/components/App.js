import React from 'react';
import Home from './Home';
import Footer from './Footer/Footer';
import Header from './Header/Header-nav';
import CarouselDisplay from './Carousel/ImageCarousel';
import Clients from './Clients/Clients'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    console.log("Window Orientation: ", window.orientation)
    return (
        <Router>
            <Route path="/">
                <Header />
            </Route>
            <Switch>
                <Route exact path="/">
                    {/* <Home /> */}
                    <CarouselDisplay />
                    <Clients/>
                </Route>
                <Route exact path="/about">
                    <div>Sobre Nós !</div>
                </Route>
            </Switch>
            <Route path="/">
                <Footer/>
            </Route>
        </Router>
    );
}

export default App;
