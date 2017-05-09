//@flow

import { compose } from 'recompose';

type props = {
  morph: boolean,
  flip: coordinates,
  dimensions: coordinates,
  offsets: coordinates,
  thresholds: coordinates
}

type coordinates = {
  'x': number,
  'y': number
}

//return the value of an axis
const fetchAxis = (axis: string) => async (val: number): number => {
  const newCoords = await fetchCoordinates({[axis]: val});
  return newCoords[axis];
}

//returns the coordinates
const fetchCoordinates = async ({transforms}:{transforms: Array<()=>mixed>}): coordinates => ({
  adjustX: await fetchAxis('x'),
  adjustY: await fetchAxis('y'),
} : coordinates).then((coordinates: coordinates): coordinates => (

  compose(transforms)({
    'x': coordinates.adjustX,
    'y': coordinates.adjustY
  })
))










/*
(async function AdjustX (x) {

  const newX = fetchNewX(x)

  return await newX;
}).then((x) => x * 2 )(newX)
*/





const asyncAdjustY = (y) => y

export default async ({
  threshold,
  offset,
  height,
  width }: {
    threshhold: number,
    offset: number,
    height: number,
    width: number
  }
) => ( value: number ): number => {

  let x = asyncAdjustX(5);
  let y = asyncAdjustY(4);

}
