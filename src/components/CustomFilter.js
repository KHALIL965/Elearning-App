import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import R from '../res/R'
import { CustomButton } from "./CustomButton";
import { TextInputField } from "./TextInputField";


export const CustomPopup = (props) => {

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
        keyboardType
    } = props
    return (
        <Modal
            isVisible={isVisible}
            style={styles.modalContent}
            animationType="fade"
            transparent={true}
        >
            <View style={styles.modalView}>
                <View style={styles.modalTitleContainer}>
                    <Text style={styles.exittxt}>{modalTitle}</Text>
                    <TouchableOpacity
                        style={styles.crossIconStyles}
                        onPress={closeModal}
                    >
                        <Image source={R.image.crossIcon()} style={styles.crossIcon} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.askingexittxt}>{title}</Text>
                <TextInputField
                    label={label}
                    value={values}
                    onChangeText={onChangeText}
                    blurOnSubmit={true}
                    maxlength={maxlength}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                />
                <Text style={styles.errorStyle}>{errorMsg}</Text>
                <View style={styles.buttonContainer}>
                    <CustomButton
                        onPress={onpress}
                        buttonCaption={R.strings.popup.add}
                        active={active}
                        buttomContainerStyle={styles.ButtonContainerStyle}
                        buttonTextStyle={styles.ButtonTextStyle}
                        buttonColor={buttonColor}
                        disabled={disabled}
                    />
                </View>
                <Text
                    onPress={closeModal}
                    style={styles.canceltxt}>{bottombtntxt}</Text>
            </View>
        </Modal >
    )
}
const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: R.unit.scale(24)
    },
    ButtonContainerStyle: {
        width: '100%',
        height: R.unit.scale(20)
    },
    ButtonTextStyle: {
        fontSize: R.unit.scale(8),
        lineHeight: R.unit.scale(12),
        letterSpacing: R.unit.scale(0.15),
        
    },
    modalView: {
        backgroundColor: R.color.white,
        borderTopLeftRadius: R.unit.scale(3),
        borderTopRightRadius: R.unit.scale(3),
        width: '100%',
        position: 'absolute',
        padding: R.unit.scale(10),
        bottom: R.unit.scale(0),
    },
    modalContent: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0
    },
    errorStyle: {
        fontSize: R.unit.scale(6.5),
        lineHeight: R.unit.scale(9),
        color: R.color.activefontColor,
    },
    modalTitleContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        width: R.unit.scale(160),
        height: R.unit.scale(32)
    },
    crossIconStyles: {
        alignSelf: 'flex-end',
        left: R.unit.scale(60)
    },
    exittxt: {
        marginTop: 20,
        textAlign: 'center',
        lineHeight: R.unit.scale(12),
        letterSpacing: R.unit.scale(0.15),
        fontSize: R.unit.scale(8),
       
    },
    askingexittxt: {
        paddingVertical: R.unit.scale(10),
        lineHeight: R.unit.scale(11),
        letterSpacing: R.unit.scale(0.19),
        fontSize: R.unit.scale(10),
       
        paddingRight: 20

    },
    exitsubtitle: {
        paddingVertical: R.unit.scale(20),
        lineHeight: R.unit.scale(10),
        letterSpacing: R.unit.scale(0.15),
        fontSize: R.unit.scale(8),
       
        color: R.color.grey
    },
    crossIcon: {
        width: R.unit.scale(9),
        height: R.unit.scale(9),
        bottom: R.unit.scale(12)
    },
    btnContainer: {
        width: '100%',
        height: R.unit.scale(20),
        borderRadius: R.unit.scale(5),
        marginTop: R.unit.scale(10),
    },
    btntxt: {
        fontSize: R.unit.scale(8),
        lineHeight: R.unit.scale(12),
        letterSpacing: R.unit.scale(0.15),
  
        color: R.color.white,
        textAlign: 'center',
        padding: R.unit.scale(4)
    },
    canceltxt: {
        color: R.color.black,
        fontSize: R.unit.scale(8),
        textAlign: 'center',
        marginTop: R.unit.scale(10),
        lineHeight: R.unit.scale(12),
        letterSpacing: R.unit.scale(0.15)
    },
    customButtonContainer: {
        width: '100%',
        height: R.unit.scale(20)
    },
    signButtonContainer: {
        marginTop: R.unit.scale(13.5),
    },
})