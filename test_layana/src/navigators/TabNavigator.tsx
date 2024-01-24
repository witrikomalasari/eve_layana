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
      // screenOptions={{
      //   lazy: true,
      //   headerShown: false,
      //   tabBarStyle: {
      //     height: 60,
      //     paddingTop: 10,
      //     paddingBottom: 10,
      //     width: width,
      //     paddingHorizontal: width / 15,
      //   },
      //   tabBarInactiveTintColor: Colors.black,
      //   tabBarActiveTintColor: Colors.primary,
      // }}
    >
      <TabNav.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => <HomeExplore width={26} color={color} />,
        }}
      />
      <TabNav.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => <ExploreIcon width={26} color={color} />,
        }}
      />
      <TabNav.Screen
        name="Ticket"
        component={Ticket}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => <TicketIcon width={26} color={color} />,
        }}
      />
      <TabNav.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => <ProfileIcon width={26} color={color} />,
        }}
      />
    </TabNav.Navigator>
  );
};

export default MainTabNavigator;
