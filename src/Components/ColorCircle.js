import React, { Component, createRef } from 'react';
import { complementaryRgb, rgb } from '../Utils/ColorUtil';

export default class ColorCircle extends Component {
  constructor(props) {
    super(props);
    this.canvas = createRef();
  }
  componentDidMount() {
    this.updateCanvas();
  }
  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas() {
    let ctx = this.canvas.current.getContext("2d");
    ctx.fillStyle = rgb(this.props.colorValue);     //塗りつぶしの色を赤に指定

    //円
    ctx.beginPath();
    ctx.arc(100, 100, 40, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.fill();
  }

  render() {
    return (
      <canvas
        ref={this.canvas}
        width="200px"
        height="200px"
      />
    )
  }
}