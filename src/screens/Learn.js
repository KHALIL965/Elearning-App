import React from 'react'
import {StyleSheet,View, Text, SafeAreaView, FlatList, Image, TouchableOpacity} from 'react-native'
import { CustomHeader } from '../components/CustomHeader'
import CustomSearchBar from '../components/CustomSearchBar'
import Color from '../res/Color'
import R from '../res/R'

const Learn= () => {

    const Data = [
        {
            id: 1,
            title: 'Anatomy',
            image: require("../assets/images/bookmark.png"),
         
        },
        {
            id: 2,
            title: 'Physiology',
            image: require("../assets/images/bookmark.png"),
         
        },
        {
            id: 3,
            title: 'Biochemistry',
            image: require("../assets/images/bookmark.png"),
        },
        {
            id: 4,
            title: 'Practicals(1st year)',
            image: require("../assets/images/bookmark.png"),
        },
    ]
    const _renderTopics = ({item,index}) => {
        console.log("Items>>>>>>>.",item,index);
       <TouchableOpacity style={{}}>
           <View stle={styles.cardImage}>
               <Image source={item.image} style={styles.cardImages} />
               <Text style={styles.titleTxt}>{item.title}</Text>
           </View>
       </TouchableOpacity>

    }
   return(
        <SafeAreaView styles={styles.container}>
        <CustomHeader
                Title={'Learn'}
                questionIcon={true}
                headerTitles={true}
                humberger={true}
            />
             <CustomSearchBar />
            <View style={styles.mainContainer}>
            <FlatList
                    data={Data}
                    renderItem={(item,index) => _renderTopics(item, index)}
                    keyExtractor={item => item.id}
                />
             </View> 
        </SafeAreaView> 
      
   )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Color.goldenDeep
    },
  
    titleTxt:{
        color:"black",
        fontSize:R.unit.scale(20)

    },
    cardImage:{
        width:100,
        backgroundColor:'red',
        height:50,
        readius:R.unit.scale(5)
    },
    mainContainer:{
        backgroundColor:'red'
    },
    cardImages:{
        width:20,
        height:20
    }
})
export default Learn;