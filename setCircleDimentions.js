//@flow

import findRadius from './helpers/findRadius';

//types
import { sizingObject } from './types';
type circleConfig = {
  config: {
    r: number,
    origin: [number,number]
  }
}

export default function (data: sizingObject): circleConfig {
  const r: number = findRadius(data);
  const { origin }:{origin:[number,number]} = data;

  return {
    config: {
      r: r,
      origin: origin
    }
  };
}
