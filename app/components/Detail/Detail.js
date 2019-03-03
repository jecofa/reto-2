import React, { Component } from 'react';
import Imgedit from './../../assets/edit.png';

class Detail extends Component {
    render() {
        return (
            <div className="product-detail">
                <div className="left-align">
                    <div className="product-border">
                        <div className="col s5">
                            <strong className="product-edit-gray">
                                Tipo de certificado:
                            </strong>
                        </div>
                        <div className="col s5">
                            <strong className="product-edit-green">
                                3. Básico + Saldo a la fecha
                            </strong>
                        </div>
                        <div className="col s2 right-align">
                            <a href="">
                                <img src={Imgedit} alt="Editar" />
                            </a>
                        </div>
                    </div>      

                    <div className="product-border">
                        <div className="col s5">
                            <strong className="product-edit-gray">
                                Costo:
                            </strong>
                        </div>
                        <div className="col s5">
                            <strong className="product-edit-green">
                                Sin costo
                            </strong>
                        </div>
                    </div>   
                 </div>
            </div>
        );
    }
}

export default Detail;