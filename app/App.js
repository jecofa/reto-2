import React, { Component } from 'react';
import Header from './components/Header/Header.js';
import './style/App.scss';
import Stepone from './pages/Stepone/Stepone.js';
import Steptwo from './pages/Steptwo/Steptwo.js';
import Stepthree from './pages/Stepthree/Stepthree.js';
import Stepfour from './pages/Stepfour/Stepfour.js'

//import M from 'materialize-css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Stepone />
        <Steptwo />
        <Stepthree />
        <Stepfour />
      </div>
    );
  }
}


export default App;
