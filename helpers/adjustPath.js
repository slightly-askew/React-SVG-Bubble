//@flow

type standardPath = [string, [number,number]]
type curvedPath = ["C", Array<number>]

export type flatPathData = Array< curvedPath | standardPath >

const checkString = (s:mixed):string => (
  typeof s === 'string' ?
  s : ''
)



const processPath = (p: flatPathData) => (adjustments) => {
  const { adjustX , adjustY } = adjustments;
    switch (p[0]) {
      case "C":
        return `C${p[1].map(c => `${adjustX(c[0])},${adjustY(c[1])}`).join(' ')}`;
      case "L":
        return `${p[0]}${adjustX(p[1][0])} ${adjustY(p[1][1])}`;
      case "M":
        return `${p[0]}${adjustX(p[1][0])} ${adjustY(p[1][1])}`;
      default:
        return `${checkString(p[0])}`;
    }
  }

export default function returnPath (
  adjustments: Adjustments) {

  return (
    function ( pathAry: string[][] ): Array<*> {

      const adjustedPath = processPath(adjustments);
      return pathAry.map(adjustedPath)
  })
}
