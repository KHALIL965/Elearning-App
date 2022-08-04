import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Popup from '../screens/popup';
import Learn from '../screens/Learn';


const RootNavigator = createNativeStackNavigator();

export function RootStackNavigator() {
  return (
    <RootNavigator.Navigator
      initialRouteName={'Learn'}
      screenOptions={{ headerShown: true }}
    >
        <RootNavigator.Screen
        name="Learn"
        component={Learn}
      />
      <RootNavigator.Screen
        name="Popup"
        component={Popup}
      />
    
    </RootNavigator.Navigator>
  );
}
