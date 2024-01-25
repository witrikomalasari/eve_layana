import {images} from '@assets/Images';
import {EveLayanaText, Input, Spacer} from '@components/atoms';
import EveButton from '@components/atoms/EveButton';
import EveSaveAreaView from '@components/atoms/EveSafeAreaView';
import {useBaseNavigation} from '@hooks/useBaseNavigation';
import {colors} from '@theme/colors';
import React, {FC} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

const {width, height} = Dimensions.get('window');

interface ILogin {}

export const Login: FC<ILogin> = () => {
  const navigation = useBaseNavigation();

  return (
    <EveSaveAreaView style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image source={images.LogoEve} style={styles.imageWrapper} />
      </View>
      <View style={styles.contentWrap}>
        <EveLayanaText textType="heading" style={{color: colors.blueText}}>
          Welcome back 👋
        </EveLayanaText>
        <Spacer height={8} />
        <EveLayanaText textType="normalText" style={{color: colors.blueLight}}>
          Please enter your login information below to access your account
        </EveLayanaText>
        <Spacer height={24} />
        <Input
          label={'Email'}
          placeholder={'Joesamanta@gmail.com'}
          placeholderTextColor={colors.blueTextForm}
        />
        <Input
          label={'Password'}
          placeholder={'*********'}
          placeholderTextColor={colors.black}
        />
        <EveLayanaText
          fontSize={14}
          fontWeight="semiBold"
          style={{color: colors.primary, textAlign: 'right'}}>
          Forgot password?
        </EveLayanaText>
        <Spacer height={24} />
        <EveButton
          title="Login"
          colors={colors.primary}
          size="large"
          rounded={false}
          variant="solid"
          onPress={() => navigation.navigate('TabNavigator')}
        />
        <Spacer height={24} />
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          style={styles.footerWrap}>
          <EveLayanaText
            fontSize={14}
            fontWeight="semiBold"
            style={{
              color: colors.blueLight,
            }}>
            Don't have an account?
            <EveLayanaText
              fontSize={14}
              fontWeight="semiBold"
              style={{
                color: colors.primary,
              }}>
              Register
            </EveLayanaText>
          </EveLayanaText>
        </TouchableOpacity>
      </View>
    </EveSaveAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  logoWrapper: {paddingTop: 70},
  imageWrapper: {
    height: 125.79,
    width: 122.13,
    alignSelf: 'center',
  },
  contentWrap: {
    bottom: 0,
    position: 'absolute',
    height: height / 1.5,
    width,
    backgroundColor: colors.white,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 25,
    paddingVertical: 24,
  },
  footerWrap: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
