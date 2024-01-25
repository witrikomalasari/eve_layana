import {size, typeFont, weight} from '@theme/fonts';
import {TextStyle} from 'react-native';

export type EveLayanaTextType = 'normalText' | 'heading' | 'subTitle';

const normalText: TextStyle = {
  fontWeight: weight.normal,
  fontFamily: typeFont.plusJakartaSans,
  fontSize: size.font14,
  lineHeight: 17.64,
};

const heading: TextStyle = {
  fontWeight: weight.semiBold,
  fontFamily: typeFont.clashGrotesk,
  fontSize: size.font28,
  lineHeight: 34.44,
};

const subTitle: TextStyle = {
  fontWeight: weight.semiBold,
  fontFamily: typeFont.clashGrotesk,
  fontSize: size.font18,
  lineHeight: 22.14,
};

export const Preset: {[id: string]: TextStyle} = {
  normalText,
  heading,
  subTitle,
};

export const weightPreset: {[id: string]: TextStyle} = {
  normal: {fontWeight: weight.normal},
  medium: {fontWeight: weight.medium},
  semiBold: {fontWeight: weight.semiBold},
  bold: {fontWeight: weight.bold},
};
