// import * as React from 'react';
// import {View,Text} from 'react-native';
// import {TabView, SceneMap} from 'react-native-tab-view';


// const TestComponent=()=> {
//     const FirstRoute = () =>( <View style={{width:"100%",height:"100%",backgroundColor: 'red'}} >
//         <Text>Hello</Text>
//     </View>);
    
//     const SecondRoute = () => (
//         <View style={{width:"100%",height:"100%",backgroundColor: '#673ab7'}} >
//             <Text>Hello</Text>
//         </View>
//     );
    
//     const renderScene = SceneMap({
//       first: FirstRoute,
//       second: SecondRoute,
//     });
//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     {key: 'first', title: 'First'},
//     {key: 'second', title: 'Second'},
//   ]);

//   return (
//     <TabView
//       navigationState={{index, routes}}
//       renderScene={renderScene}
//       onIndexChange={setIndex}
      
//     />
//   );    
// }
// export default TestComponent;
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import R from '../res/R';
import Color from '../res/Color';
import unit from '../res/unit';
import LrnTab from '../Tabs/LearnTab';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';
// import LrnTab from '../Tabs/LearnTab';
const categoryData = [
  {
    id: 0,
    subCategoryTitle: 'General Anatomy',
    subCategory: [
      {
        subCategoryid: 11,
        subCategoryTile: 'Introduction-General Anatomy',
        percentageCover: '0%',
        questions: '1 Q&As',
        subCategoryImage: require('../assets/images/searchIcon.png'),
      },
      {
        subCategoryid: 12,
        subCategoryTile: 'Skeleton',
        percentageCover: '0%',
        questions: '1 Q&As',
        subCategoryImage: require('../assets/images/searchIcon.png'),
      },
      {
        subCategoryid: 13,
        subCategoryTile: 'Joints',
        percentageCover: '0%',
        questions: '1 Q&As',
        subCategoryImage: require('../assets/images/searchIcon.png'),
      },
      {
        subCategoryid: 14,
        subCategoryTile: 'Joints',
        percentageCover: '0%',
        questions: '1 Q&As',
        subCategoryImage: require('../assets/images/searchIcon.png'),
      },
    ],
  },
  {
    id: 1,
    subCategoryTitle: 'Upper Limb',
    subCategory: [
      {
        subCategoryid: 21,
        subCategoryTile: 'Introduction-Upper Limb',
        percentageCover: '0%',
        questions: '1 Q&As',
        subCategoryImage: require('../assets/images/searchIcon.png'),
      },
      {
        subCategoryid: 22,
        subCategoryTile: 'Bones of Upper Limb',
        percentageCover: '0%',
        questions: '1 Q&As',
        subCategoryImage: require('../assets/images/searchIcon.png'),
      },
      {
        subCategoryid: 33,
        subCategoryTile: 'Pectoral Region',
        percentageCover: '0%',
        questions: '1 Q&As',
        subCategoryImage: require('../assets/images/searchIcon.png'),
      },
    ],
  },
  {
    id: 2,
    subCategoryTitle: 'Thorax-1',
    subCategory: [
      {
        subCategoryid: 23,
        subCategoryTile: 'Introduction-Thorax',
        percentageCover: '0%',
        questions: '1 Q&As',
        subCategoryImage: require('../assets/images/searchIcon.png'),
      },
      {
        subCategoryid: 43,
        subCategoryTile: 'Introduction-General Anatomy',
        percentageCover: '0%',
        questions: '1 Q&As',
        subCategoryImage: require('../assets/images/searchIcon.png'),
      },
      {
        subCategoryid: 53,
        subCategoryTile: 'Introduction-General Anatomy',
        percentageCover: '0%',
        questions: '1 Q&As',
        subCategoryImage: require('../assets/images/searchIcon.png'),
      },
    ],
  },
  {
    id: 3,
    subCategoryTitle: 'Thorax-1',
    subCategory: [
      {
        subCategoryid: 34,
        subCategoryTile: 'Introduction-Thorax',
        percentageCover: '0%',
        questions: '1 Q&As',
        subCategoryImage: require('../assets/images/searchIcon.png'),
      },
      {
        subCategoryid: 54,
        subCategoryTile: 'Introduction-General Anatomy',
        percentageCover: '0%',
        questions: '1 Q&As',
        subCategoryImage: require('../assets/images/searchIcon.png'),
      },
      {
        subCategoryid: 64,
        subCategoryTile: 'Introduction-General Anatomy',
        percentageCover: '0%',
        questions: '1 Q&As',
        subCategoryImage: require('../assets/images/searchIcon.png'),
      },
    ],
  },
];

function Organization() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
   {/* <Text style={{justifyContent:"center"}}>Home!!</Text> */}
   <LrnTab/>
    </View>
  );
}
function Individual() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      }}>
      {/* <Text>Test</Text> */}
      <LrnTab/>
    </View>
  );
}
function Service() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      }}>
      {/* <Text>Activity</Text> */}
      <LrnTab/>
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
            activeTintColor:R.color.offWhite,
            inactiveTintColor:R.color.black,
            style: {
              backgroundColor:R.color.goldenDeep,
              
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
});
export default CustomPageNavigation;
