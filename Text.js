//@flow

import React from 'react';
import { TextGroup, TextComponent, TextElement, Underline } from './styledComponents';

type coordinates = {
  'x': number,
  'y': number
}

export default ({
  textOrigins,
  textWidths,
  isActive,
  textItems
}: {
  textOrigins: coordinates[],
  textWidths: number[],
  isActive: boolean,
  textItems: Array<{
    label: string,
    target: string
  }>
}): React$Element<*> => (

  <TextGroup>

    {textItems.map((child, i) => {

      const origin = textOrigins[i];
      const width = textWidths[i]

      return (
        <TextComponent key={i} isActive={isActive} target={child.target}>
          <TextElement origin={origin} >
              {child.label}
          </TextElement>
          <Underline origin={origin} width={width}/>
        </TextComponent>
      )
    })}

  </TextGroup>

)
