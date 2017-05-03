//@flow

//vendor
import styled from 'styled-components';
import { onlyUpdateForKeys } from 'recompose';

const enhance = onlyUpdateForKeys(['config', 'chilid'])

export default enhance(styled.rect`

  height: 2px;
  fill: black;
  transform-origin: center left;
  transform: scaleX(0);
  will-change: transform;
  transition: transform 0.2s ease-out;

  ${({ underline }: Object<mixed>, child:string):string => `

    x: ${underline.x};
    y: ${underline.y};
    width: ${underline.width(child)};

  `}
`);
