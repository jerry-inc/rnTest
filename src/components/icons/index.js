import React from 'react';
import {Image} from 'react-native';

type Props = {
  name: string,
  width?: number,
  height?: number,
};

const Icon = (props: Props) => {
  const {name, width, height} = props;
  let source = '';
  switch (name) {
    case 'home':
      source = require('../../assets/icon/home.png');
      break;
    case 'home-inactive':
      source = require('../../assets/icon/home_d.png');
      break;
    case 'bell':
      source = require('../../assets/icon/bell.png');
      break;
    case 'bell-inactive':
      source = require('../../assets/icon/bell_d.png');
      break;
  }
  return (
    <>
      <Image
        source={source}
        style={{
          width: width || 36,
          height: height || 36,
        }}
      />
    </>
  );
};

export default Icon;
