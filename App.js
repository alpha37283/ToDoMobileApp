import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, Button } from 'react-native';

import { useState } from 'react';

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

import Calendar from './components/Calendar';



export default function App() {
  const [calVisible, setCalVisible] = useState(false);


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

  
  

{/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
<Button title="Show Calendar" onPress={() => setCalVisible(true)} />

<Modal
    animationType="slide"
    transparent={true}
    visible={calVisible}
    onRequestClose={() => setCalVisible(false)}
>
    <Calendar visible={calVisible} onClose={() => setCalVisible(false)} />
</Modal>
</View> */}