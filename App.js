import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import P1 from './components/P1';


import P2_5 from './components/P2_5';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import InCompleteTasks from './components/InCompleteTasks';

import HomePage from './components/HomePage';

import CompletedTasks from './components/CompletedTasks';


import GroupTasks from './components/GroupTasks';

import grpTasks from './rawDATA/grpTasks';
import tabs from './navigation/tabs';
import TabsNavigator from './navigation/tabs';

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer style = {style.container }>
      <TabsNavigator/>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : 'orange'
  }
})
