import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import {RadioButton} from 'react-native-paper';
import R from '../res/R';

const CustomPopup = (props, {navigation}) => {
  const [checked, setChecked] = React.useState('first');
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.visible}
        onRequestClose={props.close}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.head1}>
              <Text>Minerals Metabolism</Text>
              <View style={styles.cross}>
                <TouchableOpacity>
                  <Image
                    style={{
                      width: 25,
                      height: 25,
                    }}
                    resizeMode="contain"
                    source={{
                      uri: 'https://img.icons8.com/material-outlined/24/000000/delete-sign.png',
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={styles.head2}>Minerals Metabolism</Text>
            </View>

            <View style={styles.Number1}>
              <View style={styles.mcq}>
                <Text style={styles.mcq1}>13</Text>
                <Text style={styles.mcq2}>Tests</Text>
              </View>
              <View style={styles.min}>
                <Text style={styles.min1}>13</Text>
                <Text style={styles.min2}>Mins</Text>
              </View>
              <View style={styles.mark}>
                <Text style={styles.mark1}>0</Text>
                <Text style={styles.mark2}>Marks</Text>
              </View>
            </View>
            <View style={styles.radiob1}>
              <View style={styles.radiob2}>
                <RadioButton
                  value="first"
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('first')}
                />

                <Text style={styles.learn}>Learn Mode</Text>
              </View>
              <Text style={styles.learn1}>
                View answers after each question
              </Text>
              <View style={styles.radiob3}>
                <RadioButton
                  value="second"
                  status={checked === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('second')}
                />
                <Text style={styles.exam}>Exam Mode</Text>
              </View>
              <Text style={styles.exam1}>
                View answers after submitting the test
              </Text>
            </View>

            <Text style={styles.modalText}>{props.text1}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={props.press}>
              <Text style={styles.textStyle}>START</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={props.press2}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    height: '93%',
  },
  button: {
    borderRadius: 4,
    padding: 10,
    elevation: 2,
    width: '65%',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  head1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cross: {
    paddingLeft: 180,
  },

  head2: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingRight: 155,
  },
  nu: {
    paddingTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingRight: 230,
  },
  mc: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingRight: 230,
  },
  nu1: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingRight: 230,
  },
  mc1: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingRight: 40,
  },
  mcq1: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  mcq2: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  learn: {
    paddingTop: 5,
    fontWeight: 'bold',
    fontSize: 20,
  },
  Number1: {
    flexDirection: 'row',
  },
  mcq: {
    flexDirection: 'column',
    paddingTop: 20,
    paddingRight: 90,
  },
  min: {
    flexDirection: 'column',
    paddingTop: 20,
    paddingRight: 90,
  },
  min1: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  min2: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  mark: {
    flexDirection: 'column',
    paddingTop: 20,
  },
  mark1: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  mark2: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  radiob1: {
    paddingTop: 50,
    paddingRight: 150,
  },
  learn1: {
    paddingLeft: 37,
  },
  radiob2: {
    flexDirection: 'row',
  },
  radiob3: {
    flexDirection: 'row',
    paddingTop: 40,
  },
  exam: {
    paddingTop: 5,
    fontWeight: 'bold',
    fontSize: 20,
    flexDirection: 'column',
  },
  exam1: {
    paddingLeft: 37,
  },
});

export default CustomPopup;
