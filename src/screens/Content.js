import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import R from '../res/R';

const Content = (props) => {
   return(
       <View style = {styles.container}>
            <Text style = {styles.textStyle}> {props.page} !!</Text>
       </View>
   )
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
    },
    textStyle : {
        fontSize : R.unit.scale(9),
        fontWeight : '600',
        color : R.color.black
    }
})

export default Content;