export type originTuple = [ number, number ];

export type dataObject = {
  cx: number,
  cy: number,
  r: number,
  origin: originTuple
};

export type defaultBubbleConfig = {

  children ?: Array <
    string | Array<string | object<string >>>,
  characterWidth: number,
  minTextWidth: number,
  paddingLrg: number,
  paddingSml: number,
  textHeight: number,
  verticalMargin: number,
  columns: number,
  size: string,
  underlineAdjustment: number,
  speachDirection: String <
  | 'top-left' | 'top-right'
  | 'right-top' | 'right-bottom'
  | 'bottom-left' | 'bottom-right'
  | 'left-bottom' | 'bottom-right'
  >,
  dimentions: {
    x: number,
    y:number
  },
  origin: {
    x: number,
    y: number
  }
}

export type optionalBubbleConfig = {
  children ?: Array<
    string | [ string, { target: string }
    ]>,
  characterWidth ?: number,
  minTextWidth ?: number,
  paddingLrg ?: number,
  paddingSml ?: number,
  textHeight ?: number,
  verticalMargin ?: number,
  columns ?: number,
  size ?: string,
  underlineAdjustment ?: number,
  speachDirection ?: String <
  | 'top-left' | 'top' | 'top-right'
  | 'right-top' | 'right' | 'right-bottom'
  | 'bottom-left' | 'bottom' | 'bottom-right'
  | 'left-bottom' | 'bottom' | 'bottom-right'
  >
}

export textConfig from './setTextDimentions';
export sizingObject from './helpers/findRadius';
