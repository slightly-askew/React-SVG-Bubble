//@flow

//vendor
import PropTypes from 'react-prop-types/lib/all';
import styled from 'styled-components';
import { compose, setPropTypes, onlyUpdateForPropTypes, flattenProps } from 'recompose';

//hoc
const enhance = compose(
  onlyUpdateForPropTypes,
  setPropTypes({
    svgData: PropTypes.Object.isRequired
  })
)

export default enhance(styled.svg.attrs({
  className: "bubble__svg",
  viewBox: ({dimensions}) => {
    return `0 0 ${dimensions.x} ${dimensions.y}`;
  },
})`
  will-change: transform opacity;
  transition: all 0s 0.2s;
  fill: white;
  display: block;
  height: calc(${({dimensions}) => dimensions.y} * 0.0583em);
  transform: scale(0);
  opacity: 0;
  position: absolute;
  right: -1.6em;
  padding: 2em 0.5em 0.5em 0.5em;
`)
