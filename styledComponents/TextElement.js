//@flow

import styled from 'styled-components';
import { onlyUpdateForKeys } from 'recompose';

const enhance = onlyUpdateForKeys(['config','i']);

export default enhance(styled.text`
  ${(
    { textElement }:{ textElement: {x: number, y: () => number}},
     i: number
  ): string => `

    x: ${textElement.x};
    y: ${textElement.y(i)};

  `}
`)
