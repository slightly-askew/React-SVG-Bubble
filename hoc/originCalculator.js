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
}):{} => {

  const { morph, flipText } = transforms

  const orientate = compose(
    morph,
    flipText
  )

  const firstOrigin = orientate(textboxOrigin);

  const mapToBox = mapOrigins(firstOrigin);

  const textOrigins = mapToBox(textGrid);
  const dividerOrigins = mapToBox(dividerGrid);

  return (
    Object.assign({},
      {...props},
      { transforms: transforms },
      { textOrigins: textOrigins },
      { dividerOrigins: dividerOrigins }
    )
  )

}
