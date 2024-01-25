import React, {FC, ReactNode} from 'react';
import {Pressable, Text, View} from 'react-native';

interface IHeaderApp {
  iconProfile?: ReactNode;
  title?: string;
  subTitle?: string;
  Notification?: ReactNode;
  SearchIcon?: ReactNode;
}

export const HeaderApp: FC<IHeaderApp> = ({
  iconProfile,
  title,
  subTitle,
  Notification,
  SearchIcon,
}) => {
  return (
    <View style={{backgroundColor: 'red'}}>
      {iconProfile}
      <View>
        <Text style={{color: 'black'}}>{title}</Text>
        <Text style={{color: 'black'}}>{subTitle}</Text>
      </View>
      <Pressable>
        {Notification}
        {SearchIcon}
      </Pressable>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {},
// });

export default HeaderApp;
