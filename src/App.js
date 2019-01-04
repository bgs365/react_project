import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Options from './options/Options';
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
        <div>
          <NavBar />
          <Options />
            <Footer />
        </div>
    )
  }
}

export default App;