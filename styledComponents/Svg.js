//@flow

//vendor
import styled from 'styled-components';

export const Svg = (styled.svg.attrs({

  className: "bubble__svg",
  viewBox: (props) => {
    console.log (props.svgDimensions);
    return `0 0 ${props.svgDimensions.x} ${props.svgDimensions.y}`;
  }

})`
  will-change: transform opacity;
  transition: all 0s 0.2s;
  fill: white;
  display: block;
  height: calc(${({svgDimensions}) => svgDimensions.y} * 0.0583em);
  transform: scale(0);
  opacity: 0;
  position: absolute;
  right: -1.25em;
  padding: 2em 0.5em 0.5em 0.5em;
`)
