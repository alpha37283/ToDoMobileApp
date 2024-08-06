import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../components/HomePage';
import CompletedTasks from '../components/CompletedTasks';
import InCompleteTasks from '../components/InCompleteTasks';
import GroupTasks from '../components/GroupTasks';

const Tabs = createBottomTabNavigator();

const TabsNavigator = () => {
  return  (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'transparent',
          borderTopWidth: 0, // Remove the top border
          elevation: 0, // Remove shadow on Android
          shadowOpacity: 0, // Remove shadow on iOS
          height: 50,
        },
      }}
    >
      <Tabs.Screen 
        name="Home" 
        component={HomePage} 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image 
                style={[styles.icns, { tintColor: focused ? 'blue' : 'grey' }]} 
                source={require('../assets/icnHome.png')}
              />
            </View>
          ) 
        }}
      />
      <Tabs.Screen 
        name="Tasks" 
        component={CompletedTasks}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image 
                style={[styles.icns, { tintColor: focused ? 'blue' : 'grey' }]} 
                source={require('../assets/icnTasks.png')}
              />
            </View>
          ) 
        }}
      />
      <Tabs.Screen 
        name="Calender" 
        component={InCompleteTasks} 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image 
                style={[styles.icns, { tintColor: focused ? 'blue' : 'grey' }]} 
                source={require('../assets/icnCalender.png')}
              />
            </View>
          ) 
        }}
      />
      <Tabs.Screen 
        name="Settings" 
        component={GroupTasks} 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image 
                style={[styles.icns, { tintColor: focused ? 'blue' : 'grey' }]} 
                source={require('../assets/icnSettings.png')}
              />
            </View>
          ) 
        }}
      />
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({
  icns: {
    width: 30,
    height: 30,
  },
});

export default TabsNavigator;
