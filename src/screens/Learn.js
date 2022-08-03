import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {CustomHeader} from '../components/CustomHeader';
import CustomSearchBar from '../components/CustomSearchBar';
import R from '../res/R';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');
const Learn = props => {
  const navigation = useNavigation();
  const [selectedItems, setSelectedItems] = useState('');
  const Data = [
    {
      id: 1,
      title: 'Anatomy',
      titlesImage: require('../assets/images/bookmark.png'),
    },
    {
      id: 2,
      title: 'Physiology',
      titlesImage: require('../assets/images/bookmark.png'),
    },
    {
      id: 3,
      title: 'Biochemistry',
      titlesImage: require('../assets/images/bookmark.png'),
    },
    {
      id: 4,
      title: 'Practicals(1st year)',
      titlesImage: require('../assets/images/bookmark.png'),
    },
  ];
  const _renderTopics = ({item}) => {
    return (
      <View style={{paddingTop:R.unit.scale(10)}}>
        <View style={styles.cardContainer}>
          <TouchableOpacity
            style={styles.cardStyle}
            onPress={() => navigation.navigate('LearnCategory')}>
            <Image source={item.titlesImage} style={styles.cardImages} />
          </TouchableOpacity>
          <View style={styles.titleStyle}>
            <Text style={styles.titleTxt} numberOfLines={2}>
              {item.title}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <CustomHeader
          Title={'MBBS 1st year'}
          questionIcon={true}
          headerTitles={true}
          humberger={true}
        />
        <ScrollView showsVerticalScrollIndicator={false} styles={{flex: 1}}>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <CustomSearchBar
              placeholderTxt={'Search any Keywords'}
              onSearchText={false}
            />
          </TouchableOpacity>

          <View style={{}}>
            <FlatList
              data={Data}
              numColumns={3}
              renderItem={_renderTopics}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  titleTxt: {
    color: R.color.black,
    fontSize: R.unit.scale(8),
    textAlign: 'center',
  },
  cardImages: {
    width: R.unit.scale(30),
    height: R.unit.scale(30),
    padding: R.unit.scale(20),
  },
//   itemsCards: {
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     flexDirection: 'column',
//     borderRadius: R.unit.scale(2),
//     padding: R.unit.scale(5),
//     width: R.unit.scale(50),
//     shadowOffset: {width: 1, height: 1},
//     shadowOpacity: 0.1,
//     backgroundColor: R.color.white,
//   },
  cardStyle: {
    backgroundColor: R.color.offWhite,
    height: R.unit.scale(45),
    width: R.unit.scale(48),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: R.unit.scale(7),
    borderRadius: R.unit.scale(2),
    shadowRadius: R.unit.scale(3),
    shadowOpacity: R.unit.scale(0.1),
    shadowColor: R.color.white,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 3,
  },
  titleStyle: {
    width: R.unit.scale(50),
    height: R.unit.scale(25),
    justifyContent: 'center',
  },
  cardContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default Learn;
