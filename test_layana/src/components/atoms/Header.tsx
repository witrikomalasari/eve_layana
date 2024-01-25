import {Map as MapIcon} from '@assets/Icons';
import {colors} from '@theme/colors';
import React from 'react';
import {View} from 'react-native';
import EveLayanaText from './EveLayanaText/EveLayanaText';
import Spacer from './Spacer';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <EveLayanaText
        textType="heading"
        fontSize={18}
        textLineHeight={22}
        style={{maxWidth: 175}}>
        Find events as easily as you snap your fingers
      </EveLayanaText>
      <Spacer width={12} />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MapIcon height={20} width={20} color={colors.white} />
        <Spacer width={8} />
        <View>
          <EveLayanaText>Location</EveLayanaText>
          <EveLayanaText textType="normalText" fontWeight="medium">
            London, UK
          </EveLayanaText>
        </View>
      </View>
    </View>
  );
};

export default Header;
