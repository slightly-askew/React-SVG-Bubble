//@flow

//vendor
import { compose } from 'recompose';

//helpers
import flattenPathDataIntoTuples from './helpers/flattenPathData';
import adjustPaths from './helpers/adjustPath';
import alterCoordinates from './helpers/alterCoordinates';

//types
import AdjustmentObject from './helpers/alterCoordinates';

//return the new svg path data
export default function (
  pathData: Array<mixed>, adjustments : AdjustmentObject
): string {
  const returnPathAsString = (a: Array<string>): string => a.join(' ');

  const processPath: <T>()=>T = compose(

    //TL;DR
    returnPathAsString,
    adjustPaths(alterCoordinates(adjustments)),
    flattenPathDataIntoTuples

  );

  return processPath(pathData);
};
