import React, {Component} from 'react';
import Button from '../../components/Button/Button';
import Detail from '../../components/Detail/Detail';
import Ok from './../../assets/ok.png';

class Stepthree extends Component{
    render(){
        return(
            <div className="step-one">
                    <div className="row">
                        <div className="col s3 aside">
                        <img src={Ok} className="" alt="ok" />
                            <p className="aside-pasos">PASO 3 DE 4</p>
                            <h2>Detalle</h2>
                            <p>A continuación podrás ver el resumen de la operacion y confirmar o editar características.</p>
                        </div>
                        <div className="col s9 contenido center-align">
                            <div className="option-white">
                                <h3>Revisa los detalles del proceso <br/>y confirma la operación</h3>
                                <p>Haciendo clic en el ícono “editar” podrás modificar el grupo de datos seleccionado</p>
                           </div>
                           <Detail />
                           <Button />
                        </div>
                    </div>
            </div>
        );
    }
}

export default Stepthree;