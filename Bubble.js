//@flow

//vendor
import React from 'react';

//styledComps
import { Svg, Path, Circle } from './styledComponents';
import Text from './Text';
import Dividers from './Dividers';


const Bubble = (props) => {

  return(
    <Svg>
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
