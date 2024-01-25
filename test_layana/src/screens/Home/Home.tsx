import {Notification as NotifIcon} from '@assets/Icons';
import {images} from '@assets/Images';
import {EveLayanaText, Spacer} from '@components/atoms';
import Header from '@components/atoms/Header';
import SearchBar from '@components/atoms/SearchBar';
import TopHeaderApp from '@components/atoms/TopHeaderApp';
import {colors} from '@theme/colors';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          paddingHorizontal: 18,
          backgroundColor: colors.secondary,
        }}>
        <TopHeaderApp
          LogoIcon={
            <Image
              source={images.LogoEveHorizontal}
              style={styles.imageWrapper}
            />
          }
          Notification={
            <NotifIcon width={18} height={20} color={colors.white} />
          }
          iconProfile={
            <Image source={images.User1} style={{width: 36, height: 36}} />
          }
        />
        <Spacer height={8} />
        <Header />
        <Spacer height={8} />
        <SearchBar />
        <Spacer height={18} />
      </View>
      <View style={{flex: 1, backgroundColor: colors.whitesecond}}>
        <EveLayanaText textType="normalText" style={{color: 'red'}}>
          Hi, Jude.
        </EveLayanaText>
        <EveLayanaText>You have 2 upcoming events today 🗓</EveLayanaText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    height: 36.99,
    width: 98.3,
    alignSelf: 'center',
  },
});

export default Home;
