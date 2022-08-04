import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Learn from '../screens/Learn';
import Popup from '../screens/popup';


const RootNavigator = createNativeStackNavigator();

export function RootStackNavigator() {
  return (
    <RootNavigator.Navigator
      initialRouteName={'Popup'}
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
