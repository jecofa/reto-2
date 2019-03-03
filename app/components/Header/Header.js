import React, { Component } from 'react';
import logo from './../../assets/logo.png';

class Header extends Component{
    render(){
        return(
            
            <div className="header">
                <div>
                    <h1>
                    Generación de Certificados
                    </h1>
                </div>
                <div className="right-align">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
            </div>
        );
    }
}

export default Header;
//http://jsfiddle.net/cqDES/