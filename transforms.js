//@flow


//types

type coordinates = {
  'x': number,
  'y': number
}
type Axis = 'x' | 'y'


//switches the coordinates of the axis
export const morph = (coordinates: coordinates): coordinates => (
  {
    'x': coordinates['y'],
    'y': coordinates['x']
  }
)

export const flip = (dimensions: coordinates) => (...axis: Array<Axis>) => (coordinates: coordinates): coordinates => {

  const flipCoordinate = (axis) => (
    dimensions[axis] - coordinates[axis]
  )

  const newCoords = axis.reduce((obj, key): any => {
    obj[key] = flipCoordinate(key);
    return obj;
  }, {})

  return (
    Object.assign({}, coordinates, newCoords)
  )
}

export const flipPosition = (svgDimensions: coordinates, selfDimensions: coordinates) => (...axis: Array<Axis>) => (coordinates: coordinates): coordinates => {


  const flipPosition = (axis) => (
    svgDimensions[axis] - coordinates[axis] - selfDimensions[axis]
  )

  const flippedPositions = axis.reduce((obj, key): any => {
    obj[key] = flipPosition(key)
    return obj;
  }, {})

  return (
    Object.assign({}, coordinates, flippedPositions)
  )
}

export const offsetPath = (pathOffsets: coordinates, thresholds: coordinates = {x: 0, y:0}) =>
  (coordinates: coordinates): coordinates => {

  const offsetCoordinate = (axis) => (

    coordinates[axis] > thresholds[axis] ?
    coordinates[axis] + pathOffsets[axis] :
    coordinates[axis]
  );

  return ({
    'x': offsetCoordinate('x'),
    'y': offsetCoordinate('y')
  })
}
