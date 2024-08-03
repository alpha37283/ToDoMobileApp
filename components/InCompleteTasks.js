import React from 'react';
import { View, Text, ScrollView, StyleSheet, useWindowDimensions, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

function InCompleteTasks({ tasks, onPress }) {
  const { width } = useWindowDimensions();

  const [fontsLoaded] = useFonts({
    'Ubuntu-Medium': require('../assets/fonts/Ubuntu-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Return null or a loader until fonts are loaded
  }

  return (
    <View style={styles.main}>
      <Text style={styles.incText}>Incompleted Tasks</Text>
      <ScrollView contentContainerStyle={[styles.scroll, { padding: width * 0.05 }]} showsHorizontalScrollIndicator={false}>
        {tasks.map(task => (
          <View key={task.id} style={[styles.taskContainer, { width: width * 0.95 }]}>
            <TouchableOpacity
              style={[styles.checkCom, { backgroundColor: 'green' }]}
              onPress={() => onPress(task.id)}
            >
              <Image style={styles.tickMark} source={require('../assets/tickMark.png')} />
            </TouchableOpacity>
            <View style={styles.tdandt}>
              <Text style={[styles.title, { fontSize: width * 0.05 }]}>{task.title}</Text>
              <View style={styles.dandt}>
                <Text style={[styles.day, { fontSize: width * 0.04 }]}>{task.day} | </Text>
                <Text style={[styles.time, { fontSize: width * 0.04 }]}>{task.time}</Text>
              </View>
            </View>
            <View style={styles.nxt}>
              <Image style={[styles.img, { width: width * 0.05, height: width * 0.06 }]} source={require('../assets/nextVector.png')} />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
    alignItems: 'center',
  },
  taskContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
  },
  checkCom: {
    width: 30,
    height: 30,
    borderRadius: 20, // Circle shape
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  tickMark: {
    width: 20,
    height: 20,
  },
  incText: {
    fontWeight: 'bold',
    fontFamily: 'Ubuntu-Medium',
    letterSpacing: 1.5,
    fontSize: 15,
    color: 'white',
    marginLeft: 12,
    marginTop: 10,
  },
  nxt: {
    justifyContent: 'center',
  },
  img: {
    // Dimensions will be adjusted dynamically
  },
  tdandt: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontFamily: 'Ubuntu-Medium',
    letterSpacing: 1.5,
  },
  dandt: {
    flexDirection: 'row',
    marginTop: 5,
  },
  day: {
    color: 'darkgray',
    fontFamily: 'Ubuntu-Medium',
    letterSpacing: 1.5,
  },
  time: {
    color: 'gray',
    fontFamily: 'Ubuntu-Medium',
    letterSpacing: 1.5,
  },
});

export default InCompleteTasks;
