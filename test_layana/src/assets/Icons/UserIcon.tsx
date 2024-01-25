import React from 'react';
import {Circle, Path, Svg} from 'react-native-svg';
import IconProps from './interfaceProps';
import {SvgWrapper} from '@components/atoms';

export const UserIcon = ({width, height, color}: IconProps) => {
  return (
    <SvgWrapper
      width={width}
      height={height}
      aspectRatio={24 / 25}
      children={
        <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
          <Circle cx="12" cy="6.5" r="4" fill="#0F172A" />
          <Path
            d="M20 18C20 20.4853 20 22.5 12 22.5C4 22.5 4 20.4853 4 18C4 15.5147 7.58172 13.5 12 13.5C16.4183 13.5 20 15.5147 20 18Z"
            fill={color} //"#1C274C"
          />
        </Svg>
      }
    />
  );
};

export default UserIcon;
