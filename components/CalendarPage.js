import React from 'react';
import { View, Text } from 'react-native';
import { Pressable, TextInput } from 'react-native-gesture-handler';

export default function componentName() {
  return (
  <View style={styles.main}>
        <View style = {styles.v1}>
            <Text style = {styles.txt1}>Manage Your Time</Text>
        </View>

        <View style = {styles.calendar}>
            
        </View>

        <View style = {styles.v2}>
            <View style = {styles.setTask}>
                <Text style = {styles.txt2}>Set Task for January</Text>
            </View>
            <TextInput placeholder='Task Name' style = {styles.txtInput}>

            </TextInput>
            <Pressable style = {styles.btn}>
                <Text style = {styles.txt3}>Add Task</Text>
            </Pressable>
        </View>
  </View>
  );
}

const styles = StyleSheet.create({
    main : {

    },
    v1 : {

    },
    calendar : {

    },
    v2 : {

    }
})
