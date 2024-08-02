import React, { useState, useRef } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Ensure this import
import OnBoardingItems from './OnBoardingItems';
import slides from './slides'; // Import the slides array
import Paginator from './Paginator';
import NextBtn from './NextBtn';



function P2_5() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0]?.index || 0);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <LinearGradient
      colors={['#05243E', '#1253AA']}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.safeArea}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnBoardingItems item={item} />}
          keyExtractor={(item) => item.key}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />

        <Paginator data={slides} scrollX={scrollX} />
        
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1, // Adjusted to make the SafeAreaView fill the available space
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
 
});

export default P2_5;
