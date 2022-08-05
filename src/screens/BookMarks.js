import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import {CustomHeaderWhite} from '../components/CustomHeaderWhite';
import R from '../res/R';

const BookMarks = () => {
    const bookMarkData = [
        {
            id:0,
            ChapterName:'Anatomy',
            questionsNum:' 5 Q&As'
        },
        {
            id:1,
            ChapterName:'Physiology',
            questionsNum:' 3 Q&As'
        },
        {
            id:2,
            ChapterName:'Biochemistry',
            questionsNum:'  -- Q&A'
        },
        {
            id:3,
            ChapterName:'Practicals(1st year)',
            questionsNum:' --Q&An'
        }
    ]

    const _renderBookMarkItems = ({item}) => {
        return(
            <>
            <View style={styles.cardStyle}>
                <View style={styles.txtView}>
                <Text style={{}}>{item.ChapterName}</Text>
                <Text style={{paddingTop:R.unit.scale(2),color:R.color.medium_grey}}>{item.questionsNum}</Text>
                </View>
                

            </View>
            </>
        )
    }
  return (
    <>
      <SafeAreaView style={styles.container}>
        <CustomHeaderWhite
          hideBackButton={true}
          humberger={true}
          Title={'Bookmarks'}
          headerTitles={true}
        />
        <ScrollView showsVerticalScrollIndicator={false} style={{}}>
          <View style={styles.imageContainer}>
            <Image source={R.image.bookmark()} style={styles.bookMark} />
          </View>
          <View style={styles.flatlistStyle}>
              <FlatList 
              data={bookMarkData}
              renderItem={_renderBookMarkItems}
              keyExtractor={item => item.id}
              />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: R.unit.scale(20),
  },
  bookMark: {
    width: R.unit.scale(40),
    height: R.unit.scale(40),
  },
  cardStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor:R.color.offWhite,
    paddingHorizontal:R.unit.scale(10),
    marginHorizontal:R.unit.scale(10),
    borderRadius:R.unit.scale(4),
    margin:R.unit.scale(5),
    height:R.unit.scale(40),
    marginTop:R.unit.scale(5)
  },
  txtView:{
    //   paddingTop:R.unit.scale(10),
    // padding:R.unit.scale(5)
  },
  flatlistStyle:{
      paddingTop:R.unit.scale(10)
  }
});

export default BookMarks;
