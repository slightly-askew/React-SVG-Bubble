//@flow

import { morph, flip, offsetPath, flipPosition } from '../transforms';
import diffDimensions from '../helpers/diffDimensions'

type Coord = {
  'x': number,
  'y': number
}

const getPosTuple = (string: string): string[] => (

  string.split('-')
);

const addMorph = (positions: string[]) => (coordinates: Coord): Coord  => {
  if (positions[0] === 'left' || positions[0] === 'right') {
    return morph(coordinates)
  }
  return coordinates
}

const addFlips = (direction:string) => (flipFunc) => (coordinates: Coord): Coord => {
  switch (direction) {

    case 'top-left':
    case 'right-bottom':
      return flipFunc('x')(coordinates)

    case 'bottom-left':
    case 'right-top':
      return flipFunc('x','y')(coordinates)

    case 'bottom-right':
    case 'left-top':
      return flipFunc('y')(coordinates)

    default:
      return coordinates;
  }
}

export default ({
  speachDirection,
  svgDimensions,
  thresholds,
  pathOffsets,
  ...props
}: {
  speachDirection: string,
  svgDimensions: Coord,
  thresholds: Coord,
  pathOffsets: Coord,
  props: {
    textDimensions: Coord
  }
}): {} => {

  const positions: string[] = getPosTuple( speachDirection );

  const morph = addMorph ( positions )

  const diffs = diffDimensions(svgDimensions, morph(svgDimensions))

  const diffedOffsets = {
    x: pathOffsets.x - diffs.x,
    y: pathOffsets.y - diffs.y
  }

  const morphedDimensions = morph(svgDimensions)

  const diffedDimensions = {
    x: morphedDimensions.x + diffedOffsets.x,
    y: morphedDimensions.y + diffedOffsets.y,
  }

  const morphedThresholds = morph(thresholds)


  const configuredFlips = addFlips( speachDirection )

  const axisFlip = flip( diffedDimensions )

  const textFlip = flipPosition(
    diffedDimensions,
    props.textDimensions)

  const transforms = {
    flip: configuredFlips( axisFlip),
    morph: morph,
    flipText: configuredFlips( textFlip ),
    offset: offsetPath(
      diffedOffsets,
      morphedThresholds
    )
  }

  return Object.assign({},
    { ...props },
    { thresholds: morphedThresholds },
    { transforms: transforms },
    { pathOffsets: diffedOffsets },
    { svgDimensions: diffedDimensions },
  )

}
