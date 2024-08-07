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


import TasksPage from './components/TasksPage';

import { NavigationContainer } from '@react-navigation/native';


import AddTask from './components/AddTasks';

export default function App() {
  return (
<NavigationContainer style = {styles.container }>
   <TabsNavigator/>
 </NavigationContainer> 
    
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : 'orange',
    justifyContent : 'flex-end'
  },
  
})


  // <View style = {styles.container}> 
  //       <AddTask style = {styles.add}></AddTask>
  //   </View>
  