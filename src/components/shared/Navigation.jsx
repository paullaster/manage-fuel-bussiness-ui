import React from 'react';
import Logo from '../Logo';
import { Hide } from '../../packages/utils';

const Navigation = ({links = []}) => {

  // if ( Hide('/admin')) return null;

  return (
    <div>
        <Logo height = '16vh' width = '16vw'/>
        Navigation
        </div>
  )
}

export default Navigation