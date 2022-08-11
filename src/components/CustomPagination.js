import React, { Component, useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image,Platform, SafeAreaView} from 'react-native'
import Dots from 'react-native-dots-pagination';
import R from '../res/R';
import Content from '../screens/Content';
import { useNavigation } from '@react-navigation/native';
 

const cancelImg = { uri : 'https://png.pngtree.com/png-vector/20190412/ourmid/pngtree-vector-cancel-icon-png-image_931207.jpg'}

const CustomPagination = () => {
    const navigation = useNavigation()
    const [active, setActive] = useState(0)
    const [pageNum,setPageNum] = useState(1)
    const [bookmarkState, setBookmarkState] = useState(false)
    const [tickState, setTickState] = useState(false)
    const [savedbookmark,setSavedbookmark]= useState([])
    
    const prev = () => { 
        if(pageNum > 1){
            setPageNum(pageNum-1);
            setActive (active-1);
            setBookmarkState(false);
            setTickState(false)
        }
        else if(pageNum==1){
            setPageNum(1)
            setActive(0)
        }else{
            null
        } 
      }

    const next = () => {      
        if(pageNum < 10){
            setActive (active+1);
            setPageNum(pageNum+1);
            setBookmarkState(false);
            setTickState(false)
        }
        else if(pageNum == 10){
            setPageNum(10)
            setActive(9)
        }else{
          null
        }
      }

     const bookmarkFunc = () => {
        if(bookmarkState){
            setBookmarkState(false)
        }
        else{
            setBookmarkState(true)
        }
     }

     const tickFunc = () => {
        if(tickState){
            setTickState(false)
        }
        else{
            setTickState(true)
        }
     }

    return(
        <SafeAreaView style={styles.container}> 
        <View style={{flex: 1, backgroundColor : R.color.goldenDeep}} >
          <View style = {styles.topContainer}>
            <View style = {{flexDirection : 'row', justifyContent : 'space-between'}}>
               <Text style = {styles.pageNumText}> {pageNum} of 10 </Text>
                 <TouchableOpacity  
                    onPress={()=>navigation.navigate('Learn')}>
                    <Image
                        style = {styles.cancel}
                        source = {cancelImg} />
                 </TouchableOpacity>
            </View>  
             <View style = {styles.paginationStyle}>
              <Dots length={10} active={active}  
               paddingHorizontal = {0}
               activeDotHeight = {10.5}
               activeDotWidth = {10.5}
               passiveDotHeight = {9}
               passiveDotWidth = {9}
               activeColor = {R.color.goldenDeep}
            />
          </View>
          </View>
          <Content page = {"Page Number: "+pageNum} />

          <View style={styles.bottomContainer}>
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity onPress = {() => bookmarkFunc() } >
                   <Image
                      style = {styles.bookmark} 
                      source={bookmarkState ? R.image.savedBookmarkImg() : R.image.bookmarkImg()}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => tickFunc()}>
                   <Image
                     style = {styles.tick} 
                     source={tickState ? R.image.savedTickImg() : R.image.tickImg()}
                    />
                </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row"}}>
                <TouchableOpacity>
                    <Text style = {styles.prevButton} onPress = {() => prev()}>PREV</Text>
                 </TouchableOpacity>
                <TouchableOpacity>
                    <Text style = {styles.nextButton} onPress = {() => next()}>NEXT</Text>
                </TouchableOpacity>
                </View>
          </View>
       </View>
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({ 
    container:{
        flex:1
    },
    topContainer : {
        height : R.unit.scale(25),
        width : R.unit.scale(190),
        backgroundColor : R.color.offWhite,
    },
    pageNumText : {
        fontWeight : '700', 
        marginTop : R.unit.scale(1),
        fontSize : R.unit.scale(8)
    },
    cancel : {
        height : R.unit.scale(10),
        width : R.unit.scale(10),
        marginRight : Platform.OS == 'ios'? R.unit.scale(8):R.unit.scale(6),
        marginTop : Platform.OS == 'ios'? R.unit.scale(5): R.unit.scale(4),
    },
    paginationStyle : {
         bottom : R.unit.scale(3)
    },
    bottomContainer : {
            flexDirection : 'row',
            height : R.unit.scale(23),
            width : R.unit.scale(190),
            position: 'absolute',
            backgroundColor : R.color.offWhite,
            bottom: 0
    },
     bookmark : {
            margin : R.unit.scale(1),
            height : R.unit.scale(18),
            width : R.unit.scale(19.5)
    },
    savedBookmarkImg : {
            margin : R.unit.scale(1),
            height : R.unit.scale(18),
            width : R.unit.scale(19.5),  
        },
        tick : {  
            margin : R.unit.scale(1),
            marginLeft : R.unit.scale(8),
            height : R.unit.scale(18),
            width : R.unit.scale(18) 
        },
        prevButton : {
            margin : R.unit.scale(1),
            height : R.unit.scale(16),
            width : R.unit.scale(44),
            borderRadius : R.unit.scale(3),
           marginLeft : R.unit.scale(37),
            backgroundColor : R.color.goldenDeep,
            color : R.color.offWhite,
            fontWeight : '500',
            textAlign : 'center',
            fontSize : R.unit.scale(9),
            padding : R.unit.scale(2),
        },
        nextButton : {
            margin : R.unit.scale(1),
            height : R.unit.scale(16),
            width : R.unit.scale(44),
            borderRadius : R.unit.scale(3),
            marginLeft : R.unit.scale(6),
            backgroundColor : R.color.goldenDeep,
            color : R.color.offWhite,
            fontWeight : '500',
            textAlign : 'center',
            fontSize : R.unit.scale(9),
            padding : R.unit.scale(2),
        }  
})
    
export default CustomPagination;