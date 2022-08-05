import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import CustomPageNavigation from '../components/CustomPageNavigation';
import CircularProgress from 'react-native-circular-progress-indicator';

const LearnSubCategory = () => {
  return (
    <View>
      <View>
        <View style={{top: 230}}>
          <CircularProgress
            radius={150}
            textColor=""
            inActiveStrokeColor={'#2ecc71'}
            inActiveStrokeOpacity={0.2}
            inActiveStrokeWidth={6}
            duration={3000}
            // onAnimationComplete={() => setValue(50)}
          />
        </View>
        <View style={{left: 70}}>
          <CircularProgress
            radius={80}
            textColor="#222"
            fontSize={20}
            activeStrokeColor={'tomato'}
            inActiveStrokeOpacity={0.2}
            duration={4000}
          />
        </View>
      </View>
      <View style={style.text}>
        <Text>Completed</Text>
      </View>
      <View style={style.navigate}></View>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    paddingTop: 250,
    paddingLeft: 140,
  },
  navigate: {},
});
export default LearnSubCategory;
