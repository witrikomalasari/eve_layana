import React, {FC} from 'react';
import {View} from 'react-native';
import EveLayanaText from './EveLayanaText/EveLayanaText';

interface IEveIconTextProps {
  icon: React.ReactNode;
  children: React.ReactNode;
  type?: 'normalText' | 'heading' | 'subTitle';
}

export const EveIconText: FC<IEveIconTextProps> = ({
  icon,
  children,
  type = 'normalText',
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <EveLayanaText textType={type}>{children}</EveLayanaText>
      {icon}
    </View>
  );
};

export default EveIconText;
