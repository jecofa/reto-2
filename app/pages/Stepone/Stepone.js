import React, {Component} from 'react';
import TabsProducto from './../../components/Tabs/Tabs';
import Ok from './../../assets/ok.png';

class Stepone extends Component{
    render(){
        return(
            
            <div className="step-one">
                    <div className="row">
                        <div className="col s3 aside">
                        <img src={Ok} className="" alt="ok" />
                            <p className="aside-pasos">PASO 1 DE 4</p>
                            <h2>Producto</h2>
                            <p>Selecciona el producto sobre el cual quieres generar tu certificado.</p>
                        </div>
                        <div className="col s9 contenido center-align">
                            <div className="option">
                                <h3>Selecciona un tipo de producto</h3>
                                <div className="TabsComp">
                                <TabsProducto />
                                </div>
                           </div>
                        </div>
                    </div>
                    
            </div>
        );
    }
}

export default Stepone;