
import sizingCalculator from './sizingCalculator'


export default function (props) {
  const adjustForPosition = positionConfigorator(props);
  const sizing = sizingCalculator(props)

}
