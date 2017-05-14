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

type coordinates = {
  'x': number,
  'y': number
}

const addData = compose(
  pathCalculator,
  originCalculator,
  transformCalculator,
  offsetCalculator,
  textCalculator,
  applyConfig
)

export default (props: {
  children: {},
  dividerOrigins: coordinates[],
  dividerWidth: number,
  textDimensions: coordinates,
  pathData: string,
  mask: string,
  textOrigins: coordinates[],
  textWidths: number[],
  isActive: boolean,
  textItems: Array<{
    label: string,
    target: string
  }>
}) => (

  <Bubble {...addData(props)}>
    {props.children}
  </Bubble>

)
