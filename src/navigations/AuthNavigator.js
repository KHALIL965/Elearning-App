import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
    
    </RootNavigator.Navigator>
  );
}
