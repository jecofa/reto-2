import React, {Component} from 'react';
import Imgtype from './../../assets/type.png';
import CertificationType from './../../data/CertificationType.json'
import Close from './../../assets/close.png';
import Pdf from './../../utils/fileCertification/Tipo1.pdf';
import { Document } from 'react-pdf'


class TipoCertificado extends Component{
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
    render(){
        const activado = <button className="btn--aqua waves-effect waves-light" type="submit" name="action">Continuar</button>
        const desactivado = <button className="btn-large disabled" type="submit" name="action">Continuar</button>

        const content = this.state.checked ? activado : desactivado;
        return(
            <div className="producto-lista">
                    {CertificationType.map((CertificadoDetalle, index)=>{
                        return <label key={index}>
                                    <div className="producto-lista-cont left-align">
                                        <img src={Imgtype} className="App-logo" alt="logo" />
                                            <div className="producto-lista-des">
                                                <span>{CertificadoDetalle.name}</span><br/>
                                                <strong>{CertificadoDetalle.type}</strong><br/>
                                                {CertificadoDetalle.detail}
                                                <br/>
                                                <Modal />
                                            </div>
                                    </div>
                                    <input className="with-gap" name="group2" type="radio" onChange={ this.handleChange } checked={ this.state.checked } style={{backgroundColor: this.state.checked ? 'red' : 'white'}} />
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

class Modal extends Component {
    constructor () {
      super()
      this.state = {
        isHidden: true
      }
    }
    toggleHidden (e) {
        e.preventDefault();
      this.setState({
        isHidden: !this.state.isHidden
      })
    }
    render () {
      return (
        <div>
          <button onClick={this.toggleHidden.bind(this)}  className="modal-open">
            Ver modelo >
          </button>
          {!this.state.isHidden && <Child />}
        </div>
      )
    }
  }
  
  const Child = () => (
    <div className="wrapper"> 
        <div className="wrapper__modal">
        <Document file="Pdf" />
        </div>
    </div>
  )

export default TipoCertificado
