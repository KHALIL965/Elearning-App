import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Learn from '../screens/Learn';
import ScoreCard from '../screens/Scorecard';
import Search from '../screens/Search';
import LearnCategory from '../screens/LearnCategory';
import CustomWebView from '../components/CustomWebView';
import CustomPagination from '../components/CustomPagination';


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
    
    <RootNavigator.Screen
        name="Scorecard"
        component={ScoreCard}
      />

    <RootNavigator.Screen
        name="CustomPagination"
        component={CustomPagination}
      />
    </RootNavigator.Navigator>
  );
}
