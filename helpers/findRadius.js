//@flow

//type def
export type sizingObject = {
  width: number,
  height: number,
  origin?: [number,number]
}

export default function ({width, height, origin = [0,0]}: sizingObject):number {

  const longestDistanceFromAxisEdge = (length, origin) => (
    Math.max(origin, length - origin))

  const plotAxisLength = (i) => (i === 0) ? width : height;

  const calculateDistance = (i, a) => longestDistanceFromAxisEdge(plotAxisLength(i),a);

  const plotDistanceFromAxis = (a:number, i:number):number => calculateDistance(i,a);

  const plotDistances: Array<number> = origin.map(plotDistanceFromAxis);

  const squareDistances = (acc, d) => acc + d * d;

  const distancesSquared = plotDistances.reduce(squareDistances);

  const hypotenuse = Math.sqrt(distancesSquared);

  return hypotenuse;
}
