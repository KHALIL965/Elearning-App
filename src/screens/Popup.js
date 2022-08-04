import React,{useState} from 'react';
import { StyleSheet, View } from 'react-native';
import CustomPopup from '../components/CustomPopup';
// import Icon from 'react-native-vector-icons/AntDesign';



const Popup=()=>{
  const [modalVisible, setModalVisible] = useState(false);

    return(
        <CustomPopup visible={modalVisible} close={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}  press={() => setModalVisible(!modalVisible)}
          press2={() => setModalVisible(true)}
          style={style.popup}>
            
          </CustomPopup>
    );
}
const style = StyleSheet.create({
    popup:{
        height:"50%",
        width:"50%"
    }
})
export default Popup;