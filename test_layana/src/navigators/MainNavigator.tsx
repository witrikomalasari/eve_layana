import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {ComponentProps, Fragment} from 'react';
import TabNavigator from './TabNavigator';
import Login from '@screens/onBoarding/Login';
import Register from '@screens/onBoarding/Register';

// type navigator param list efeknya ke properties stack screen yaitu name
export type NavigatorParamLIst = {
  Login: undefined;
  Register: undefined;
  TabNavigator: undefined;
};

const Stack = createNativeStackNavigator<NavigatorParamLIst>();

//================== NAVIGATION CONTAINER ==============================================================

export const AppStack = () => {
  const Route = (
    <Fragment>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Fragment>
  );

  const getCurrentRoutes = () => {
    return Route;
  };

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {getCurrentRoutes()}
    </Stack.Navigator>
  );
};

interface NavigationProps
  extends Partial<ComponentProps<typeof NavigationContainer>> {} // typeof itu tuk snipet yang akan dikeluarkanoleh navigationCOntainer

export const MainNavigator = (props: NavigationProps) => {
  return (
    <NavigationContainer {...props}>
      <AppStack />
    </NavigationContainer>
  );
};

MainNavigator.displayName = 'MainNavigator'; // ini penamaan untuk navigator param list
