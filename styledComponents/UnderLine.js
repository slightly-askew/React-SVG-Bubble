//@flow

//vendor
import styled from 'styled-components';
import { onlyUpdateForKeys } from 'recompose';

//type
type Props = {
  origin: {
    x: number,
    y: number,
  },
  width: number
}

const enhance = onlyUpdateForKeys(['config', 'chilid'])

export default enhance(styled.rect`

  height: 2px;
  fill: black;
  transform-origin: center left;
  transform: scaleX(0);
  will-change: transform;
  transition: transform 0.2s ease-out;

  ${({ origin, width }:Props, child:string):string => `

    x: ${origin.x};
    y: ${origin.y + 4.5};
    width: ${width};

  `}
`);
