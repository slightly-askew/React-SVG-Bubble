//@flow
import React from 'react';
//vendor
import { compose } from 'recompose';

//files
import Bubble from './Bubble';
import applyConfig from './hoc/applyConfig';
import offsetCalculator from './hoc/offsetCalculator';
import transformCalculator from './hoc/transformCalculator';
import textCalculator from './hoc/textCalculator';
import originCalculator from './hoc/originCalculator';
import pathCalculator from './hoc/pathCalculator';

const addData = compose(
  pathCalculator,
  originCalculator,
  transformCalculator,
  offsetCalculator,
  textCalculator,
  applyConfig
)

export default (props) => {

  const newProps = (addData(props));
  console.log(newProps)
  return (
    <Bubble {...newProps}>{props.children}</Bubble>
  )
}
