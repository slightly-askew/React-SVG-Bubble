//@flow

//type def


export default function (
  dimensions: {'x': number, 'y': number},
  origin: {'x': number, 'y': number} = {'x': 0, 'y': 0}

):number {

  const longestDistanceFromAxisEdge = (length, origin) => (

    Math.max(origin, length - origin)
  )

  const plotAxisLength = (i: number): number => (

    i === 0 ?
    dimensions['x'] :
    dimensions['y']
  );

  const calculateDistance = (i:number , a) => (

    longestDistanceFromAxisEdge(plotAxisLength(i), a)
  );

  const plotDistanceFromAxis = (a, i):number => (

    calculateDistance(i,a)
  );

  const originValues = Object.values(origin);


  const refineNum = (vals) => vals.map(n => {
    if (typeof n === 'number') {
      return n
    }
    return NaN
  })

  const coords = refineNum(originValues);

  const distances: Array<number> = coords.map(plotDistanceFromAxis);

  const squareDistances = (acc, d) => (

    acc + d * d
  );

  const distancesSquared = distances.reduce(squareDistances,0);

  const hypotenuse = Math.sqrt(distancesSquared);

  return hypotenuse;
}
