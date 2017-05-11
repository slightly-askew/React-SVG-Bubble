//@flow

//vendor
import styled from 'styled-components';
import { onlyUpdateForKeys } from 'recompose';

//files
import findRadius from '../helpers/findRadius';

type props = {
  maskOrigin: {
    'x': number,
    'y': number
  },
  svgDimensions: {
    'x': number,
    'y': number
  }
}


export const Circle = styled.circle.attrs({

  className: 'bubble__mask'
})`

    fill: white;
    transform: scale(0);
    will-change: transform;
    transition: transform 0.2s ease-out 0.1s;

    ${({maskOrigin, svgDimensions}: props):string => {

      console.log(maskOrigin)

      const cx = maskOrigin.x;
      const cy = maskOrigin.y;

      return `

        cx: ${cx};
        cy: ${cy};
        r: ${findRadius(svgDimensions, maskOrigin)};
        transform-origin: ${cx}px ${cy}px;

    `}}
`
