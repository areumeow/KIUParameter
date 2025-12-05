export interface TextPressureProps {
  text: string;
  className?: string;
  minWeight?: number;
  maxWeight?: number;
  width?: string;
  weight?: string;
  italic?: boolean;
  alpha?: boolean;
  flex?: boolean;
  stroke?: boolean;
  scale?: boolean;
}

export interface MousePosition {
  x: number;
  y: number;
}
