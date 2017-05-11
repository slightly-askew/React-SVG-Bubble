//@flow

import React from 'react'

//this component is part of an SVG mask.
//do not change the fill unless you want to alter the opacity of the path
//if you want to change the fill color of the bubble you can do so in styledComponents > Svg


export default ({pathData, mask}: {pathData: string, mask: string}) => (
  <path
    mask={mask}
    d={pathData}
    fill='white'
  />
)
