//@flow

import { compose } from 'recompose';

type Props = {
  minTextWidth: number,
  textDimensions: {
    x: number,
    y: number
  }
}

const getWidthOffset = (
  min: number,
  textWidth: number
): number => (
  textWidth > min ?
  textWidth - min : 0
)

export default (props: Props) => (
    Object.assign({}, props, {
      pathOffsets : {
        x: getWidthOffset(props.minTextWidth, props.textDimensions.x),
        y: props.textDimensions.y,
      }
  })
  )
