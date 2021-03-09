import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from './components/Icon';
import HomeScreen from './screens/HomeScreen';
import EngagementScreen from './screens/EngagementScreen';
import AccountScreen from './screens/AccountScreen';

const Tabs = AnimatedTabBarNavigator();
const TabBarIcon = (props) => {
  return (
    <Icon
      name={props.name}
      size={props.size ? props.size : 32}
      color={props.tintColor}
    />
  );
};

const TabBarCustomIcon = (props) => {
  return <Icons name={props.name} color={props.tintColor} />;
};

export default () => {

  return (
    <Tabs.Navigator
      initialRouteName={"Home"}
      backBehavior="history"
      appearence={{
        whenInactiveShow: 'icon-only',
        whenActiveShow: 'icon-only',
        shadow: true,
        dotSize:'small'
      }}
      tabBarOptions={{
        activeTintColor: '#CB6CE6',
        inactiveTintColor: '#B9B9B9',
        activeBackgroundColor: 'transparent',
      }}>
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <TabBarCustomIcon
              size={24}
              focused={focused}
              tintColor={color}
              name="home"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Fav"
        component={EngagementScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <TabBarCustomIcon focused={focused} tintColor={color} name="fav" />
          ),
        }}
      />

      <Tabs.Screen
        name="Profile"
        component={AccountScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <TabBarCustomIcon
              focused={focused}
              tintColor={color}
              name="profile"
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
