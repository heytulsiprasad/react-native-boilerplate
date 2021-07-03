// @flow

import 'react-native-gesture-handler';
import React from 'react';
import type { Node } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './screens/Home';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import Details from './screens/Details';
import Search from './screens/Search';

const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen
      name="Details"
      component={Details}
      options={({ route }) => ({ headerTitle: route.params?.name })}
    />
  </HomeStack.Navigator>
);

const ProfileStackScreen = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Profile" component={Profile} />
    <Drawer.Screen name="Settings" component={Settings} />
    <Drawer.Screen name="Search" component={Search} />
  </Drawer.Navigator>
);

const App = (): Node => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tabs.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarIcon: props => (
              <Icon name="home" size={props.size} color={props.color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          component={ProfileStackScreen}
          options={{
            tabBarIcon: props => (
              <Icon
                name="person-circle"
                size={props.size}
                color={props.color}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
