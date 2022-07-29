import React from 'react'
import {View, Text,StyleSheet, TouchableOpacity,Image, TextInput} from 'react-native'
import Color from '../res/Color'
import R from '../res/R'

const CustomSearchBar = () => {
    return(
<>
  <View style={{ backgroundColor:Color.goldenDeepgit }}>

    <View style={[styles.homeSearchView, { marginVertical: 10 }]}>
    <TouchableOpacity
        style={{ }}
        onPress={() => {
          if (searchText != "")
              navigation.navigate("Search any Keywords======>", { data: searchText }),
              console.log('Press',searchText)
        }}
        
      >
        {/* <Image
          style={{width:25,height:25 }}
        /> */}
      </TouchableOpacity>
      <TextInput
        allowFontScaling={false}
        maxLength={100}
        autoCapitalize="none"
        placeholderTextColor="white"
        underlineColorAndroid="transparent"
        style={styles.homeSearchText}
        placeholder="Search any Keywords"
        returnKeyType="search"
        onChangeText={text => (searchText = text)}
        
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
        borderRadius: 10,
        backgroundColor:Color.goldenDeep,
        height: (40),
        alignItems: "center",
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginHorizontal: 20,
    
    },
    homeSearchText: {
        // color: 'black',
        // flex: 2,
        // width: "80%",
        fontSize: (16),
        backgroundColor:Color.goldenDeep,
        marginHorizontal: (10),
        paddingVertical: (5),
        
    },
})

export default CustomSearchBar