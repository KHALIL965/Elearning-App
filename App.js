import React, { useState, useEffect } from 'react';
import { View, StyleSheet,LogBox,Text} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './src/navigations/Route';
import store, { persistor } from './src/redux/store/Store';
import Color from './src/res/Color';
// import { useNavigation } from '@react-navigation/native';


export default function App(props) {
  // const navigation = useNavigation()

  // const [isConnected, setIsConnected] = useState(true);
  // const [splash, setSplash] = useState(true);
  
  // Ignore log notification by message
  LogBox.ignoreLogs(['Warning: ...']);

  //Ignore all log notifications
  LogBox.ignoreAllLogs();

  

  return (
    <View style={styles.container}>
      {/* <Text 
      onPress={()=>navigation.navigate('Learn')}
       style={styles.mainTxt}>Medical Elearning App...</Text> */}
       {/* <Routes /> */}
       <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Routes />
            </PersistGate>
          </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Color.offWhite
  },
  mainTxt:{
    textAlign:'center',
    paddingVertical:250,
    color:Color.textColor
  }
})