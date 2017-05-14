//@flow
import { compose } from 'recompose';
import mapOrigins from '../helpers/mapOrigins';

type coordinates = {
  'x': number,
  'y': number
}

export default ({
  transforms,
  textboxOrigin,
  textGrid,
  dividerGrid,
  maskOrigin,
  ...props
}:{
  transforms: {
    flip: (coordinates) => coordinates,
    morph: (coordinates) => coordinates,
    flipText: (coordinates) => coordinates,
    offset: (coordinates) => coordinates,
  },
  textboxOrigin: {
    x: number,
    y: number
  },
  textGrid: {
    x: number[],
    y: number[]
  },
  dividerGrid: {
    x: number[],
    y: number[]
  },
  maskOrigin: {
    x: number,
    y: number
  }
}):{} => {

  const { morph, flipText, flip, offset } = transforms

  const orientate = compose(
    flipText,
    morph
  )

  const orientateMask = compose(
    flip,
    offset,
    morph
  )

  const firstOrigin = orientate(morph(textboxOrigin));

  const mapToBox = mapOrigins(firstOrigin);

  const textOrigins = mapToBox(textGrid);
  const dividerOrigins = mapToBox(dividerGrid);
  const newMaskOrigin = orientateMask(maskOrigin)

  return (
    Object.assign({},
      {...props},
      { transforms: transforms },
      { textOrigins: textOrigins },
      { dividerOrigins: dividerOrigins },
      { maskOrigin: newMaskOrigin }
    )
  )

}
