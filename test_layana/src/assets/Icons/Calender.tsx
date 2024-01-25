import {SvgWrapper} from '@components/atoms';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

export const Calender = ({width, height, color}) => {
  return (
    <SvgWrapper
      width={width}
      height={height}
      aspectRatio={24 / 25}
      children={
        <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
          <Path
            d="M7.75 3C7.75 2.58579 7.41421 2.25 7 2.25C6.58579 2.25 6.25 2.58579 6.25 3V4.57926C4.81067 4.69451 3.86577 4.97737 3.17157 5.67157C2.47737 6.36577 2.19451 7.31067 2.07926 8.75H21.9207C21.8055 7.31067 21.5226 6.36577 20.8284 5.67157C20.1342 4.97737 19.1893 4.69451 17.75 4.57926V3C17.75 2.58579 17.4142 2.25 17 2.25C16.5858 2.25 16.25 2.58579 16.25 3V4.5129C15.5847 4.5 14.839 4.5 14 4.5H10C9.16097 4.5 8.41527 4.5 7.75 4.5129V3Z"
            fill={color} //"#94A3B8"
          />
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2 12.5C2 11.661 2 10.9153 2.0129 10.25H21.9871C22 10.9153 22 11.661 22 12.5V14.5C22 18.2712 22 20.1569 20.8284 21.3284C19.6569 22.5 17.7712 22.5 14 22.5H10C6.22876 22.5 4.34315 22.5 3.17157 21.3284C2 20.1569 2 18.2712 2 14.5V12.5ZM17 14.5C17.5523 14.5 18 14.0523 18 13.5C18 12.9477 17.5523 12.5 17 12.5C16.4477 12.5 16 12.9477 16 13.5C16 14.0523 16.4477 14.5 17 14.5ZM17 18.5C17.5523 18.5 18 18.0523 18 17.5C18 16.9477 17.5523 16.5 17 16.5C16.4477 16.5 16 16.9477 16 17.5C16 18.0523 16.4477 18.5 17 18.5ZM13 13.5C13 14.0523 12.5523 14.5 12 14.5C11.4477 14.5 11 14.0523 11 13.5C11 12.9477 11.4477 12.5 12 12.5C12.5523 12.5 13 12.9477 13 13.5ZM13 17.5C13 18.0523 12.5523 18.5 12 18.5C11.4477 18.5 11 18.0523 11 17.5C11 16.9477 11.4477 16.5 12 16.5C12.5523 16.5 13 16.9477 13 17.5ZM7 14.5C7.55228 14.5 8 14.0523 8 13.5C8 12.9477 7.55228 12.5 7 12.5C6.44772 12.5 6 12.9477 6 13.5C6 14.0523 6.44772 14.5 7 14.5ZM7 18.5C7.55228 18.5 8 18.0523 8 17.5C8 16.9477 7.55228 16.5 7 16.5C6.44772 16.5 6 16.9477 6 17.5C6 18.0523 6.44772 18.5 7 18.5Z"
            fill={color} //"#94A3B8"
          />
        </Svg>
      }
    />
  );
};

export default Calender;
