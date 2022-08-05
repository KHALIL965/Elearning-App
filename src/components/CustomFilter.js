import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';
import R from '../res/R';
import {CustomButton} from './CustomButton';
import {TextInputField} from './TextInputField';

export const CustomFilter = props => {
  const {
    onpress,
    values,
    onChangeText,
    isVisible,
    modalTitle,
    closeModal,
    title,
    bottombtntxt,
    active,
    buttonColor,
    disabled,
    maxlength,
    label,
    placeholder,
    errorMsg,
    keyboardType,
    filterData,
    renderItemFilter,
    keyExtractorID,
  } = props;

  return (
    <Modal
      isVisible={isVisible}
      style={styles.modalContent}
      animationType="fade"
      transparent={true}>
      <View style={styles.modalView}>
      <FlatList
        data={props.filterData}
        renderItem={props.renderItemFilter}
        keyExtractor={props.keyExtractorID}
      />
      </View>
    
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalView: {
    backgroundColor: R.color.offWhite,
    borderTopLeftRadius: R.unit.scale(3),
    borderTopRightRadius: R.unit.scale(3),
    // marginTop:R.unit.scale(80),
    // width: '70%',
    height: '40%',
    // paddingVertical: R.unit.scale(200),
    // position: 'absolute',
    // paddingLeft: R.unit.scale(10),
    bottom: R.unit.scale(40),
  },
  modalContent: {
    // justifyContent: 'center',
    alignItems: 'flex-end',
    bottom: R.unit.scale(40),
    // margin:25
  },
  errorStyle: {
    fontSize: R.unit.scale(6.5),
    lineHeight: R.unit.scale(9),
  },
  crossIconStyles: {
    alignSelf: 'center',
    left: R.unit.scale(10),
    top: R.unit.scale(10),
  },
  crossIcon: {
    width: R.unit.scale(9),
    height: R.unit.scale(9),
    bottom: R.unit.scale(12),
  },
});
