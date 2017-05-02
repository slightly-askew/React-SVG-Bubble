

import React from 'react';
import styled from 'styled-components';

const bubblePoints = [
  {"M": [0, 30]},
  {"C": [[0,23.375],[5.370,18],[12,18]]},
  {"L": [36,18]},
  {"L": [108,18]},
  {"L": [126,18]},
  {"C": [[141.100,18],[135.268,0],[144,0]]},
  {"C": [[152.731,0],[147.100,18],[162,18]]},
  {"L": [168,18]},
  {"C": [[174.624,18],[180,23.376],[180,30]]},
  {"L": [180,35]},
  {"L": [180,36]},
  {"L": [180,42]},
  {"C": [[180,48.624],[174.617,54],[168,54]]},
  {"L": [108,54]},
  {"L": [36,54]},
  {"L": [12,54]},
  {"C": [[5.37257721,54],[0,48.624],[0,42]]},
  {"L": [0,36]},
  {"L": [0,35]},
  {"L": [0,30]},
  {"Z": []}
]

const pointsGen = (oldPointsAry, { xOffset, yOffset }, xSplit = 36, ySplit = 35) => {

  const getKeyValuePairs = oldPointsAry.reduce((a: [], p: {}) => a.concat(Object.entries(p)), []);

  const adjustX = (x) => x > xSplit ? x + xOffset : x;
  const adjustY = (y) => y > ySplit ? y + yOffset : y;

  const newValues = (pairs) => pairs.map((p, i) => {
    switch (p[0]) {
      case "C":
        return `C${p[1].map(c => `${adjustX(c[0])},${adjustY(c[1])}`).join(' ')}`;
      case ("L"):
        return `${p[0]}${adjustX(p[1][0])} ${adjustY(p[1][1])}`;
      case ("M"):
        return `${p[0]}${adjustX(p[1][0])} ${adjustY(p[1][1])}`;
      default:
        return `${p[0]}`;
    }
  });

  return newValues(getKeyValuePairs).join(' ');
};

const BubbleSvg = styled.svg.attrs({
  className: "bubble__svg",
  viewBox: props => {
    const { width, height } = props.bubbleData;
    return `0 0 ${width} ${height}`;
  },
})`
  will-change: transform visibility opacity;
  transition: all 0s 0.2s;
  fill: white;
  display: block;
  height: calc(${props => props.bubbleData.height} * 0.0583em);
  transform: scale(0);
  opacity: 0;
  position: absolute;
  right: -1.6em;
  padding: 2em 0.5em 0.5em 0.5em;
`

const BubblePath = styled.path.attrs({
  className: "bubble__path",
  d: props => pointsGen(bubblePoints, props.bubbleData),
  transform: props => `rotate(${props.position === "below" ? 0 : 180})`
})`
  fill: white;
`

const Circle = styled.circle`
    fill: white;
    transform: scale(0);
    will-change: transform;
    transition: transform 0.2s ease-out 0.1s;
    transform-origin: ${props => props.transformOrigin};
`

const MagicCircle = (props) => {
  const getCoords = (props) => {
    const width = props.bubbleData.width;
    const height = props.bubbleData.height;
    const r = Math.max(width*1.2, height*1.2);
    return props.position === 'below' ?
    {
      'cx': width - 36,
      'cy': 0,
      'r' : `${r}`,
      'transformOrigin': `${width - 36}px 0px`
    } :
    {
      'cx': 36,
      'cy': height,
      'r' : `${r}`,
      'transformOrigin': `36px ${height}px`
   };
  }
  const { ...coords } = getCoords(props);
  return (
    <Circle {...coords} className="bubble__circle" />
  )
}

const GText = styled.g`
  font-size: 18px;
  font-family: 'Fira Mono';
  fill: black;
  letter-spacing: -0.8px;
  opacity: 0;
  transition: opacity 0.2s;
  will-change: opacity;
`

const GItem = styled.g`
  cursor: pointer;
  &:hover {
    & rect {
      transform: scaleX(1);
    }
  }
`

const Underline = styled.rect`
  height: 2px;
  fill: black;
  transform-origin: center left;
  transform: scaleX(0);
  will-change: transform;
  transition: transform 0.2s ease-out;
`

const ListItems = (props) => {
  const startingPos = props.position === 'below' ? 58 : 36;
  const textHeight = 36;
  const middleMargin = 9;

  const yPos = (i) => startingPos + (i * textHeight) + (i * middleMargin);

  const makeTextElements = (props) => {
    if(props.children) {
      return (
        <GText className="bubble__text">
          {props.children.map((child, i) => {
            return (
              <GItem key={i+1}>
                <text x="36" y={yPos(i)}>{child}</text>
                <Underline x="36" y={yPos(i)+4.5} width={child.length * 10}></Underline>
              </GItem>
            )})}
        </GText>
      )
    }
    return null;
  }

  return makeTextElements(props.bubbleData);
}

const Bubble = (props: Object) => {
  const bubbleData = props.bubbleData;
  return(
    <BubbleSvg {...props}>
      <mask id='circleMask'>
        <rect height="100%" width="100%" x="0" y="0" fill="#000"/>
        <MagicCircle bubbleData={bubbleData} position={props.position} />
      </mask>
      <BubblePath bubbleData={bubbleData} position={props.position} transform="scale(1)" mask="url(#circleMask)"/>
      <ListItems bubbleData={bubbleData} position={props.position} />
    </BubbleSvg>
  )
}

export default Bubble;
