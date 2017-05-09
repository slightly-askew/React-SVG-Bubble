//@flow

import React from 'react';
import { compose } from 'recompose'
import { TextGroup, TextComponent, TextElement, Underline } from './styledComponents';
import mapOrigins from './helpers/mapOrigins';

type coordinates = {
  'x': number,
  'y': number
}

export default ({
  textOrigins,
  textWidths,
  isActive,
  children
}: {
  textOrigins: coordinates[],
  textWidths: number[],
  isActive: boolean,
  children: Array<{
    label: string,
    target: string
  }>
}): React$Element<*> => (

  <TextGroup>

    {children.map((child, i) => {

      const origin = textOrigins[i];
      const width = textWidths[i]

      return (
        <TextComponent key={i} isActive={isActive} target={child.target}>
          <TextElement origin={origin}>
              {child.label}
          </TextElement>
          <Underline origin={origin} width={width}/>
        </TextComponent>
      )
    })}

  </TextGroup>

)
