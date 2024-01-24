import SvgWrapper from '@components/atoms/SvgWrapper';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import IconProps from './interfaceProps';

export const ExploreIcon = ({width, height, color}: IconProps) => {
  return (
    <SvgWrapper
      width={width}
      height={height}
      aspectRatio={25 / 24}
      children={
        <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.4444 19.7006C18.3552 18.6064 19.2607 17.6929 20.3455 17.783C20.5336 17.7986 20.7587 17.8671 20.988 17.9368C21.0101 17.9435 21.0323 17.9502 21.0544 17.9569C21.0744 17.9629 21.0944 17.9689 21.1144 17.975C21.3251 18.0383 21.5347 18.1013 21.6942 18.1874C22.6094 18.6818 22.9049 19.8631 22.3317 20.7363C22.2318 20.8884 22.0769 21.0441 21.9212 21.2007C21.9064 21.2156 21.8916 21.2305 21.8769 21.2454C21.8621 21.2602 21.8474 21.2752 21.8326 21.2901C21.6774 21.4471 21.523 21.6034 21.3722 21.7041C20.5066 22.2823 19.3355 21.9843 18.8454 21.0611C18.76 20.9002 18.6975 20.6888 18.6347 20.4762C18.6288 20.4561 18.6228 20.4359 18.6168 20.4157C18.6102 20.3934 18.6035 20.3711 18.5969 20.3488C18.5278 20.1175 18.4599 19.8903 18.4444 19.7006Z"
            fill={color} //"#94A3B8"
          />
          <Path
            d="M20.7528 11.1429C20.7528 16.1924 16.6947 20.2858 11.6889 20.2858C6.68304 20.2858 2.625 16.1924 2.625 11.1429C2.625 6.09342 6.68304 2 11.6889 2C16.6947 2 20.7528 6.09342 20.7528 11.1429Z"
            fill={color} //"#94A3B8"
          />
        </Svg>
      }
    />
  );
};

export default ExploreIcon;
