import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import GroupTasks from './GroupTasks';
import InCompleteTasks from './InCompleteTasks';


function HomePage() {
  const { width, height } = useWindowDimensions();

  const [fontsLoaded] = useFonts({
    'Ubuntu-Medium': require('../assets/fonts/Ubuntu-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Return null or a loader until fonts are loaded
  }

  return (
    <LinearGradient colors={['#1253AA', '#05243E']} style={styles.gradient}>
      <SafeAreaView style={styles.safearea} >
        <ScrollView contentContainerStyle={[styles.scrollContainer, { padding: width * 0.05 }]}>
          <View style={[styles.header, { marginBottom: height * 0.02 }]}>
            <Image source={require('../assets/Profile.png')} style={[styles.avatar, { width: width * 0.12, height: width * 0.12, borderRadius: (width * 0.12) / 2 }]} />
            <View style={styles.userInfo}>
              <Text style={[styles.name, { fontSize: width * 0.05 }]}>Oussama Chahidi</Text>
              <Text style={[styles.email, { fontSize: width * 0.035 }]}>oussama.chahidi@gmail.com</Text>
            </View>
            <Image source={require('../assets/Bell.png')} style={[styles.notificationIcon, { width: width * 0.08, height: width * 0.08 }]} />
          </View>
          <View style = {[styles.grpTask, {width : width , height : width * 0.5}]}>
            <GroupTasks></GroupTasks>
          </View>
          <View style = {[styles.grpTask, {width : width , height : width * 0.5}]}>
            <InCompleteTasks></InCompleteTasks>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safearea: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginLeft : -8
  },
  avatar: {
    // Dimensions will be adjusted dynamically
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Ubuntu-Medium',
    letterSpacing: 2,
  },
  email: {
    marginTop: 5,
    color: 'white',
    fontFamily: 'Ubuntu-Medium',
    letterSpacing: 1,
    opacity: 0.5,
  },
  notificationIcon: {
    // Dimensions will be adjusted dynamically
  },
  grpTask : {
    alignItems : 'center',
    justifyContent : 'center',
    
  },

});

export default HomePage;