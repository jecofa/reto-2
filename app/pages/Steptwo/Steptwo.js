import React, {Component} from 'react';
import Button from '../../components/Button/Button';
import TipoCertificado from '../../components/TipoCertificado/TipoCertificado';
import Ok from './../../assets/ok.png';

class Steptwo extends Component{
    render(){
        return(
            <div className="step-one">
                    <div className="row">
                        <div className="col s3 aside">
                        <img src={Ok} className="" alt="ok" />
                            <p className="aside-pasos">PASO 2 DE 4</p>
                            <h2>Tipo de certificado</h2>
                            <p>Estos son los tipos de certificados disponibles para este producto, podrás ver un modelo de cada uno.</p>
                        </div>
                        <div className="col s9 contenido center-align">
                            <div className="option-white">
                                <h3>¿Qué tipo de certificado necesitas?</h3>
                                <p>Selecciona un tipo de certificado, podrás solicitar solo un (1) certificado por operación</p>
                           </div>
                           <TipoCertificado />
                        </div>
                    </div>
            </div>
        );
    }
}

export default Steptwo;
