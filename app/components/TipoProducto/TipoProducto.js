import React, { Component } from 'react';
import ImgProduct from './../../assets/certification-blue-light.png';
import ProductType from './../../data/ProductType.json'
import Close from './../../assets/close.png';


class TipoProducto extends Component {
    constructor() {
        super();
      
      this.state = { checked: false };
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({
          checked: !this.state.checked
      })
    }
    render() {
        const activado = <button className="btn--aqua waves-effect waves-light" type="submit" name="action">Continuar</button>
        const desactivado = <button className="btn-large disabled" type="submit" name="action">Continuar</button>

        const content = this.state.checked ? activado : desactivado;
        return (
            <div className="producto-lista">
                {ProductType.map((ProductoDetalle, index) => {
                    return <label key={index}>
                        <div className="producto-lista-cont">
                            <img src={ImgProduct} alt="Producto" />
                            <span>{ProductoDetalle.name}</span>
                        </div>
                        <input className="with-gap" name="group1" type="radio" onChange={ this.handleChange } checked={ this.state.checked } style={{backgroundColor: this.state.checked ? 'red' : 'white'}} />
                        <span></span>
                    </label>
                })}
                

                <div className="Button col m10 offset-m1">
                <div className="left-align">
                    <button className="btn--light btn-flat waves-effect waves-light  " type="submit" name="action">
                    <img src={Close} alt="Cerrar" />Cancelar
                </button>
                </div>
                <div className="right-align">
                    { content }
                </div>
                </div>

                
            </div>
        );
    }
}

export default TipoProducto;
