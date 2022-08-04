import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Learn from '../screens/Learn';
import ScoreCard from '../screens/Scorecard';


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
        name="Scorecard"
        component={ScoreCard}
      />
    </RootNavigator.Navigator>
  );
}
