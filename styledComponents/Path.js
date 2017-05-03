//@flow

//vendor
import PropTypes from 'react-prop-types/lib/all';
import styled from 'styled-components';
import { compose, setPropTypes, onlyUpdateForPropTypes, flattenProps } from 'recompose';

//hoc
const enhance = compose(
  flattenProps,
  onlyUpdateForPropTypes,
  setPropTypes({
    svgData: PropTypes.Object.isRequired
  })
)

export default enhance(styled.path.attrs({
  className: "bubble__path",
  d: props => pointsGen(bubblePoints, props.bubbleData),
  transform: props => `rotate(${props.position === "below" ? 0 : 180})`
})`
  fill: white;
`)
