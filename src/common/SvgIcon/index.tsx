import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height }: SvgIconProps) => (
  <img src={`${process.env.PUBLIC_URL}/img/${src}`} alt={src} width={width} height={height} />
);
