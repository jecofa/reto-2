import React, { Component } from 'react';

class RadioButton extends Component{
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
      const content = this.state.checked 
          ? <div> Content </div>
        : null;
      
      return <div>
          <div>
            <label>Check</label>
          <input type="checkbox" checked={ this.state.checked } onChange={ this.handleChange } />
        </div>
        
        { content }
      </div>;
    }
}

export default RadioButton;