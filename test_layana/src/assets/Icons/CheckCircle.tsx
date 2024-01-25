import SvgWrapper from '@components/atoms/SvgWrapper';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const CheckCircle = ({width, height, color}) => {
  return (
    <SvgWrapper
      width={width}
      height={height}
      aspectRatio={24 / 25}
      children={
        <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22 12.5C22 18.0228 17.5228 22.5 12 22.5C6.47715 22.5 2 18.0228 2 12.5C2 6.97715 6.47715 2.5 12 2.5C17.5228 2.5 22 6.97715 22 12.5ZM16.0303 9.46967C16.3232 9.76256 16.3232 10.2374 16.0303 10.5303L11.0303 15.5303C10.7374 15.8232 10.2626 15.8232 9.96967 15.5303L7.96967 13.5303C7.67678 13.2374 7.67678 12.7626 7.96967 12.4697C8.26256 12.1768 8.73744 12.1768 9.03033 12.4697L10.5 13.9393L12.7348 11.7045L14.9697 9.46967C15.2626 9.17678 15.7374 9.17678 16.0303 9.46967Z"
            fill={color} //"#D1D5DB"
          />
        </Svg>
      }
    />
  );
};

export default CheckCircle;
