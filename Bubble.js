//@flow

//vendor
import React from 'react';

//styledComps
import { Svg, Circle } from './styledComponents/index';
import Text from './Text';
import Dividers from './Dividers';
import Path from './Path'

type coordinates = {
  'x': number,
  'y': number
}

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
}) => {
  console.log(props);
  return(
    <Svg {...props}>
      <mask id='circleMask'>
        <rect height="100%" width="100%" x="0" y="0" fill="#000"/>
        <Circle {...props} />
      </mask>
      <Path {...props} mask="url(#circleMask)"/>
      <Text {...props} mask="url(#circleMask)">{props.children}</Text>
      <Dividers mask="url(#circleMask)" {...props}/>
    </Svg>
  )
}
