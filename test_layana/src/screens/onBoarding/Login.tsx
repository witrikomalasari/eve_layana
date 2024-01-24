import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useBaseNavigation} from '@hooks/useBaseNavigation';

const Login = () => {
  const navigation = useBaseNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('TabNavigator')}>
        <Text style={{color: 'red', fontSize: 44}}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
