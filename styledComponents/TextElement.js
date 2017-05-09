//@flow

import styled from 'styled-components';
import { onlyUpdateForKeys } from 'recompose';

const enhance = onlyUpdateForKeys(['config','i']);

export default enhance(styled.text`
  ${({origin}): string => `

    x: ${origin.x};
    y: ${origin.y};

  `}
`)
