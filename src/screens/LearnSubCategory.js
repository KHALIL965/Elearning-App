import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import CircularProgress from 'react-native-circular-progress-indicator';
import {TabView, SceneMap} from 'react-native-tab-view';
import LearnCategory from './LearnCategory';
import unit from '../res/unit';
import R from '../res/R';
import image from '../res/image';
import Color from '../res/Color';
// import CustomPageNavigation from '../components/CustomPageNavigation';
import CustomPageNavigation from '../components/CustomPageNavigation';
import LrnTab from '../Tabs/LearnTab';

const LearnSubCategory = () => {
  return (
    <>
      <View style={{flex:R.unit.scale(0.39)}}>
        <View style={style.circle}>
          <CircularProgress
            value={58}
            radius={100}
            activeStrokeWidth={20}
            activeStrokeColor={'tomato'}
            progressValueColor={'transparent'}
          />
        </View>
        <View style={style.circle2}>
          <CircularProgress
            value={60}
            radius={45}
            activeStrokeWidth={20}
            progressValueColor={'transparent'}
          />
          <View style={style.circle3}>
            <CircularProgress
              value={100}
              radius={25}
              activeStrokeWidth={8}
              activeStrokeColor={'tomato'}
              progressValueColor={'transparent'}
            />
            <Text style={style.ctext1}>Learn</Text>
            <View style={{paddingTop: 40}}>
              <CircularProgress
                value={100}
                radius={25}
                activeStrokeWidth={8}
                progressValueColor={'transparent'}
              />
              <Text style={style.ctext2}>Test</Text>
            </View>
          </View>
          <View style={style.text}>
            <Text style={style.text1}>Completed</Text>
          </View>
        </View>
      </View>

      <CustomPageNavigation>
        <LrnTab/>
      </CustomPageNavigation>
    </>
  );
};

const style = StyleSheet.create({
  circle: {
    padding: R.unit.scale(9),
  },
  circle2: {
    bottom: R.unit.scale(75),
    left: R.unit.scale(35),
  },
  circle3: {
    paddingLeft: R.unit.scale(95),
    bottom: R.unit.scale(55),
  },
  text: {
    // paddingTop:10,
    paddingLeft: R.unit.scale(25),
    bottom: R.unit.scale(40),
  },
  text1: {
    fontSize: R.unit.scale(8),
    fontWeight: 'bold',
  },
  ctext1: {
    paddingLeft: R.unit.scale(22),
    bottom: R.unit.scale(5),
    fontSize: R.unit.scale(8),
    fontWeight: 'bold',
    color: 'red',
  },
  ctext2: {
    paddingLeft: R.unit.scale(22),
    bottom: R.unit.scale(5),
    fontSize: R.unit.scale(8),
    fontWeight: 'bold',
  },
  // navigate: {
  //   bottom: R.unit.scale(200),
  //   borderRadius: R.unit.scale(3),
  //   borderWidth: R.unit.scale(1),
  //   borderColor:R.color.goldenDeep,

  // },
});
export default LearnSubCategory;
