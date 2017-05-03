

function <T> ({svgData, children}: {width: number, height: number}, {children: mixed}):T {
 return (
   <Svg/>
 )
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
