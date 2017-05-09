//@flow

import alterCoordinates from './alterCoordinates'

//types

type coordinate = {
  'x': number
}

type coordinates = {
  'x': number,
  'y': number
}

type props = {
  morph: boolean,
  flip: attributes,
  dimensions: attributes,
  offsets: attributes,
  thresholds: attributes
}


const handler = (axis: string) => async (value: number): number => (

  await getNextVal({[axis]: value})
)

const handleCoords = async(props: props) => {
  let X = await handler('x');
  let Y = await handler('y');
}

const getNextVal = (x: coordinate, y: coordinate): coordinates =>
