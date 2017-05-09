//@flow

import styled from 'styled-components';

type coordinates = {
  'x': number,
  'y': number
}

export default styled.rect`

  fill: black;

  ${({
    origin,
    width,
    height
    }:{
      origin: coordinates,
      width: number,
      height: number
      }) => `

        x: ${origin.x};
        y: ${origin.y};
        height: ${height};
        width: ${width}
      `}
`
