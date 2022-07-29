import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Platform, Dimensions } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import R from '../res/R'
import Color from '../res/Color';
export const CustomHeader = (props) => {
  const {
    hideBackButton,
    hideArrowButton,
    logoIcon,
    singleLine,
    headerText,
    headerTitles,
    Title,
    humberger,
    onPress,
    crossIcons,
    questionIcon,
  } = props;

  const [isModalVisible, setModalVisible] = useState(false);
//   const navigation = useNavigation();

  function backButton() {
    setModalVisible(true)
  }

  return (
    <View style={styles.DashMainContainer}>
      {logoIcon && (
        <TouchableOpacity 
        // onPress={() => backButton()}
        >
          <View style={styles.logoContainer}>
            {/* <Image
              source={R.image.LogoImage()}
              style={{ width: R.unit.scale(27), height: R.unit.scale(25) }}
            /> */}
          </View>
        </TouchableOpacity>
      )}
      {hideBackButton && (
        <TouchableOpacity
        //   onPress={onPress}
        >
          <View>
            {/* <Image
              source={R.image.LeftArrowIcon()} style={styles.imageStyle}
            /> */}
          </View>
        </TouchableOpacity>
      )}
      {hideArrowButton && (
        <TouchableOpacity
        //  onPress={() => navigation.goBack()}
         >
          <View>
            {/* <Image
              source={R.image.LeftArrowIcon()} style={styles.imageStyle}
            /> */}
          </View>
        </TouchableOpacity>
      )}
      {questionIcon && (
        <TouchableOpacity 
        // onPress={onPress}
        >
          <View>
            <Image
              style={{ width:20, height:20 }}
              source={R.image.profileIcon()}
            />
          </View>
        </TouchableOpacity>
      )}
      {singleLine && (
        <View style={styles.headerLine} />
      )}
      {headerText && (
        <Text style={styles.textStyles}>{'ProfileIcon'}</Text>
      )}
      {headerTitles && (
        <View styl={styles.textView}>
          <Text style={styles.headerTitle}>{Title}</Text>
        </View>
      )}
      {crossIcons && (
        <TouchableOpacity 
        // onPress={onPress}
        >
          <View>
            {/* <Image
              style={{ tintColor: R.color.white }}
              source={R.image.crossIcon()}
            /> */}
          </View>
        </TouchableOpacity>
      )}
      {humberger && (
        <TouchableOpacity
          activeOpacity={1}
        //   onPress={() => navigation.openDrawer()}
        >
          <View>
            
            <Image
              style={{ width:20,height:20 }}
              source={R.image.bookmark()}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  DashMainContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: "relative",
    padding: R.unit.scale(5),
    zIndex: 1,
    backgroundColor:Color.goldenDeep,
    height: R.unit.scale(30),
    paddingHorizontal: R.unit.scale(10)
  },
  signButtonCon: {
    width: Platform.OS == 'ios' ? '25%' : '28%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logoContainer: {
    marginRight: R.unit.scale(40)
  },
  textStyle: {
    // fontFamily: R.font.FONT_GILROY_MEDIUM,
    fontSize: R.unit.scale(5.9),
    lineHeight: R.unit.scale(9),
    letterSpacing: R.unit.scale(0.09),
    paddingBottom: R.unit.scale(3),
  },
  RegisterButtonCon: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'flex-end',
  },
  signInSubContainer: {
    width: '100%',

  },
  headerLine: {
    height: R.unit.scale(3),
    width: R.unit.scale(60),
    backgroundColor: R.color.activefontColor,
    borderRadius: R.unit.scale(1.5)
  },
  borderlineContainer: {
    width: R.unit.scale(15),
    height: R.unit.scale(1),
    borderRadius: R.unit.scale(5)
  },
  imageStyle: {
    tintColor: R.color.white,
  },
  hideSignUpContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTitle: {
    // fontFamily: R.font.FONT_GILROY_MEDIUM,
    fontSize: R.unit.scale(8),
    lineHeight: R.unit.scale(12),
    letterSpacing: R.unit.scale(0.15),
    textAlign: "center",
    color: R.color.white,
    marginHorizontal: R.unit.scale(35)
  },
  textStyles: {
    color: R.color.white
  },
  humbergerStyle: {
    backgroundColor: R.color.white,
    width: R.unit.scale(11),
    height: R.unit.scale(0.5),
    margin: (3.2, 3),
    tintColor: 'red',
  },
  imgNavBarInner: {
    width: R.unit.scale(35),
    height: R.unit.scale(35),
    alignSelf: 'flex-end',
  },
  menu: {
    position: 'absolute',
    zIndex: 6,
    elevation: 6,
    flex: 1,
    top: 0,
    right: 0,
    bottom: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: R.color.smoothBlack
  },
  textView: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})