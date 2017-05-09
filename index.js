//@flow

//vendor
import { compose } from 'recompose';

//files
import Bubble from './Bubble';
import applyConfig from './hoc/applyConfig';
import offsetCalculator from './hoc/offsetCalculator';
import transformCalculator from './hoc/transformCalculator';
import textCalculator from './hoc/textCalculator';
import originCalculator from './hoc/originCalculator';

const addData = compose(
  originCalculator,
  transformCalculator,
  offsetCalculator,
  textCalculator,
  applyConfig
)

export default addData(Bubble);
