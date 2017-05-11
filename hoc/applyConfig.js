//@flow

import React, { Component } from 'react';
import defaultConfig from '../config';

export default (props) => (

  Object.assign({},{...defaultConfig},{...props})
)
