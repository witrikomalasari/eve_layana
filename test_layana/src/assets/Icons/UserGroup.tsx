import SvgWrapper from '@components/atoms/SvgWrapper';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import IconProps from './interfaceProps';

export const UserGroup = ({width, height, color}: IconProps) => {
  return (
    <SvgWrapper
      width={width}
      height={height}
      aspectRatio={20 / 21}
      children={
        <Svg width="20" height="21" viewBox="0 0 20 21" fill="none">
          <Path
            d="M12.9168 6.74998C12.9168 8.36081 11.611 9.66665 10.0002 9.66665C8.38933 9.66665 7.0835 8.36081 7.0835 6.74998C7.0835 5.13915 8.38933 3.83331 10.0002 3.83331C11.611 3.83331 12.9168 5.13915 12.9168 6.74998Z"
            fill={color} //"white"
          />
          <Path
            d="M15 14.25C15 15.8608 12.7614 17.1666 10 17.1666C7.23858 17.1666 5 15.8608 5 14.25C5 12.6391 7.23858 11.3333 10 11.3333C12.7614 11.3333 15 12.6391 15 14.25Z"
            fill={color} //"white"
          />
          <Path
            d="M5.93488 4.66669C6.08276 4.66669 6.22714 4.6812 6.36655 4.70882C6.02692 5.31207 5.83317 6.00842 5.83317 6.75002C5.83317 7.47357 6.01759 8.15404 6.342 8.74699C6.21021 8.77154 6.0741 8.78441 5.93488 8.78441C4.7562 8.78441 3.80069 7.86262 3.80069 6.72555C3.80069 5.58847 4.7562 4.66669 5.93488 4.66669Z"
            fill={color} //"white"
          />
          <Path
            d="M4.53928 16.3217C4.06602 15.7559 3.74984 15.0617 3.74984 14.25C3.74984 13.4632 4.04698 12.7867 4.49632 12.2306C2.90909 12.3537 1.6665 13.2219 1.6665 14.2745C1.6665 15.337 2.93092 16.2115 4.53928 16.3217Z"
            fill={color} //"white"
          />
          <Path
            d="M14.1667 6.75002C14.1667 7.47357 13.9823 8.15404 13.6578 8.74699C13.7896 8.77155 13.9257 8.78441 14.065 8.78441C15.2436 8.78441 16.1992 7.86262 16.1992 6.72555C16.1992 5.58847 15.2436 4.66669 14.065 4.66669C13.9171 4.66669 13.7727 4.6812 13.6333 4.70882C13.9729 5.31207 14.1667 6.00842 14.1667 6.75002Z"
            fill={color} //"white"
          />
          <Path
            d="M15.4606 16.3217C17.0689 16.2115 18.3333 15.337 18.3333 14.2745C18.3333 13.2219 17.0908 12.3537 15.5035 12.2306C15.9529 12.7867 16.25 13.4632 16.25 14.25C16.25 15.0617 15.9338 15.7559 15.4606 16.3217Z"
            fill={color} //"white"
          />
        </Svg>
      }
    />
  );
};

export default UserGroup;
