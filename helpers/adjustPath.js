//@flow

import { AdjustmentObject } from './alterCoordinate';

const processPath = <T>(p: Array<mixed>): string => (adjustments: AdjustmentObject): T => {
    const { adjustX , adjustY } = adjustments;
    switch (p[0]) {
      case "C":
        return `C${p[1].map(c => `${adjustX(c[0])},${adjustY(c[1])}`).join(' ')}`;
      case "L":
        return `${p[0]}${adjustX(p[1][0])} ${adjustY(p[1][1])}`;
      case "M":
        return `${p[0]}${adjustX(p[1][0])} ${adjustY(p[1][1])}`;
      default:
        return `${p[0]}`;
    }
  }

export default function returnPath <T> (
  adjustments: AdjustmentObject): T {
  return function (pathAry: Array<mixed>):Array<string> {
    const adjustedPath = processPath(adjustments);
    return pathAry.map(adjustedPath);
  }
}
