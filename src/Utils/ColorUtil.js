import { toHex } from "./NumberUtil";

export const rgb = (colorValue) => {
  const redHex = String(toHex(colorValue.R)).padStart(2, '0');
  const greenHex = String(toHex(colorValue.G)).padStart(2, '0');
  const blueHex = String(toHex(colorValue.B)).padStart(2, '0');

  return "#"
    + String(redHex)
    + String(greenHex)
    + String(blueHex);
}

export const r = (colorValue) => {
  return rgb({R: colorValue.R, G: 0, B: 0})
}
export const g = (colorValue) => {
  return rgb({R: 0, G: colorValue.G, B: 0})
}
export const b = (colorValue) => {
  return rgb({R: 0, G: 0, B: colorValue.B})
}


// 補色の計算
export const complementaryRgb = (colorValue) => {
  const max_color = Math.max(colorValue.R, colorValue.G, colorValue.B);
  const min_color = Math.min(colorValue.R, colorValue.G, colorValue.B);

  const c_red = (max_color + min_color) - colorValue.R;
  const c_green = (max_color + min_color) - colorValue.G;
  const c_blue = (max_color + min_color) - colorValue.B;

  const redHex = String(toHex(c_red)).padStart(2, '0');
  const greenHex = String(toHex(c_green)).padStart(2, '0');
  const blueHex = String(toHex(c_blue)).padStart(2, '0');

  return "#"
    + String(redHex)
    + String(greenHex)
    + String(blueHex);
}

