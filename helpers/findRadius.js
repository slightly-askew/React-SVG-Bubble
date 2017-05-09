//@flow

//type def


export default function ({dimensions, origin = [0,0]}:{
  dimensions: {'x': number, 'y': number},
  origin: [number,number]
}):number {

  const longestDistanceFromAxisEdge = (length, origin) => (

    Math.max(origin, length - origin)
  )

  const plotAxisLength = (i: number): number => (

    i === 0 ? //check if 1st or 2nd number of a coordinate tuple
    dimensions['x'] :
    dimensions['y']
  );

  const calculateDistance = (i:number , a) => (

    longestDistanceFromAxisEdge(plotAxisLength(i), a)
  );

  const plotDistanceFromAxis = (a:number, i:number):number => (

    calculateDistance(i,a)
  );

  const plotDistances: Array<number> = origin.map(plotDistanceFromAxis);

  const squareDistances = (acc, d) => (

    acc + d * d
  );

  const distancesSquared = plotDistances.reduce(squareDistances);

  const hypotenuse = Math.sqrt(distancesSquared);

  return hypotenuse;
}
