import {EveLayanaText, Input, Spacer} from '@components/atoms';
import EveButton from '@components/atoms/EveButton';
import EveSaveAreaView from '@components/atoms/EveSafeAreaView';
import {useBaseNavigation} from '@hooks/useBaseNavigation';
import {colors} from '@theme/colors';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const Register = () => {
  const navigation = useBaseNavigation();

  return (
    <EveSaveAreaView style={styles.container}>
      <View style={styles.contentWrap}>
        <EveLayanaText textType="heading" style={{color: colors.blueText}}>
          Register here
        </EveLayanaText>
        <Spacer height={8} />
        <EveLayanaText textType="normalText" style={{color: colors.blueLight}}>
          Please enter your data to complete your account registration process{' '}
        </EveLayanaText>
        <Spacer height={24} />
        <Input
          label={'Name'}
          placeholder={'Joesamanta@gmail.com'}
          placeholderTextColor={colors.blueTextForm}
        />
        <Input
          label={'Email'}
          placeholder={'*********'}
          placeholderTextColor={colors.black}
        />
        <Input
          label={'Phone Number'}
          placeholder={'*********'}
          placeholderTextColor={colors.black}
        />
        <Input
          label={'Create Password'}
          placeholder={'*********'}
          placeholderTextColor={colors.black}
        />
        <Input
          label={'Confirm Password'}
          placeholder={'*********'}
          placeholderTextColor={colors.black}
        />
        <Spacer height={6} />
        <EveButton
          title="Register"
          colors={colors.primary}
          size="large"
          rounded={false}
          variant="solid"
          onPress={() => navigation.navigate('TabNavigator')}
        />
        <Spacer height={24} />
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
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
              Login
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
    backgroundColor: colors.white,
  },
  contentWrap: {
    paddingVertical: 24,
    paddingHorizontal: 18,
  },
  footerWrap: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Register;
