//@flow

import { compose } from 'recompose';

//types

type coordinates = {
  'x': number,
  'y': number
}

type props = {
  morph: boolean,
  flip: coordinates,
  dimensions: coordinates,
  offsets: coordinates,
  thresholds: coordinates
}

//methods

//switches the coordinates of the axis
export const morphAxis = (props: props) => (coordinates: coordinates): coordinates => (

  props.morph ?
  {
    'x': coordinates.y,
    'y': coordinates.x
  } :
  coordinates
)

//flips a coordinate to the value of its distance from the end point of the axis
export const flipCoordinate = (props: props, axis: string) => (coordinates: coordinates): coordinates => {

  let flipped = coordinates

  flipped[axis] = props.flip[axis] && props.dimensions[axis] - flipped[axis];

  return flipped
}

//adjusts a coordinate by a specified amount if it meets the threshold criteria
export const adjustCoordinate = (props: props, axis: string) =>
  (coordinates: coordinates): coordinates => {

  let adjusted = coordinates

  adjusted[axis] += (adjusted[axis] > props.thresholds[axis]) && props.offsets[axis];

  return adjusted

};

//alter coordinates

export default (props: props) => (
  compose(
    morphAxis(props),
    flipCoordinate(props, 'x'),
    adjustCoordinate(props, 'x'),
    flipCoordinate(props, 'y'),
    adjustCoordinate(props, 'y')
  )
);
