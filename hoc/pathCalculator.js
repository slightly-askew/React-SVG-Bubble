//@flow

import { compose } from 'recompose';

import genericPath from '../data/svgGenericPathData';
import adjustPath from '../helpers/adjustPath';
import flattenPathData from '../helpers/flattenPathData';

type coordinates = {
  'x': number,
  'y': number
}

type coord = {
  'x'?: number,
  'y'?: number
}

export default ({
  transforms,
  ...props
}:{
  transforms : {
    flip: (coordinates) => coordinates,
    morph: (coordinates) => coordinates,
    offset: (coordinates) => coordinates,
  },
}):{} => {

  const { morph, flip, offset } = transforms;

  const orientate = compose(
    flip,
    offset,
    morph,
  )

  const returnPathAsString = (a: Array<string>): string => (

    a.join(' ')
  );

  const transformPath = compose(
    returnPathAsString,
    adjustPath(orientate),
    flattenPathData
  )

  const pathData = transformPath(genericPath)

  return(
    Object.assign({},{...props},{pathData: pathData})
  )
}
