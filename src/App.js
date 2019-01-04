import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Options from './options/Options';
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
        <Router>
            <div>
              <NavBar />

              <Options />
                <Footer />
            </div>
        </Router>

    )
  }
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

export default App;