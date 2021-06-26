import React, { Component } from 'react';
import ColorInput from './Components/ColorInput';
import ColorCircle from './Components/ColorCircle';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorValue: { R: 255, G: 255, B: 255 }
    };
  }
  handleChange = (event) => {
    let colorValue = this.state.colorValue
    let value= parseInt(event.target.value)
    if (isNaN(value)) {
      value = 0
    }
    colorValue[event.target.name] = value
    this.setState({ colorValue: colorValue })
  }

  render() {
    return (
      <div style={{display: 'flex', alignItems: 'center'}}>
        <ColorCircle style={{width: '50%', innerHeight: 200}} colorValue={this.state.colorValue} />
        <div style={{width: '50%'}}>
          <ColorInput name={'R'} value={this.state.colorValue} handleChange={this.handleChange} />
          <ColorInput name={'G'} value={this.state.colorValue} handleChange={this.handleChange} />
          <ColorInput name={'B'} value={this.state.colorValue} handleChange={this.handleChange} />
        </div>
      </div>
    );
  }
}
