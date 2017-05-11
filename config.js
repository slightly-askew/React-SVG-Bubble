
import type defaultBubbleConfig from './types';

/*------------------------------------*\
  DEFAULT CONFIG

  Anything you change here will affect
  all bubbles globally.
  If you plan to use different bubble
  types accross your aplication, it
  may be prudent to pass a 'bubbleConfig'
  prop object; declaring settings
  above on a per-component basis, which
  are then merged with defaults on
  component render.
\*------------------------------------*/

const defaultConfig : defaultBubbleConfig = {
  characterWidth: 10, //future - check Dom node for length of text
  minTextWidth: 72,
  textHeight: 36, // future - check DOM node for height of text.
  textMargin: 9,
  textColumns: 1,
  //size: `1em`, // defaults 1; gets interpolated into the root styled-component (although beware current sizing.)
  svgDimensions: { //viewboxDimensions - do not change unless different path svg is used.
    x: 180,
    y: 54
  },
  speachDirection: 'top-right',
  maskOrigin: {
    x: 144,
    y: 0
  },
  thresholds: {
    x: 36,
    y: 35
  },
  dividerWidth: 2,
  textboxOrigin: {
    x: 36,
    y: 36
  }
}

export default defaultConfig;
