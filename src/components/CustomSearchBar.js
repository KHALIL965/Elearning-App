import React from 'react'
import {View, Text,StyleSheet, TouchableOpacity,Image, TextInput} from 'react-native'
import Color from '../res/Color'
import R from '../res/R'

const CustomSearchBar = (props) => {
    const {
       searchIcon,
       searchText,
       backgroundColor,
       placeholderTxt,
       inactiveSearch,
       onSearchText

      } = props;
    return(
<>
  <View style={{  }}>

    <View style={[{backgroundColor: inactiveSearch ? R.color.goldenDeep : R.color.white},styles.homeSearchView, { marginVertical: 10 }]}>
    <TouchableOpacity
        style={{ }}
        onPress={() => {
          if (searchText != "")
              navigation.navigate("Search any Keywords======>", { data: searchText }),
              console.log('Press',searchText)
        }}
        
      >
        <Image
        source={R.image.seachIcon()}
          style={styles.searchIcon}
        />
      </TouchableOpacity>
      <TextInput
        allowFontScaling={false}
        maxLength={100}
        autoCapitalize="none"
        placeholderTextColor="white"
        underlineColorAndroid="transparent"
        style={styles.homeSearchText}
        placeholder={placeholderTxt}
        returnKeyType="search"
        // onChangeText={text => (searchText = text)}
        onChangeText={props.onSearchText}
        
      />
      
    </View>
    {/* <View
      style={{
        // backgroundColor: "#f3f3f3",
        width: '100%',
        height: 1,
        marginTop: 2.5
      }}
    /> */}
  </View>

</>
    )
}

const styles = StyleSheet.create({
    container:{},
    homeSearchView: {
        // marginBottom: Platform.OS === 'ios' ? 20 : 25,
        borderRadius:R.unit.scale(2),
        backgroundColor:Color.goldenDeep,
        height: (40),
        alignItems: "center",
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginHorizontal:R.unit.scale(10),
    
    },
    homeSearchText: {
        fontSize: (16),
        backgroundColor:Color.goldenDeep,
        marginHorizontal: (10),
        paddingVertical: (5),
        
    },
    searchIcon:{
        width:R.unit.scale(10),
        height:R.unit.scale(10),
        left:R.unit.scale(20)
    }
})

export default CustomSearchBar