import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

export const EveSaveAreaView = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default EveSaveAreaView;
