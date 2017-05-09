//@flow

//vendor
import { compose } from 'recompose';

//helpers
import flattenPathDataIntoTuples from './helpers/flattenPathData';
import adjustPath from './helpers/adjustPath';
import asyncCoordinateHandler from './helpers/asyncCoordinateHandler';

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

//return the new svg path data
export default function (pathData: Array<mixed>, props : props): string {

  const returnPathAsString = (a: Array<string>): string => (

    a.join(' ')
  );

  const processPath: <T>()=>T = compose(
    returnPathAsString,
    adjustPath(asyncCoordinateHandler(props)),
    flattenPathDataIntoTuples
  );

  return processPath(pathData);
};
