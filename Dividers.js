//@flow

import React from 'react';
import { Divider } from './styledComponents';

type coordinates = {
  'x': number,
  'y': number
}

export default ({
  dividerOrigins,
  dividerWidth,
  textDimensions
}: {
  dividerOrigins: coordinates[],
  dividerWidth: number,
  textDimensions: {
    x: number,
    y: number
  }
}): React$Element<*> => (
  <g>
    {dividerOrigins.map(origin => (
      <Divider
        origin={origin}
        width={dividerWidth}
        height={textDimensions.y}
      />
    ))}
  </g>
)
