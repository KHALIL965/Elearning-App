import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, View, Platform } from 'react-native';
import { RootStackNavigator } from './AuthNavigator';


const Routes = () => {
	// const { userData } = useSelector(state => state.userAuth)
	return (
		<NavigationContainer>
         <RootStackNavigator />
		</NavigationContainer>
	);
}
export default Routes;