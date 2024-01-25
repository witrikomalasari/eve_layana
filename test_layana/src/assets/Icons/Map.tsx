import {SvgWrapper} from '@components/atoms';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

export const Map = ({width, height, color}) => {
  return (
    <SvgWrapper
      width={width}
      height={height}
      aspectRatio={20 / 20}
      children={
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.0002 1.66669C6.31826 1.66669 3.3335 5.00217 3.3335 8.75002C3.3335 12.4685 5.46127 16.5104 8.78105 18.0621C9.55495 18.4238 10.4454 18.4238 11.2193 18.0621C14.5391 16.5104 16.6668 12.4685 16.6668 8.75002C16.6668 5.00217 13.6821 1.66669 10.0002 1.66669ZM10.0002 10C10.9206 10 11.6668 9.25383 11.6668 8.33335C11.6668 7.41288 10.9206 6.66669 10.0002 6.66669C9.07969 6.66669 8.3335 7.41288 8.3335 8.33335C8.3335 9.25383 9.07969 10 10.0002 10Z"
            fill={color} //"white"
          />
        </Svg>
      }
    />
  );
};

export default Map;
