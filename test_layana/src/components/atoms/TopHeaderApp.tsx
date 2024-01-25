import React, {FC, ReactNode} from 'react';
import {Pressable, Text, View} from 'react-native';
import Spacer from './Spacer';
import {colors} from '@theme/colors';

interface ITopHeaderApp {
  LogoIcon?: ReactNode;
  title?: string;
  subTitle?: string;
  Notification?: ReactNode;
  iconProfile?: ReactNode;
}

export const TopHeaderApp: FC<ITopHeaderApp> = ({
  LogoIcon,
  title,
  subTitle,
  Notification,
  iconProfile,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 12,
        justifyContent: 'space-between',
      }}>
      {LogoIcon}
      <View>
        <Text style={{color: 'black'}}>{title}</Text>
        <Text style={{color: 'black'}}>{subTitle}</Text>
      </View>
      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: colors.blueContainer2,
          borderRadius: 100,
          paddingHorizontal: 12,
          paddingVertical: 4,
        }}>
        {Notification}
        <Spacer width={24} />
        {iconProfile}
      </Pressable>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {},
// });

export default TopHeaderApp;
