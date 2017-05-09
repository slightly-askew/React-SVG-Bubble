//@flow

//vendor
import { compose } from 'recompose';

//helpers

import flattenPathDataIntoTuples from './helpers/flattenPathData';
import adjustPaths from './helpers/adjustPath';

type Orientation ={
  defaultWidth: number,
  defaultHeight: number
}

type AdjustmentConfig = [
  { morphAxis: boolean },
  { flipX: boolean },
  { flipY: boolean }
]

const flipAxis = (Axis: string, AxisLength:number):number => (value:number):number => (
  AxisLength - value
)


export default async function getAxis () {
  const axis = await getXandY();
  return reversedAxis
}









export const flipX = ({width, height, x, y}: Orientation):Orientation => ({




})
