import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

function Organization() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Learn</Text>
      </View>
    );
  }
  function Individual() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Test</Text>
      </View>
    );
  }
  const Tab = createMaterialTopTabNavigator();
const CustomPageNavigation =()=>{
    return(
        <>
       
        <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: { fontSize: 12, color: "#009387" },
          }}
        >
          <Tab.Screen name="Sent" component={Organization}></Tab.Screen>
          <Tab.Screen
            name="Received"
            component={Individual}
          ></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
      </>
    );
};
const style=StyleSheet.create({
    ot1:{
        alignSelf:"center",
        fontSize:35,
    }
});
export default CustomPageNavigation;