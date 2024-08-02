import React from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function OnBoardingItems({ item }) {
  const { width, height } = useWindowDimensions(); // Get dynamic dimensions

  return (
    <LinearGradient
      colors={['#05243E', '#1253AA']}
      style={styles.gradient}
    >
      <SafeAreaView style={[styles.safeArea, { width }]}>
        <Image source={item.image} style={[styles.image, { width: width * 0.6, height: width * 0.7 }]} />
        <View style={{ flex: 0.3 }}>
          <Text style={[styles.text, { paddingHorizontal: width * 0.16, fontSize: width * 0.05 }]}>{item.text}</Text>
        </View>
      </SafeAreaView>
    </LinearGradient> 
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    resizeMode: 'contain', // Ensure this is applied
  },
  text: {
    fontWeight: '300',
    color: 'white',
    textAlign: 'center',
  },
});

export default OnBoardingItems;

