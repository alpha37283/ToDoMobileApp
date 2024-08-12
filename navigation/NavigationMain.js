import React from 'react';
import { View, Text } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import HomePage from '../components/HomePage';
import TabsNavigator from './tabs';

 function NavigationMain() {

    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
        <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: false}} />
        <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false}}/>
        <Stack.Screen name='tabs' component={TabsNavigator} options={{headerShown: false}}/>

    </Stack.Navigator>
  );
}


export default NavigationMain;