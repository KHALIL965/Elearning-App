import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Popup from '../screens/Popup';
import Learn from '../screens/Learn';
import ScoreCard from '../screens/Scorecard';
import Search from '../screens/Search';
import LearnCategory from '../screens/LearnCategory';
import CustomWebView from '../components/CustomWebView';
import LearnSubCategory from '../screens/LearnSubCategory';
import LrnTab from '../Tabs/LearnTab';
import TAB1 from '../Tabs/TestTab';
import BookMarks from '../screens/BookMarks';
import CustomPagination from '../components/CustomPagination';
import Questions from '../screens/Questions';
import QuestionsGame from '../screens/QuestionsGame';

const RootNavigator = createNativeStackNavigator();

export function RootStackNavigator() {
  return (
    <RootNavigator.Navigator
      initialRouteName={'Learn'}
      screenOptions={{headerShown: false}}>
      <RootNavigator.Screen name="Learn" component={Learn} />
      <RootNavigator.Screen name="Search" component={Search} />
      <RootNavigator.Screen name="TAB1" component={TAB1} />
      <RootNavigator.Screen name="LearnCategory" component={LearnCategory} />
      <RootNavigator.Screen
        name="LearnSubCategory"
        component={LearnSubCategory}
      />
      <RootNavigator.Screen name="LrnTab" component={LrnTab} />
      <RootNavigator.Screen name="CustomWebView" component={CustomWebView} />
      <RootNavigator.Screen name="BookMarks" component={BookMarks} />

      <RootNavigator.Screen name="Scorecard" component={ScoreCard} />
      <RootNavigator.Screen name="Popup" component={Popup} />

      <RootNavigator.Screen
        name="CustomPagination"
        component={CustomPagination}
      />
      <RootNavigator.Screen name="Questions" component={Questions} />
      <RootNavigator.Screen name="QuestionsGame" component={QuestionsGame} />
    </RootNavigator.Navigator>
  );
}
