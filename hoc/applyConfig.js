//@flow

import React, { Component } from 'react';
import type { defaultBubbleConfig } from '../types';
import defaultConfig from '../config';

export default function applyConfig (
  WrappedComponent: Class<React$Component<*, *, *>>): Class<React$Component<*, *, *>> {
  return class extends Component {
    state: defaultBubbleConfig = { defaultConfig };
  render() {
    const props = Object.assign(
      {},
      this.state,
      this.props
    )
    return(
      <WrappedComponent {...props}/>
    )
  }
}}
