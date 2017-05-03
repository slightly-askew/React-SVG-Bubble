//@flow

//vendor
import styled from 'styled-components';

export default styled.g`
  cursor: pointer;
  &:hover {
    & rect {
      transform: scaleX(1);
    }
  }
`
