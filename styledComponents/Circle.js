//@flow

//vendor
import styled from 'styled-components';
import { onlyUpdateForKeys } from 'recompose';

//props
type Props = {
  config : {
    origin: [number,number],
    r: number
  },
  isActive: boolean
}


//hoc
const enhance: ()=>React$Component<*> = onlyUpdateForKeys(['config', 'isActive']);

export default enhance(styled.circle`

    fill: white;
    transform: scale(0);
    will-change: transform;
    transition: transform 0.2s ease-out 0.1s;

    ${({config}: Props):string => {
      const cx = config.origin[0];
      const cy = config.origin[1];

      return `

        cx: ${cx};
        cy: ${cy};
        r: ${config.r};
        transform-origin: ${cx}px ${cy}px

    `}}

    ${({isActive}: Props) => `

      transform: scale(1)

    `}

`)
