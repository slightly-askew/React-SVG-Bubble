export type originTuple = [ number, number ];
export type dataObject = {
  cx: number,
  cy: number,
  r: number,
  origin: originTuple
};

export textConfig from './setTextDimentions';
export sizingObject from './helpers/findRadius';
