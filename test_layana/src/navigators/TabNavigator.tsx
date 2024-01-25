import {ExploreIcon, HomeIcon, ProfileIcon, TicketIcon} from '@assets/Icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Explore from '@screens/Explore/Explore';
import Home from '@screens/Home/Home';
import Profile from '@screens/Profile/Profile';
import Ticket from '@screens/Ticket/Ticket';
import React, {FC} from 'react';

export type NavigatorBottomParamList = {
  Home: undefined;
  Explore: undefined;
  Ticket: undefined;
  Profile: undefined;
};

const TabNav = createBottomTabNavigator<NavigatorBottomParamList>();

interface IMainTabNav {}

const MainTabNavigator: FC<IMainTabNav> = () => {
  return (
    <TabNav.Navigator
      backBehavior="initialRoute"
      initialRouteName="Home"
      screenOptions={{
        // lazy: true,
        headerShown: false,
        tabBarStyle: {
          height: 69,
          paddingTop: 8,
          paddingBottom: 8,
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}>
      <TabNav.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({color}) => <HomeIcon width={25} color={color} />,
        }}
      />
      <TabNav.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({color}) => <ExploreIcon width={25} color={color} />,
        }}
      />
      <TabNav.Screen
        name="Ticket"
        component={Ticket}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({color}) => <TicketIcon width={25} color={color} />,
        }}
      />
      <TabNav.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({color}) => <ProfileIcon width={24} color={color} />,
        }}
      />
    </TabNav.Navigator>
  );
};

export default MainTabNavigator;
