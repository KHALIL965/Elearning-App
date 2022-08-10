import React, {useEffect, useState} from 'react';
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
  ActivityIndicator,
} from 'react-native';
import {CustomHeader} from '../components/CustomHeader';
import CustomSearchBar from '../components/CustomSearchBar';
import R from '../res/R';
import {useNavigation} from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import classSubject from '../redux/actions/ClassAction';
const {width, height} = Dimensions.get('window');
const Learn = ({props}) => {
  const dispatch = useDispatch
  const navigation = useNavigation();
  
  const [selectedItems, setSelectedItems] = useState('');
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    console.log("Learn Screen Loading>>>>>>>")
    let paramData = {
      // Token: "eyJhbGciOiJSUzI1NiIsImtpZCI6IkFGNTY5ODlEQjBEQTYxRTJENzY5QkQxREIzOTMyRjZBIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NDgyMDYzNTMsImV4cCI6MTY0ODIwOTk1MywiaXNzIjoiaHR0cHM6Ly9kZXYtYXBpLnRoZXVubGltaXRlZC5jby56YS90b2tlbiIsImF1ZCI6WyJjZWxsdWxhciIsInByb2R1Y3QiXSwiY2xpZW50X2lkIjoiVGhlVW5saW1pdGVkIiwic3ViIjoiYTNmYjNkMzYtODUyOC00MTU0LThkNWMtN2UxOGQyOGNiOTgwIiwiYXV0aF90aW1lIjoxNjQ4MjA2MzUzLCJpZHAiOiJsb2NhbCIsInVzZXJuYW1lIjoiMDg4MDQ1NDkzNyIsInJvbGUiOiJDdXN0b21lciIsImp0aSI6IjM0NzFGQzRFOTg0QUFDNkM3NDE5MDA1MjQxNUQzQTBGIiwiaWF0IjoxNjQ4MjA2MzUzLCJzY29wZSI6WyJjZWxsdWxhci5hcGlzIiwicHJvZHVjdC5hcGlzIl0sImFtciI6WyJwd2QiXX0.MTp-PpjPQc7h8m37-a8o5lEU5k3e0tbq119F-r4A2-uSXFRqai1isdDvSjasZ4Y7kC7K6DMBRoZPsMt5MaLQ1Xv3VqBNzYUl2OWh4tm_ak5POchmC8lzMEI9g7HApxNUWdNC_K47JTvBeYg3ftd2IYpD_uVHwmc6am3Dp6iyKsfr-deI-WJ1adO2eYFjqwIPg_Z88Zacpn7Oo_h2vqWbr_eCsMhvDikmDRqdCD4RUsxGV8nhXZK0N-3KYiyLQFT2UJK3aYFVkN7k4dyxoyACuXi7Di1l7UkforMyZAOEl0MsTEtmNSrSjlOPVtMiSi6C_eFjTZxAJ9euDQxcBViK4Q",
      // ReferenceId:"e9b53199-5d99-ec11-b400-000d3a24d450",
    }
    // setLoading(true)
    // const timer = setTimeout(() =>  setLoading(true), 100);
    // return () => clearTimeout(timer);
    // dispatch(classSubject(_classData,paramData))
  },[])

  const _classData = {
		success: (result) => {
			setLoading(false)
			// dispatch(saveUserData(result));
		},
		error: (err) => {
			setLoading(false)
			setErrorMessage("Something went wrong")
		},
	};

  const Data = [
    {
      id: 1,
      title: 'Science',
      titlesImage: require('../assets/images/bookmark.png'),
    },
    // {
    //   id: 2,
    //   title: 'Physiology',
    //   titlesImage: require('../assets/images/bookmark.png'),
    // },
    // {
    //   id: 3,
    //   title: 'Biochemistry',
    //   titlesImage: require('../assets/images/bookmark.png'),
    // },
    // {
    //   id: 4,
    //   title: 'Practicals(1st year)',
    //   titlesImage: require('../assets/images/bookmark.png'),
    // },
  ];
  const _renderTopics = ({item}) => {
    return (
      <View style={{paddingTop:R.unit.scale(10)}}>
        <View style={styles.cardContainer}>
          <TouchableOpacity
            style={styles.cardStyle}
            onPress={() => navigation.navigate('LearnCategory',{categoryTitle:item.title})}>
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
        <ScrollView 
        showsVerticalScrollIndicator={false} 
        overScrollMode
        styles={{flex: 1}}>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <CustomSearchBar
              placeholderTxt={'Search any Keywords'}
              onSearchText={false}
            />
          </TouchableOpacity>
            <FlatList
              data={Data}
              scrollsToTop={true}
              numColumns={3}
              renderItem={_renderTopics}
              keyExtractor={item => item.id}
            />
        </ScrollView>
      </View>
      {
										loading ?
									 <ActivityIndicator style={{}} color={R.color.goldenDeep} size="large"></ActivityIndicator> 
											:
											null
									}
      
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
