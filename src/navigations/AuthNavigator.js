import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Learn from '../screens/Learn';
import Search from '../screens/Search';
import LearnCategory from '../screens/LearnCategory';
import CustomWebView from '../components/CustomWebView';


const RootNavigator = createNativeStackNavigator();

export function RootStackNavigator() {
  return (
    <RootNavigator.Navigator
      initialRouteName={'Learn'}
      screenOptions={{ headerShown: false}}
    >
        <RootNavigator.Screen
        name="Learn"
        component={Learn}
      />
        <RootNavigator.Screen
        name="Search"
        component={Search}
      />
      <RootNavigator.Screen
        name="LearnCategory"
        component={LearnCategory}
      />
       <RootNavigator.Screen
        name="CustomWebView"
        component={CustomWebView}
      />
    
    </RootNavigator.Navigator>
  );
}
