import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CustomHeaderWhite} from '../components/CustomHeaderWhite';
import CustomWebView from '../components/CustomWebView';
import R from '../res/R';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';
import {CustomFilter} from '../components/CustomFilter';
import CustomProgressBar from '../components/CustomProgressBar';

const LearnCategory = ({route}) => {
  const navigation = useNavigation();
  const {categoryTitle} = route.params;
  const [filterData, setFilterData] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [subCategoryFilterData, setSubCategoryFilterData] = useState('');

  useEffect(() => {
    console.log('LearnCategory>>>>>>>', categoryTitle);
  }, []);
  const categoryData = [
    {
      id: 0,
      subCategoryTitle: 'General Anatomy',
      subCategory: [
        {
          subCategoryid: 0,
          subCategoryTile: 'Introduction-General Anatomy',
          percentageCover: '0% completed',
          questions: '1 Q&As',
          LockedIcon: require('../assets/images/bookmarkBrown.png'),
          subCategoryImage: require('../assets/images/searchIcon.png'),
        },
        {
          subCategoryid: 1,
          subCategoryTile: 'Skeleton',
          percentageCover: '0% completed',
          questions: '1 Q&As',
          LockedIcon: require('../assets/images/bookmarkBrown.png'),
          subCategoryImage: require('../assets/images/profileIcons.png'),
        },
        {
          subCategoryid: 2,
          subCategoryTile: 'Joints',
          percentageCover: '0% completed',
          questions: '1 Q&As',
          LockedIcon: require('../assets/images/bookmarkBrown.png'),
          subCategoryImage: require('../assets/images/searchIcon.png'),
        },
        {
          subCategoryid: 3,
          subCategoryTile: 'Joints',
          percentageCover: '0% completed',
          questions: '1 Q&As',
          LockedIcon: require('../assets/images/bookmarkBrown.png'),
          subCategoryImage: require('../assets/images/searchIcon.png'),
        },
      ],
    },
    {
      id: 1,
      subCategoryTitle: 'Upper Limb',
      subCategory: [
        {
          subCategoryid: 0,
          subCategoryTile: 'Introduction-Upper Limb',
          percentageCover: '0% completed',
          questions: '1 Q&As',
          LockedIcon: require('../assets/images/bookmarkBrown.png'),
          subCategoryImage: require('../assets/images/profileIcons.png'),
        },
        {
          subCategoryid: 1,
          subCategoryTile: 'Bones of Upper Limb',
          percentageCover: '0% completed',
          questions: '1 Q&As',
          LockedIcon: require('../assets/images/bookmarkBrown.png'),
          subCategoryImage: require('../assets/images/searchIcon.png'),
        },
        {
          subCategoryid: 2,
          subCategoryTile: 'Pectoral Region',
          percentageCover: '0% completed',
          questions: '1 Q&As',
          LockedIcon: require('../assets/images/bookmarkBrown.png'),
          subCategoryImage: require('../assets/images/searchIcon.png'),
        },
      ],
    },
    {
      id: 2,
      subCategoryTitle: 'Thorax-1',
      subCategory: [
        {
          subCategoryid: 0,
          subCategoryTile: 'Introduction-Thorax',
          percentageCover: '0% completed',
          questions: '1 Q&As',
          LockedIcon: require('../assets/images/bookmarkBrown.png'),
          subCategoryImage: require('../assets/images/searchIcon.png'),
        },
        {
          subCategoryid: 1,
          subCategoryTile: 'Introduction-General Anatomy',
          percentageCover: '0% completed',
          questions: '1 Q&As',
          LockedIcon: require('../assets/images/bookmarkBrown.png'),
          subCategoryImage: require('../assets/images/searchIcon.png'),
        },
        {
          subCategoryid: 2,
          subCategoryTile: 'Introduction-General Anatomy',
          percentageCover: '0% completed',
          questions: '1 Q&As',
          LockedIcon: require('../assets/images/bookmarkBrown.png'),
          subCategoryImage: require('../assets/images/searchIcon.png'),
        },
      ],
    },
    {
      id: 3,
      subCategoryTitle: 'Thorax-1',
      subCategory: [
        {
          subCategoryid: 0,
          subCategoryTile: 'Introduction-Thorax',
          percentageCover: '0% completed',
          questions: '1 Q&As',
          LockedIcon: require('../assets/images/bookmarkBrown.png'),
          subCategoryImage: require('../assets/images/searchIcon.png'),
        },
        {
          subCategoryid: 1,
          subCategoryTile: 'Introduction-General Anatomy',
          percentageCover: '0% completed',
          questions: '1 Q&As',
          LockedIcon: require('../assets/images/bookmarkBrown.png'),
          subCategoryImage: require('../assets/images/searchIcon.png'),
        },
        {
          subCategoryid: 2,
          subCategoryTile: 'Introduction-General Anatomy',
          percentageCover: '0% completed',
          questions: '1 Q&As',
          LockedIcon: require('../assets/images/bookmarkBrown.png'),
          subCategoryImage: require('../assets/images/searchIcon.png'),
        },
      ],
    },
    {
      id: 4,
      subCategoryTitle: 'Thorax-1',
      subCategory: [
        {
          subCategoryid: 0,
          subCategoryTile: 'Introduction-Thorax',
          percentageCover: '0% completed',
          questions: '1 Q&As',
          LockedIcon: require('../assets/images/bookmarkBrown.png'),
          subCategoryImage: require('../assets/images/searchIcon.png'),
        },
        {
          subCategoryid: 1,
          subCategoryTile: 'Introduction-General Anatomy',
          percentageCover: '0% completed',
          questions: '1 Q&As',
          LockedIcon: require('../assets/images/bookmarkBrown.png'),
          subCategoryImage: require('../assets/images/searchIcon.png'),
        },
        {
          subCategoryid: 2,
          subCategoryTile: 'Introduction-General Anatomy',
          percentageCover: '0% completed',
          questions: '1 Q&As',
          LockedIcon: require('../assets/images/bookmarkBrown.png'),
          subCategoryImage: require('../assets/images/searchIcon.png'),
        },
      ],
    },
    {
      id: 5,
      subCategoryTitle: 'Thorax-1',
      subCategory: [
        {
          subCategoryid: 0,
          subCategoryTile: 'Introduction-Thorax',
          percentageCover: '0% completed',
          questions: '1 Q&As',
          LockedIcon: require('../assets/images/bookmarkBrown.png'),
          subCategoryImage: require('../assets/images/profileIcons.png'),
        },
        {
          subCategoryid: 1,
          subCategoryTile: 'Introduction-General Anatomy',
          percentageCover: '0% completed',
          questions: '1 Q&As',
          LockedIcon: require('../assets/images/bookmarkBrown.png'),
          subCategoryImage: require('../assets/images/searchIcon.png'),
        },
        {
          subCategoryid: 2,
          subCategoryTile: 'Introduction-General Anatomy',
          percentageCover: '0% completed',
          questions: '1 Q&As',
          LockedIcon: require('../assets/images/bookmarkBrown.png'),
          subCategoryImage: require('../assets/images/searchIcon.png'),
        },
      ],
    },
  ];

  const _renderCategoryTopic = ({item}) => {
    console.log('CategoryItems>>>>>>>', item.subCategoryTitle);
    const filterData = item.subCategoryTitle;
    console.log('FilterData_Save>>>>>', filterData);
    return (
      <>
        <TouchableOpacity
          style={{
            marginHorizontal: R.unit.scale(10),
            marginRight: R.unit.scale(10),
          }}
          onPress={() => navigation.navigate('Scorecard')}>
          <Text style={styles.categoryTxt}>{item.subCategoryTitle}</Text>
        </TouchableOpacity>
        {/* dottedCode */}
        <View style={{transform: [{rotate: '90deg'}], right: R.unit.scale(82)}}>
          <Text
            ellipsizeMode="clip"
            style={{color: R.color.grey}}
            numberOfLines={1}>
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          </Text>
        </View>
        {item.subCategory.map((optionItem, optionIndex) => {
          console.log('SetFilter Data>>>>>>>>', optionItem.subCategoryTile);
          const subCategoryFilterData = item.subCategoryTitle;
          setSubCategoryFilterData(subCategoryFilterData);
          console.log('MyFilterDataResponse', subCategoryFilterData);

          return (
            <View style={styles.articleContainer}>
              <View style={styles.voucherImgCon}>
                <View style={styles.circleStyle}>
                  <Text style={{color: R.color.offWhite}}>{optionIndex}</Text>
                </View>
                <View style={styles.cardStyle}>
                  <View style={styles.imageCard}>
                    <Image
                      source={optionItem.subCategoryImage}
                      style={styles.voucherImageStyle}
                    />
                  </View>
                  <View style={styles.txtProgress}>
                    <Text style={styles.productText}>
                      {optionItem.subCategoryTile}
                    </Text>
                    <View style={styles.progress}>
                      <CustomProgressBar />
                    </View>
                    <View style={styles.percentageStyle}>
                      <Text style={styles.percentageTxt}>
                        {optionItem.percentageCover}
                      </Text>
                      <Text style={styles.questionsNum}>
                        {optionItem.questions}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.voucherTextCan}>
                <Image
                  source={optionItem.LockedIcon}
                  style={styles.lockedIcon}
                />
              </View>
            </View>
          );
        })}
      </>
    );
  };

  const renderFilterDataItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => setModalVisible(false)}>
        <View style={styles.txtFilterStyle}>
          <Text style={styles.txtFilter}>{item.subCategoryTitle}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomHeaderWhite
          hideBackButton={true}
          humberger={true}
          Title={categoryTitle}
          headerTitles={true}
          humbergeronPress={() => setModalVisible(true)}
        />
        <FlatList
          data={categoryData}
          showsVerticalScrollIndicator={false}
          renderItem={item => _renderCategoryTopic(item)}
          keyExtractor={item => item.id}
        />
      </ScrollView>
      <CustomFilter
        isVisible={isModalVisible}
        closeModal={() => setModalVisible(false)}
        filterData={categoryData}
        renderItemFilter={renderFilterDataItem}
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
    // alignSelf: 'center',
    height: R.unit.scale(44),
    backgroundColor: R.color.offWhite,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    borderRadius: R.unit.scale(3),
    marginTop: R.unit.scale(8),
    marginRight: R.unit.scale(10),
    marginLeft: R.unit.scale(25),
  },
  voucherImageStyle: {
    width: R.unit.scale(20),
    height: R.unit.scale(20),
    // paddingTop:30
  },
  voucherImgCon: {
    // width: '25%',
    // justifyContent:'space-around',
    // flexDirection:'row',
    // alignItems: 'center',
    // paddingHorizontal: R.unit.scale(30),
    padding: R.unit.scale(10),
  },
  voucherTextCan: {
    // width: '55%',
    // justifyContent: 'center',
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
  TilteStyles: {
    fontSize: R.unit.scale(8),
    lineHeight: R.unit.scale(10),
    letterSpacing: R.unit.scale(0.15),
  },
  categoryTxt: {
    paddingTop: R.unit.scale(20),
  },
  circleStyle: {
    position: 'absolute',
    backgroundColor: R.color.goldenDeep,
    borderRadius: R.unit.scale(25),
    width: R.unit.scale(15),
    height: R.unit.scale(15),
    left: R.unit.scale(-20),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: R.unit.scale(12),
  },
  cardStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  imageCard: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  txtProgress: {
    marginLeft: R.unit.scale(5),
  },
  progress: {
    padding: R.unit.scale(2),
  },
  percentageStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: R.unit.scale(10),
    padding: R.unit.scale(3),
  },
  percentageTxt: {
    right: R.unit.scale(8),
  },
  questionsNum: {
    paddingLeft: R.unit.scale(10),
  },
  lockedIcon: {
    width: R.unit.scale(10),
    height: R.unit.scale(10),
    bottom: R.unit.scale(15),
  },
  txtFilter: {
    fontSiz: R.unit.scale(10),
    color: R.color.goldenDeep,
  },
  txtFilterStyle: {
    width: R.unit.scale(120),
    height: R.unit.scale(25),
    borderBottomWidth: 1,
    borderBottomColor: R.color.goldenDeep,
    padding: R.unit.scale(8),
  },
});

export default LearnCategory;
