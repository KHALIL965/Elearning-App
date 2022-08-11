import React, { useEffect, useState } from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import CounterReady from '../components/CounterReady';
import R from '../res/R';
import { useNavigation } from '@react-navigation/native';

const Questions = () => {
    const [counter,setCounter] = useState(0)
    const navigation = useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            // alert("Wait...")
            navigation.navigate('QuestionsGame')
        },3000)
    },[])
   
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
       
        <CounterReady />
        <Text style={styles.txtReady}>Ready</Text>
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer:{
      padding:10,
      justifyContent:'center',
      alignItems:'center'
  },
  txtReady:{
      color:R.color.goldenDeep,
      fontSize:R.unit.scale(20),
      fontWeight:'bold'
  }
});
export default Questions;
