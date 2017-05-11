//@flow

import styled from 'styled-components';

export const TextElement = styled.text.attrs({

  x: ({origin}) => origin.x,
  y: ({origin}) => origin.y + 28,

})``
