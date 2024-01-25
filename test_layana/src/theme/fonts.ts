import {TextStyle} from 'react-native';

const size = {
  font10: 10,
  font12: 12,
  font13: 13,
  font14: 14,
  font16: 16,
  font18: 18,
  font20: 20,
  font22: 22,
  font24: 24,
  font28: 28,
};

const weight = {
  normal: '400' as TextStyle['fontWeight'],
  medium: '500' as TextStyle['fontWeight'],
  semiBold: '600' as TextStyle['fontWeight'],
  bold: '700' as TextStyle['fontWeight'],
  extraBold: '800' as TextStyle['fontWeight'],
};

const typeFont = {
  clashGrotesk: 'ClashGrotesk-Regular',
  clashGroteskLight: 'ClashGrotesk-Light',
  clashGroteskMedium: 'ClashGrotesk-Medium',
  clashGroteskSemiBold: 'ClashGrotesk-Semibold',
  clashGroteskBold: 'ClashGrotesk-Bold',
  plusJakartaSans: 'PlusJakartaSans-Regular',
  plusJakartaSansLight: 'PlusJakartaSans-Light',
  plusJakartaSansMedium: 'PlusJakartaSans-Medium',
  plusJakartaSansSemiBold: 'PlusJakartaSans-SemiBold',
  plusJakartaSansBold: 'PlusJakartaSans-Bold',
  plusJakartaSansExtraBold: 'PlusJakartaSans-ExtraBold',
};

export {size, weight, typeFont};
