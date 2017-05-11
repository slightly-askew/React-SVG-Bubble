//@flow


export type flatPathData = Array<any>

type coordinates = {
  'x': number,
  'y': number
}

const checkString = (s:mixed):string => (
  typeof s === 'string' ?
  s : ''
)

const prepareCoords = (adjustment: () => coordinates) => (tuple: number[]): string => (

  Object.values(adjustment({
    x: tuple[0],
    y: tuple[1]
  })).join(' ')
)

const processPath = (adjustment) => (p: flatPathData) => {

  const process = prepareCoords(adjustment);

  switch (p[0]) {
    case "C":
      return `C${p[1].map(c => process(c)).join(' ')}`;
    case "L":
      return `L${process(p[1])}`;
    case "M":
      return `M${process(p[1])}`;
    default:
      return `${checkString(p[0])}`;
  }
}

export default (adjustment: () => coordinates) => (

  (pathAry: flatPathData): string[] => {

      const adjustedPath = processPath(adjustment);
      return pathAry.map(adjustedPath)
  }
)
