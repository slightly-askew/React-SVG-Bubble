//@flow

//vendor
import styled from 'styled-components';
import { pure } from 'recompose';

//css
export const TextGroup = pure(styled.g`

  font-size: 18px;
  font-family: 'Fira Mono';
  fill: black;
  letter-spacing: -0.8px;
  opacity: 0.8;
  transition: opacity 0.2s;
  will-change: opacity;

  ${({isActive}:{isActive: boolean}):mixed => (
    isActive && `

    opacity: 1;
    transition: opacity 0.2s 0.2s;

  `)}
`)
