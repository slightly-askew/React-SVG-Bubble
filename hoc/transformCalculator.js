//@flow

import { morph, flip, offsetPath, flipPosition } from './transforms';

type Coord = {
  'x': number,
  'y': number
}


const getPosTuple = (string: string): string[] => (

  string.split('-')
);

const addMorph = (positions: string[]) => (coordinates: Coord): Coord  => {
  if (positions[0] === ('left' || 'right')) {
    return morph(coordinates)
  }
  return coordinates
}


const addFlips = (direction:string) => (flipFunc: (*)=>(*)) => (coordinates: Coord): Coord => {

  switch (direction) {
    case 'top-left' || 'right-bottom':
      return flipFunc('x')(coordinates)

    case 'bottom-left' || 'right-top':
      return flipFunc('x','y')(coordinates)

    case 'bottom-right' || 'left-top':
      return flipFunc('y')(coordinates)

    default:
      return coordinates;
  }
}

export default ({
  speachDirection,
  ...props
}: {
  speachDirection: string,
  props: {
    svgDimensions: Coord,
    textDimensions: Coord,
    pathOffsets: Coord,
    thresholds: Coord
  }
}): {} => {

  const positions: string[] = getPosTuple( speachDirection );

  const configuredFlips = addFlips( speachDirection )

  const axisFlip = flip( props.svgDimensions )

  const textFlip = flipPosition( props.svgDimensions, props.textDimensions )

  const transforms = {
    flip: configuredFlips( axisFlip),
    morph: addMorph( positions ),
    flipText: configuredFlips( textFlip ),
    offset: offsetPath( props.pathOffsets, props.thresholds )
  }

  return Object.assign({}, { ...props }, { speachPositions: positions }, { transforms: transforms })

}
