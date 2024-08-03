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

export default function App() {
  return (
    <View style = {style.container }>
      <HomePage/>
    </View>
  );
}

const style = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : 'orange'
  }
})
