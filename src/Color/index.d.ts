import React from "react";

// export interface HSLColor {
//   a?: number;
//   h: number;
//   l: number;
//   s: number;
// }

// export interface RGBColor {
//   a?: number;
//   b: number;
//   g: number;
//   r: number;
// }

// export type ColorValue = string | HSLColor | RGBColor;

// export interface ColorResult {
//   hex: string;
//   hsl: HSLColor;
//   rgb: RGBColor;
// }


export interface ColorProps {
  value?: string;
  showText?: boolean;
}

interface CommonPickerProps extends ColorProps {
  onChange?: (color: string) => void;
  trigger?: string;
  colorMode?: string;
  placement?: "top" | "left" | "right" | "bottom" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom";
}

export interface BlockPickerProps extends CommonPickerProps {
  width?: string;
  colors?: string[];
}

export interface ChromePickerProps extends CommonPickerProps {
  renderers?: {
    canvas?: HTMLCanvasElement;
  }
}

export interface CompactPickerProps extends CommonPickerProps {
  colors?: string[];
}

export interface PhotoshopPickerProps extends CommonPickerProps {
  header?: string;
}

type SketchPickerColor = {
  color: string;
  title: string;
  [key: string]: any;
}

export interface SketchPickerProps extends CommonPickerProps {
  width?: number;
  renderers?: {
    canvas?: HTMLCanvasElement;
  };
  presetColors?: SketchPickerColor[];
}

export declare const BlockPicker: React.FC<BlockPickerProps>;
export declare const ChromePicker: React.FC<ChromePickerProps>;
export declare const CompactPicker: React.FC<CompactPickerProps>;
export declare const PhotoshopPicker: React.FC<PhotoshopPickerProps>;
export declare const SketchPicker: React.FC<SketchPickerProps>;

declare class Color extends React.Component<ColorProps>{
  static BlockPicker: typeof BlockPicker;
  static ChromePicker: typeof ChromePicker;
  static CompactPicker: typeof CompactPicker;
  static PhotoshopPicker: typeof PhotoshopPicker;
  static SketchPicker: typeof SketchPicker;
}

export default Color;