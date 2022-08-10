import React,{useState} from 'react';
import { StyleSheet, View,Alert } from 'react-native';
import CustomPopup from '../components/CustomPopup';
import {useNavigation} from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/AntDesign';



const Popup=()=>{
 
  const navigation = useNavigation();
  const[modalVisible,setModalVisible] = useState(false);

    return(
        <CustomPopup Nii={ modalVisible} >
            
          </CustomPopup>
    );
}

export default Popup;