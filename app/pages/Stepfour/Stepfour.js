import React, {Component} from 'react';
import Ok from './../../assets/ok.png';
import Download from './../../assets/download.png';
import Info from './../../assets/info.png';

class Stepfour extends Component{
    render(){
        return(
            <div className="step-one">
                    <div className="row">
                        <div className="col s3 aside">
                        <img src={Ok} className="" alt="ok" />
                            <p className="aside-pasos">PASO 4 DE 4</p>
                            <h2>Descarga</h2>
                            <p>¡Ahora puedes descargar tu certificado!</p>
                            <div className="center-align btn-finish">
                                <a className="btn-large disabled-btn">Finalizar</a>
                            </div>
                        </div>
                        <div className="col s9 contenido center-align">
                            <div className="option-green">
                            <a className="btn-white waves-effect waves-light btn-large">Descargar certificado aquí</a><br/>
                                <div className="col s6 offset-s3 left-align">
                                    <div className="cont-info">
                                        <img src={Info} alt="Atención" className="info-img" />
                                        <p>
                                            La clave para abrir tu certificado es el número de tu documento de identidad
                                        </p>
                                    </div>
                                </div>
                           </div>
                           <div>
                                <a href="#" className="center btn-download">
                                    <img src={Download} alt="Descargar" className="responsive-img" /><br/>
                                    Descargar <br/>otro tipo certificado
                                </a>
                           </div>
                           <div className="message left-align">
                                    No tenemos registrado tu correo electrónico para enviarte una copia de este certificado. <br/>
                                    Para registrarlo ingresa, en la parte superior de esta página a:<br/>
                                    <strong>Mi Perfil > Editar mi perfil > Registrar correo.</strong>
                           </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Stepfour;