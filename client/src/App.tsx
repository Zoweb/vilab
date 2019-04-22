import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Watch from "./pages/Watch";

class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/watch/:videoId" component={Watch} />
            </Router>
        );
    }
}

export default App;
