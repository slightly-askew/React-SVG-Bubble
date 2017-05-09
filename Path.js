//@flow

import React from 'react'

import getOuterPath from './getOuterPath'
import pathData from './svgGenericPathData'
import { onlyUpdateForKeys } from 'recompose';

//this component is part of an SVG mask.
//do not change the fill unless you want to alter the opacity of the path
//if you want to change the fill color of the bubble you can do so in styledComponents > Svg
type coordinates = {
  'x': number,
  'y': number
}

const enhance = onlyUpdateForKeys('morph', 'flip', 'dimensions', 'offsets', 'thresholds')

type props = {
  xWidth: number,
  yHeight: number,
  morph: boolean,
  flip: coordinates,
  dimensions: coordinates,
  offsets: coordinates,
  thresholds: coordinates
}

export default enhance((props: props) => (
  <path
    d={getOuterPath(pathData, props)}
    fill='white'
  />
))
