import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

// // ...
// class MyWebComponent extends Component {
//   render() {
//     return <WebView source={{ uri: 'https://reactnative.dev/' }} />;
//   }
// }

const CustomWebView = () => {
    return(
        <>
      
        <WebView source={{ uri: 'https://cgwebservices.in/mohan/agri/rabi.html' }}  />
     
      
        </>
    )
}

const styles=StyleSheet.create({

})

export default CustomWebView