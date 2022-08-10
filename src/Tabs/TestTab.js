import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import R from '../res/R';
import {ScrollView} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';



const TestTab = () => {

  const [filterData, setFilterData] = useState('')
  const navigation = useNavigation();

  // useEffect(()=>{
  //     console.log("LearnCategory>>>>>>>")
  // },[])
 
  const categoryData = [
    {
      id: 0,
      subCategoryTitle: 'General Anatomy',
      subCategory: [
        {
          subCategoryid: 11,
          subCategoryTile: 'Introduction-General Anatomy',
          percentageCover: '0%',
          questions: '1 Q&As',
          subCategoryImage: require('../assets/images/searchIcon.png'),
        },
        {
          subCategoryid: 12,
          subCategoryTile: 'Skeleton',
          percentageCover: '0%',
          questions: '1 Q&As',
          subCategoryImage: require('../assets/images/searchIcon.png'),
        },
        {
          subCategoryid: 13,
          subCategoryTile: 'Joints',
          percentageCover: '0%',
          questions: '1 Q&As',
          subCategoryImage: require('../assets/images/searchIcon.png'),
        },
        {
          subCategoryid: 14,
          subCategoryTile: 'Joints',
          percentageCover: '0%',
          questions: '1 Q&As',
          subCategoryImage: require('../assets/images/searchIcon.png'),
        },
      ],
    },
    {
      id: 1,
      subCategoryTitle: 'Upper Limb',
      subCategory: [
        {
          subCategoryid: 21,
          subCategoryTile: 'Introduction-Upper Limb',
          percentageCover: '0%',
          questions: '1 Q&As',
          subCategoryImage: require('../assets/images/searchIcon.png'),
        },
        {
          subCategoryid: 22,
          subCategoryTile: 'Bones of Upper Limb',
          percentageCover: '0%',
          questions: '1 Q&As',
          subCategoryImage: require('../assets/images/searchIcon.png'),
        },
        {
          subCategoryid: 33,
          subCategoryTile: 'Pectoral Region',
          percentageCover: '0%',
          questions: '1 Q&As',
          subCategoryImage: require('../assets/images/searchIcon.png'),
        },
      ],
    },
    {
      id: 2,
      subCategoryTitle: 'Thorax-1',
      subCategory: [
        {
          subCategoryid:23,
          subCategoryTile: 'Introduction-Thorax',
          percentageCover: '0%',
          questions: '1 Q&As',
          subCategoryImage: require('../assets/images/searchIcon.png'),
        },
        {
          subCategoryid: 43,
          subCategoryTile: 'Introduction-General Anatomy',
          percentageCover: '0%',
          questions: '1 Q&As',
          subCategoryImage: require('../assets/images/searchIcon.png'),
        },
        {
          subCategoryid: 53,
          subCategoryTile: 'Introduction-General Anatomy',
          percentageCover: '0%',
          questions: '1 Q&As',
          subCategoryImage: require('../assets/images/searchIcon.png'),
        },
      ],
    },
    {
      id: 3,
      subCategoryTitle: 'Thorax-1',
      subCategory: [
        {
          subCategoryid: 34,
          subCategoryTile: 'Introduction-Thorax',
          percentageCover: '0%',
          questions: '1 Q&As',
          subCategoryImage: require('../assets/images/searchIcon.png'),
        },
        {
          subCategoryid: 54,
          subCategoryTile: 'Introduction-General Anatomy',
          percentageCover: '0%',
          questions: '1 Q&As',
          subCategoryImage: require('../assets/images/searchIcon.png'),
        },
        {
          subCategoryid: 64,
          subCategoryTile: 'Introduction-General Anatomy',
          percentageCover: '0%',
          questions: '1 Q&As',
          subCategoryImage: require('../assets/images/searchIcon.png'),
        },
      ],
    },
    
  ];

  
  const _renderCategoryTopic = ({item}) => {
    console.log('CategoryItems>>>>>>>', item.subCategoryTitle);
    const filterData = item.subCategoryTitle
    console.log("FilterData_Save>>>>>",filterData)
    return (
      <>
        <TouchableOpacity
          style={{
            marginHorizontal: R.unit.scale(10),
            marginRight: R.unit.scale(10),
          }}
           >
          <Text style={styles.categoryTxt}>{item.subCategoryTitle}</Text>
        </TouchableOpacity>
        {/* dottedCode */}
        <View style={{transform: [{rotate: '90deg'}], right: R.unit.scale(82)}}>
          <Text ellipsizeMode="clip" style={{color:R.color.grey}} numberOfLines={1}>
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - - - - - - - - - - - - - -
          </Text>
        
        </View>
        {item.subCategory.map((optionItem, optionIndex) => {
          return (
            <View style={styles.articleContainer}>
              <View style={styles.voucherImgCon}>
                <Image
                  source={optionItem.subCategoryImage}
                  style={styles.voucherImageStyle}
                />
              </View>
              <View style={styles.voucherTextCan}>
              <View
            style={{
              position: 'absolute',
              backgroundColor: R.color.goldenDeep,
              borderRadius: 50,
              width: 30,
              height: 30,
              right:R.unit.scale(128),
              justifyContent:'center',
              alignItems:'center'
            }}
          >
          <Text style={{color:R.color.offWhite}}>{optionIndex}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Learn")}>
          <Text  style={styles.productText}>
                  {optionItem.subCategoryTile}
                </Text>
          </TouchableOpacity>
               
              </View>
              <View style={styles.arrowImageCan}>
                <Image
                  source={optionItem.percentageCover}
                  style={styles.arrowImage}
                />
              </View>
            </View>
          );
        })}
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
     
        <FlatList
          data={categoryData}
          showsVerticalScrollIndicator={false}
          renderItem={item => _renderCategoryTopic(item)}
          keyExtractor={item => item.id}
        />
 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.color.white,
  },
  articleContainer: {
    // paddingHorizontal: R.unit.scale(10),
    alignSelf: 'center',
    height: R.unit.scale(44),
    backgroundColor: R.color.offWhite,
    flexDirection: 'row',
    borderRadius: R.unit.scale(3),
    marginTop: R.unit.scale(8),
    marginRight: R.unit.scale(10),
    marginLeft: R.unit.scale(25),
    // paddingRight:R.unit.scale(60)
  },
  voucherImageStyle: {
    width: R.unit.scale(10),
    height: R.unit.scale(10),
  },
  voucherImgCon: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  voucherTextCan: {
    width: '55%',
    justifyContent: 'center',
  },
  arrowImageCan: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowImage: {
    tintColor: R.color.grey,
    transform: [{rotate: '180deg'}],
  },

  BenefitsStyles: {
    fontSize: R.unit.scale(8),
    lineHeight: R.unit.scale(12),
    letterSpacing: R.unit.scale(0.15),

    bottom: -3.5,
  },
  TilteStyles: {
    fontSize: R.unit.scale(8),
    lineHeight: R.unit.scale(10),
    letterSpacing: R.unit.scale(0.15),
  },
  categoryTxt: {
    paddingTop: R.unit.scale(20),
  },
});

export default TestTab;
