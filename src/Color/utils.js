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