//@flow

import React from 'react';
import { TextGroup, TextComponent, TextElement, Underline } from './styledComponents';

import textConfig from './types';


const Text = ({ config, isActive, children, ...props }:{
    config: textConfig,
    isActive: boolean,
    children: mixed,
    props?: Array<mixed>}): React$Element => (

      <TextGroup>

      {children.map((child, i) => (

        <TextComponent key={i} isActive={isActive}>
          <TextElement {...config} i={i}>{child}</TextElement>
          <Underline {...config} child={child}/>
        </TextComponent>

      ))}
    </TextGroup>
)
