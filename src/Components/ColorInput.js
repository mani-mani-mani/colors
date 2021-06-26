import React, { Component } from 'react';
import { b, g, r } from '../Utils/ColorUtil';

export default class ColorInput extends Component {
  backgroundColor = (name, colorValue) => {
    switch (name) {
      case 'R':
        return r(colorValue)
      case 'G':
        return g(colorValue)
      case 'B':
        return b(colorValue)
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <span style={{ color: 'white', backgroundColor: this.backgroundColor(this.props.name, this.props.value) }}>
          {this.props.name}
        </span>
        <input name={this.props.name} value={this.props.value[this.props.name]} onChange={this.props.handleChange} />
      </div >
    )
  }
}