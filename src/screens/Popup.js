import React,{useState} from 'react';
import { StyleSheet, View,Alert } from 'react-native';
import CustomPopup from '../components/CustomPopup';
import {useNavigation} from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/AntDesign';




const Popup=()=>{
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

    return(
        <CustomPopup visible={modalVisible} close={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}  press={() => setModalVisible(!modalVisible)}
          press2={() => setModalVisible(true)}
          >
            
          </CustomPopup>
    );
}

export default Popup;