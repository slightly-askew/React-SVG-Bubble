//@flow

//vendor
import React from 'react';

//styledComps
import { Svg, Circle } from './styledComponents/index';
import Text from './Text';
import Dividers from './Dividers';
import Path from './Path'


export default (props) => {
  return(
    <Svg {...props}>
      <mask id='circleMask'>
        <rect height="100%" width="100%" x="0" y="0" fill="#000"/>
        <Circle {...props} />
      </mask>
      <Path {...props} mask="url(#circleMask)"/>
      <Text {...props}>{props.children}</Text>
      <Dividers {...props}/>
    </Svg>
  )
}
