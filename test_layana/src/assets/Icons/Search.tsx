import SvgWrapper from '@components/atoms/SvgWrapper';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import IconProps from './interfaceProps';

export const Search = ({width, height, color}: IconProps) => {
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
            d="M21.7883 22.2883C22.0706 22.006 22.0706 21.5483 21.7883 21.2659L18.1224 17.6002C19.4884 16.0007 20.3133 13.925 20.3133 11.6566C20.3133 6.59956 16.2137 2.5 11.1566 2.5C6.09956 2.5 2 6.59956 2 11.6566C2 16.7137 6.09956 20.8133 11.1566 20.8133C13.4249 20.8133 15.5006 19.9885 17.1 18.6225L20.7659 22.2883C21.0483 22.5706 21.506 22.5706 21.7883 22.2883Z"
            fill={color} //"#64748B"
          />
        </Svg>
      }
    />
  );
};

export default Search;
