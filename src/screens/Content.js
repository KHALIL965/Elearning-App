import React from 'react';
import {View, Text, StyleSheet,Image} from 'react-native'
import R from '../res/R';

const Content = (props) => {
   return(    
       <View style = {styles.container}>
            <Text style = {styles.textStyle}>{props.page}</Text>
            </View>   
)}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'    
    },
    textStyle : {
        fontSize : R.unit.scale(12),
        fontWeight : '600',
        color : 'white',
    }
})

export default Content;