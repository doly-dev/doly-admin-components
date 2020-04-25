// // 判断是否为HSL颜色
// function isHsl(color) {
//   return (
//     typeof color === 'object' &&
//     typeof color.h === 'number' &&
//     typeof color.s === 'number' &&
//     typeof color.l === 'number'
//   )
// }

// // 判断是否为HSV颜色
// function isHsv(color) {
//   return (
//     typeof color === 'object' &&
//     typeof color.h === 'number' &&
//     typeof color.s === 'number' &&
//     typeof color.v === 'number'
//   )
// }

// // 判断是否为rgb颜色
// function isRgb(color) {
//   return (
//     typeof color === 'object' &&
//     typeof color.r === 'number' &&
//     typeof color.g === 'number' &&
//     typeof color.b === 'number'
//   )
// }

// /**
//  * HSL颜色值转换为RGB。
//  * 
//  * @see {@link:http://en.wikipedia.org/wiki/HSL_color_space|}
//  * @param {Number} h 色相
//  * @param {Number} s 饱和度
//  * @param {Number} l 亮度
//  * @returns {Object} RGB色值
//  */
// function hslToRgb(h, s, l) {
//   var r, g, b;

//   if (s == 0) {
//     r = g = b = l; // achromatic
//   } else {
//     var hue2rgb = function hue2rgb(p, q, t) {
//       if (t < 0) t += 1;
//       if (t > 1) t -= 1;
//       if (t < 1 / 6) return p + (q - p) * 6 * t;
//       if (t < 1 / 2) return q;
//       if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
//       return p;
//     }

//     var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
//     var p = 2 * l - q;
//     r = hue2rgb(p, q, h + 1 / 3);
//     g = hue2rgb(p, q, h);
//     b = hue2rgb(p, q, h - 1 / 3);
//   }

//   return {
//     r: Math.round(r * 255),
//     g: Math.round(g * 255),
//     b: Math.round(b * 255)
//   };
// }

// /**
//  * HSV颜色值转换为RGB。
//  * 
//  * @see {@link:http://en.wikipedia.org/wiki/HSL_color_space|}
//  * @param {Number} h 色相
//  * @param {Number} s 饱和度
//  * @param {Number} v 明度
//  * @returns {Object} RGB色值
//  */
// function hsvToRgb(h, s, v) {
//   s = s / 100;
//   v = v / 100;
//   var h1 = Math.floor(h / 60) % 6;
//   var f = h / 60 - h1;
//   var p = v * (1 - s);
//   var q = v * (1 - f * s);
//   var t = v * (1 - (1 - f) * s);
//   var r, g, b;
//   switch (h1) {
//     case 0:
//       r = v;
//       g = t;
//       b = p;
//       break;
//     case 1:
//       r = q;
//       g = v;
//       b = p;
//       break;
//     case 2:
//       r = p;
//       g = v;
//       b = t;
//       break;
//     case 3:
//       r = p;
//       g = q;
//       b = v;
//       break;
//     case 4:
//       r = t;
//       g = p;
//       b = v;
//       break;
//     case 5:
//       r = v;
//       g = p;
//       b = q;
//       break;
//   }
//   return {
//     r: Math.round(r * 255),
//     g: Math.round(g * 255),
//     b: Math.round(b * 255)
//   }
// }

// rgb颜色转为string
export function rgbToStr(color) {
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a || 1})`;
}

// 转换颜色
export function transformColor(color, colorMode) {
  if (colorMode === 'rgb') {
    return rgbToStr(color.rgb);
  }

  return color.hex;
}

// // 转换颜色
// export function transformColor(color) {
//   if (typeof color === 'object') {
//     if (isHsl(color)) {
//       const rgb = hslToRgb(color.h, color.s, color.l);
//       return rgbToStr({ ...rgb, a: color.a });
//     }
//     if (isHsv(color)) {
//       const rgb = hsvToRgb(color.h, color.s, color.v);
//       return rgbToStr({ ...rgb, a: color.a });
//     }
//     if (isRgb(color)) {
//       return rgbToStr(color);
//     }
//   }
//   return color;
// }