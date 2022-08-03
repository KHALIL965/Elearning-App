import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import {CustomHeader} from '../components/CustomHeader';
import CustomSearchBar from '../components/CustomSearchBar';
import R from '../res/R';
import {useNavigation} from '@react-navigation/native';

const Search = props => {
  const [active, setActive] = useState(true);
  const searchData = [
    {
      id: 0,
      category: 'Mcq',
    },
    {
      id: 1,
      category: 'Q&A',
    },
    {
      id: 2,
      category: 'QBank',
    },
    {
      id: 3,
      category: 'Lessons',
    },
    {
      id: 4,
      category: 'Topics',
    },
  ];
  const navigation = useNavigation();

  const _renderCategoryTitle = ({item}) => {
    console.log('Category>>>>>>>>', item);
    return (
      <TouchableOpacity
        style={{}}
        onPress={() =>
          item.category ? R.color.goldenDeep : R.color.dark_grey
        }>
        <View style={styles.categoryTxt}>
          <Text style={styles.category}>{item.category}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={R.image.backIcon()} style={styles.backIcon} />
        </TouchableOpacity>
        <CustomSearchBar
          inactive={R.color.white}
          placeholderTxt={'          Search    '}
        />
        <Text style={styles.backIcon}>Mic</Text>
      </View>
      <View>
        <ScrollView>
          <View style={styles.categoryTopicView}>
            <FlatList
              data={searchData}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{flex: 1}}
              renderItem={item => _renderCategoryTitle(item)}
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
    backgroundColor: R.color.offWhite,
  },
  backIcon: {
    width: R.unit.scale(10),
    height: R.unit.scale(8),
    marginTop: R.unit.scale(10),
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  categoryTopicView: {
    // justifyContent: 'space-evenly',
    // flexDirection: 'row',
  },
  categoryTxt: {
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: R.color.dark_grey,
    width: R.unit.scale(40),
    // padding: R.unit.scale(5),
    height: R.unit.scale(18),
    borderRadius: R.unit.scale(8),
    flexDirection: 'row',
    marginTop: R.unit.scale(10),
    marginHorizontal: R.unit.scale(3),
    shadowOffset: {width: 1, height: 1},
  },
  category: {
    textAlign: 'center',
    color: R.color.black,
    fontSize: R.unit.scale(8),
    fontWeight: 'bold',
  },
});

export default Search;
