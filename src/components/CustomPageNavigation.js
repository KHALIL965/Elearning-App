import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import R from '../res/R';
import Color from '../res/Color';
import unit from '../res/unit';
import LrnTab from '../Tabs/LearnTab';

import {Item} from 'react-native-paper/lib/typescript/components/List/List';
import TestTab from '../Tabs/TestTab';
import ActivityTab from '../Tabs/ActivityTab';


function Organization() {
  return (
    <View style={style.organization}>
      <LrnTab />
    </View>
  );
}
function Individual() {
  return (
    <View style={style.individual}>
      <TestTab/>
    </View>
  );
}
function Service() {
  return (
    <View style={style.service}>
      <ActivityTab/>
    </View>
  );
}
const Tab = createMaterialTopTabNavigator();
const CustomPageNavigation = () => {
  return (
    <>
      <NavigationContainer independent={true}>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: R.color.offWhite,
            inactiveTintColor: R.color.black,
            style: {
              backgroundColor: R.color.goldenDeep,
            },
          }}>
          <Tab.Screen name="Learn" component={Organization}></Tab.Screen>
          <Tab.Screen name="Test" component={Individual}></Tab.Screen>
          <Tab.Screen name="Activity" component={Service}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};
const style = StyleSheet.create({
  ot1: {
    alignSelf: 'center',
    fontSize: 35,
  },
  organization: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  individual: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  service: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
export default CustomPageNavigation;
