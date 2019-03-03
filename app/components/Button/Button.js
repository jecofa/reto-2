import React, { Component } from 'react';
import Close from './../../assets/close.png';

class Button extends Component{
    render(){
        return(
            
            <div className="Button col m10 offset-m1">
                <div className="left-align">
                    <button className="btn--light btn-flat waves-effect waves-light  " type="submit" name="action">
                       <img src={Close} className="App-logo" alt="Cerrar" />Cancelar
                    </button>
                </div>
                <div className="right-align">
                    <button className="btn--aqua waves-effect waves-light" type="submit" name="action">Continuar</button>
                </div>
            </div>
        );
    }
}


export default Button;
//<button onClick = {this.updateState}>CLICK</button>
