//@flow

//vendor
import styled from 'styled-components';

export const TextComponent = styled.g`
  cursor: pointer;
  &:hover {
    & rect {
      transform: scaleX(1);
    }
  }
`
