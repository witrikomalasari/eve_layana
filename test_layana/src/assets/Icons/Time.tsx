import React from 'react';
import {Path, Svg} from 'react-native-svg';
import IconProps from './interfaceProps';
import {SvgWrapper} from '@components/atoms';

export const Time = ({width, height, color}: IconProps) => {
  return (
    <SvgWrapper
      width={width}
      height={height}
      aspectRatio={20 / 21}
      children={
        <Svg width="20" height="21" viewBox="0 0 20 21" fill="none">
          <Path
            d="M0 10.5C0 5.78595 0 3.42893 1.46447 1.96447C2.92893 0.5 5.28595 0.5 10 0.5C14.714 0.5 17.0711 0.5 18.5355 1.96447C20 3.42893 20 5.78595 20 10.5C20 15.214 20 17.5711 18.5355 19.0355C17.0711 20.5 14.714 20.5 10 20.5C5.28595 20.5 2.92893 20.5 1.46447 19.0355C0 17.5711 0 15.214 0 10.5Z"
            fill={color} //"#94A3B8"
          />
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 5.75C10.4142 5.75 10.75 6.08579 10.75 6.5V10.1893L13.0303 12.4697C13.3232 12.7626 13.3232 13.2374 13.0303 13.5303C12.7374 13.8232 12.2626 13.8232 11.9697 13.5303L9.46967 11.0303C9.32902 10.8897 9.25 10.6989 9.25 10.5V6.5C9.25 6.08579 9.58579 5.75 10 5.75Z"
            fill={color} //"white"
          />
        </Svg>
      }
    />
  );
};

export default Time;
