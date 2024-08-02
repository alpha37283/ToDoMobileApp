import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const NextBtn = () => {
  const size = 128;
  const strokeWidth = 8;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <View style={styles.container}>
        <Svg width = {size} height={ size }>
            <Circle stroke='#E6E7E8' cx = {center} r = {radius } strokeWidth={strokeWidth}  />
          

        </Svg>

    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'

  }
});

export default NextBtn;
