//@flow

import type { Adjustments } from './alterCoordinates';

const processPath = (p: Array<*>) => (adjustments: Adjustments) => {
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

export default function returnPath (
  adjustments: Adjustments) {
  return (
    function (pathAry: string[][]):Array<*> {
    const adjustedPath = processPath(adjustments);
    return pathAry.map(adjustedPath)
  })
}
