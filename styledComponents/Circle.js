//@flow

//vendor
import styled from 'styled-components';
import { onlyUpdateForKeys } from 'recompose';

//files
import findRadius from '../helpers/findRadius';
import alterCoordinates from '../helpers/alterCoordinates';


//type
type props = {
  dimensions: {'x': number, 'y': number},
  origin: {'x': number, 'y': number},
  isActive: boolean
}


//hoc
const enhance: ()=>Class<React$Component<*>> = onlyUpdateForKeys(['dimensions', 'origin', 'isActive']);

export default enhance(styled.circle`

    fill: white;
    transform: scale(0);
    will-change: transform;
    transition: transform 0.2s ease-out 0.1s;

    ${({dimensions, origin, ...props}: props):string => {

      const newOrigin = alterCoordinates(dimensions, props)(origin);

      const cx = newOrigin['x'];
      const cy = newOrigin['y'];

      return `

        cx: ${cx};
        cy: ${cy};
        r: ${findRadius(dimensions, [cx,cy])};
        transform-origin: ${cx}px ${cy}px

    `}}

    ${({isActive}: props) => `

      transform: scale(1)
    `}
`)
