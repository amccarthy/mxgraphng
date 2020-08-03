/// <reference path="Util.d.ts" />

declare class mxGeometry extends mxRectangle {
  constructor(x, y, width, height);

  TRANSLATE_CONTROL_POINTS: boolean;
  alternateBounds: any;
  sourcePoint: mxPoint;
  targetPoint: mxPoint;
  points: mxPoint[];
  offset: any;
  relative: boolean;

  swap();
  getTerminalPoint(isSource: boolean): mxPoint;
  setTerminalPoint(point: mxPoint, isSource: boolean);
  rotate(angle: number, cx: mxPoint);
  translate(dx: number, dy: number);
  scale(sx: number, sy: number, fixedAspect: boolean);
  equals(obj: mxGeometry): boolean;
}
