import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import CustomPagination from '../components/CustomPagination';
import R from '../res/R';
import {useNavigation} from '@react-navigation/native';
import Dots from 'react-native-dots-pagination';
const cancelImg = {
  uri: 'https://png.pngtree.com/png-vector/20190412/ourmid/pngtree-vector-cancel-icon-png-image_931207.jpg',
};
const QuestionsGame = () => {
  const navigation = useNavigation();
  const [active, setActive] = useState(0);
  const [pageNum, setPageNum] = useState(1);
  const [bookmarkState, setBookmarkState] = useState(false);
  const [tickState, setTickState] = useState(false);
  const [savedbookmark, setSavedbookmark] = useState([]);

  const questionsData = [
    {
      questionsid: 0,
      question: 'What is the type of Joint seen at growth plate?',
      options:[ {
          optionid:0,
        option: 'Primary Cartilaginous',
        // options2: 'Secondary Cartilaginous',
        // options3: 'Cartilaginous',
        // options4: 'Gomphoses',
      },
      {
        // options1: 'Primary Cartilaginous',
        optionid:1,
        option: 'Secondary Cartilaginous',
        // options3: 'Cartilaginous',
        // options4: 'Gomphoses',
      },
      {
        // options1: 'Primary Cartilaginous',
        // options2: 'Secondary Cartilaginous',
        optionid:2,
        option: 'Cartilaginous',
        // options4: 'Gomphoses',
      },
      {
        // options1: 'Primary Cartilaginous',
        // options2: 'Secondary Cartilaginous',
        // options3: 'Cartilaginous',
        optionid:3,
        option: 'Gomphoses',
      }
    ],
      correctAnswer: 'Primary Cartilaginous',
    },
    {
        questionsid: 1,
        question: 'What is the type of Joint seen at growth plate?',
        options:[ {
            optionid:0,
          option: 'Primary Cartilaginous',
          // options2: 'Secondary Cartilaginous',
          // options3: 'Cartilaginous',
          // options4: 'Gomphoses',
        },
        {
          // options1: 'Primary Cartilaginous',
          optionid:1,
          option: 'Secondary Cartilaginous',
          // options3: 'Cartilaginous',
          // options4: 'Gomphoses',
        },
        {
          // options1: 'Primary Cartilaginous',
          // options2: 'Secondary Cartilaginous',
          optionid:2,
          option: 'Cartilaginous',
          // options4: 'Gomphoses',
        },
        {
          // options1: 'Primary Cartilaginous',
          // options2: 'Secondary Cartilaginous',
          // options3: 'Cartilaginous',
          optionid:3,
          option: 'Gomphoses',
        }
      ],
        correctAnswer: 'Primary Cartilaginous',
      },
      {
        questionsid: 2,
        question: 'What is the type of Joint seen at growth plate?',
        options:[ {
            optionid:0,
          option: 'Primary Cartilaginous',
          // options2: 'Secondary Cartilaginous',
          // options3: 'Cartilaginous',
          // options4: 'Gomphoses',
        },
        {
          // options1: 'Primary Cartilaginous',
          optionid:1,
          option: 'Secondary Cartilaginous',
          // options3: 'Cartilaginous',
          // options4: 'Gomphoses',
        },
        {
          // options1: 'Primary Cartilaginous',
          // options2: 'Secondary Cartilaginous',
          optionid:2,
          option: 'Cartilaginous',
          // options4: 'Gomphoses',
        },
        {
          // options1: 'Primary Cartilaginous',
          // options2: 'Secondary Cartilaginous',
          // options3: 'Cartilaginous',
          optionid:3,
          option: 'Gomphoses',
        }
      ],
        correctAnswer: 'Primary Cartilaginous',
      },
      {
        questionsid:3,
        question: 'What is the type of Joint seen at growth plate?',
        options:[ {
            optionid:0,
          option: 'Primary Cartilaginous',
          // options2: 'Secondary Cartilaginous',
          // options3: 'Cartilaginous',
          // options4: 'Gomphoses',
        },
        {
          // options1: 'Primary Cartilaginous',
          optionid:1,
          option: 'Secondary Cartilaginous',
          // options3: 'Cartilaginous',
          // options4: 'Gomphoses',
        },
        {
          // options1: 'Primary Cartilaginous',
          // options2: 'Secondary Cartilaginous',
          optionid:2,
          option: 'Cartilaginous',
          // options4: 'Gomphoses',
        },
        {
          // options1: 'Primary Cartilaginous',
          // options2: 'Secondary Cartilaginous',
          // options3: 'Cartilaginous',
          optionid:3,
          option: 'Gomphoses',
        }
      ],
        correctAnswer: 'Primary Cartilaginous',
      },
      {
        questionsid: 4,
        question: 'What is the type of Joint seen at growth plate?',
        options:[ {
            optionid:0,
          option: 'Primary Cartilaginous',
          // options2: 'Secondary Cartilaginous',
          // options3: 'Cartilaginous',
          // options4: 'Gomphoses',
        },
        {
          // options1: 'Primary Cartilaginous',
          optionid:1,
          option: 'Secondary Cartilaginous',
          // options3: 'Cartilaginous',
          // options4: 'Gomphoses',
        },
        {
          // options1: 'Primary Cartilaginous',
          // options2: 'Secondary Cartilaginous',
          optionid:2,
          option: 'Cartilaginous',
          // options4: 'Gomphoses',
        },
        {
          // options1: 'Primary Cartilaginous',
          // options2: 'Secondary Cartilaginous',
          // options3: 'Cartilaginous',
          optionid:3,
          option: 'Gomphoses',
        }
      ],
        correctAnswer: 'Primary Cartilaginous',
      },
      {
        questionsid: 5,
        question: 'What is the type of Joint seen at growth plate?',
        options:[ {
            optionid:0,
          option: 'Primary Cartilaginous',
          // options2: 'Secondary Cartilaginous',
          // options3: 'Cartilaginous',
          // options4: 'Gomphoses',
        },
        {
          // options1: 'Primary Cartilaginous',
          optionid:1,
          option: 'Secondary Cartilaginous',
          // options3: 'Cartilaginous',
          // options4: 'Gomphoses',
        },
        {
          // options1: 'Primary Cartilaginous',
          // options2: 'Secondary Cartilaginous',
          optionid:2,
          option: 'Cartilaginous',
          // options4: 'Gomphoses',
        },
        {
          // options1: 'Primary Cartilaginous',
          // options2: 'Secondary Cartilaginous',
          // options3: 'Cartilaginous',
          optionid:3,
          option: 'Gomphoses',
        }
      ],
        correctAnswer: 'Primary Cartilaginous',
      },
      {
        questionsid: 6,
        question: 'What is the type of Joint seen at growth plate?',
        options:[ {
            optionid:0,
          option: 'Primary Cartilaginous',
          // options2: 'Secondary Cartilaginous',
          // options3: 'Cartilaginous',
          // options4: 'Gomphoses',
        },
        {
          // options1: 'Primary Cartilaginous',
          optionid:1,
          option: 'Secondary Cartilaginous',
          // options3: 'Cartilaginous',
          // options4: 'Gomphoses',
        },
        {
          // options1: 'Primary Cartilaginous',
          // options2: 'Secondary Cartilaginous',
          optionid:2,
          option: 'Cartilaginous',
          // options4: 'Gomphoses',
        },
        {
          // options1: 'Primary Cartilaginous',
          // options2: 'Secondary Cartilaginous',
          // options3: 'Cartilaginous',
          optionid:3,
          option: 'Gomphoses',
        }
      ],
        correctAnswer: 'Primary Cartilaginous',
      },
      {
        questionsid: 7,
        question: 'What is the type of Joint seen at growth plate?',
        options:[ {
            optionid:0,
          option: 'Primary Cartilaginous',
          // options2: 'Secondary Cartilaginous',
          // options3: 'Cartilaginous',
          // options4: 'Gomphoses',
        },
        {
          // options1: 'Primary Cartilaginous',
          optionid:1,
          option: 'Secondary Cartilaginous',
          // options3: 'Cartilaginous',
          // options4: 'Gomphoses',
        },
        {
          // options1: 'Primary Cartilaginous',
          // options2: 'Secondary Cartilaginous',
          optionid:2,
          option: 'Cartilaginous',
          // options4: 'Gomphoses',
        },
        {
          // options1: 'Primary Cartilaginous',
          // options2: 'Secondary Cartilaginous',
          // options3: 'Cartilaginous',
          optionid:3,
          option: 'Gomphoses',
        }
      ],
        correctAnswer: 'Primary Cartilaginous',
      },
      {
        questionsid: 8,
        question: 'What is the type of Joint seen at growth plate?',
        options:[ {
            optionid:0,
          option: 'Primary Cartilaginous',
          // options2: 'Secondary Cartilaginous',
          // options3: 'Cartilaginous',
          // options4: 'Gomphoses',
        },
        {
          // options1: 'Primary Cartilaginous',
          optionid:1,
          option: 'Secondary Cartilaginous',
          // options3: 'Cartilaginous',
          // options4: 'Gomphoses',
        },
        {
          // options1: 'Primary Cartilaginous',
          // options2: 'Secondary Cartilaginous',
          optionid:2,
          option: 'Cartilaginous',
          // options4: 'Gomphoses',
        },
        {
          // options1: 'Primary Cartilaginous',
          // options2: 'Secondary Cartilaginous',
          // options3: 'Cartilaginous',
          optionid:3,
          option: 'Gomphoses',
        }
      ],
        correctAnswer: 'Primary Cartilaginous',
      },
      {
        questionsid: 9,
        question: 'What is the type of Joint seen at growth plate?',
        options:[ {
            optionid:0,
          option: 'Primary Cartilaginous',
          // options2: 'Secondary Cartilaginous',
          // options3: 'Cartilaginous',
          // options4: 'Gomphoses',
        },
        {
          // options1: 'Primary Cartilaginous',
          optionid:1,
          option: 'Secondary Cartilaginous',
          // options3: 'Cartilaginous',
          // options4: 'Gomphoses',
        },
        {
          // options1: 'Primary Cartilaginous',
          // options2: 'Secondary Cartilaginous',
          optionid:2,
          option: 'Cartilaginous',
          // options4: 'Gomphoses',
        },
        {
          // options1: 'Primary Cartilaginous',
          // options2: 'Secondary Cartilaginous',
          // options3: 'Cartilaginous',
          optionid:3,
          option: 'Gomphoses',
        },
        {
            // options1: 'Primary Cartilaginous',
            // options2: 'Secondary Cartilaginous',
            // options3: 'Cartilaginous',
            optionid:4,
            option: 'None of these',
          }
      ],
        correctAnswer: 'Primary Cartilaginous',
      },
     
     
     
     
     
     
     
     
     
  ];

  const _renderQuestionsItems = ({item,index}) => {
      console.log("QuestionsDataItems>>>",item,index)
      return(
          <View style={{flex:1,marginTop:R.unit.scale(10)}}>
              <Text>Q{index+1}. {item.question}</Text>
              {item.options.map((optionItem,optionIndex) => {
                  console.log("options>>>>>",optionItem)
                  return(
                      <TouchableOpacity style={{backgroundColor:R.color.offWhite,
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        alignItems:'center',
                        // backgroundColor:R.color.offWhite,
                        paddingLeft:R.unit.scale(5),
                        // marginHorizontal:R.unit.scale(10),
                        borderRadius:R.unit.scale(4),
                        margin:R.unit.scale(5),
                        height:R.unit.scale(30),
                        marginTop:R.unit.scale(5)}}>
                           <Text style={{}}>{optionIndex}. {optionItem.option}</Text>
                      </TouchableOpacity>
                   
                  )
                   
              })}
             
          </View>
      )
  }

  const prev = () => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
      setActive(active - 1);
      setBookmarkState(false);
      setTickState(false);
    } else if (pageNum == 1) {
      setPageNum(1);
      setActive(0);
    } else {
      null;
    }
  };

  const next = () => {
    if (pageNum < 10) {
      setActive(active + 1);
      setPageNum(pageNum + 1);
      setBookmarkState(false);
      setTickState(false);
    } else if (pageNum == 10) {
      setPageNum(10);
      setActive(9);
    } else {
      null;
    }
  };

  const bookmarkFunc = () => {
    if (bookmarkState) {
      setBookmarkState(false);
    } else {
      setBookmarkState(true);
    }
  };

  const tickFunc = () => {
    if (tickState) {
      setTickState(false);
    } else {
      setTickState(true);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, backgroundColor: R.color.goldenDeep}}>
        <View style={styles.topContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.pageNumText}> {pageNum} of 10 </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image style={styles.cancel} source={cancelImg} />
            </TouchableOpacity>
          </View>
          <View style={styles.paginationStyle}>
            <Dots
              length={10}
              active={active}
              paddingHorizontal={0}
              activeDotHeight={10.5}
              activeDotWidth={10.5}
              passiveDotHeight={9}
              passiveDotWidth={9}
              activeColor={R.color.goldenDeep}
            />
          </View>
        </View>
        {/* <Content page = {"Page Number: "+pageNum} /> */}
        <FlatList
         data={questionsData}
         horizontal
         renderItem={_renderQuestionsItems}
         keyExtractor={item=>item.id}
         style={{flex:1,paddingHorizontal:R.unit.scale(10),marginLeft:R.unit.scale(10)}}
         />

        <View style={styles.bottomContainer}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => bookmarkFunc()}>
              <Image
                style={styles.bookmark}
                source={
                  bookmarkState
                    ? R.image.savedBookmarkImg()
                    : R.image.bookmarkImg()
                }
              />
            </TouchableOpacity>
            {/* <TouchableOpacity onPress = {() => tickFunc()}>
               <Image
                 style = {styles.tick}
                 source={tickState ? R.image.savedTickImg() : R.image.tickImg()}
                />
            </TouchableOpacity> */}
          </View>
          <View style={{paddingLeft: R.unit.scale(100)}}>
            <TouchableOpacity>
              {/* <Text style = {styles.prevButton} onPress = {() => prev()}>PREV</Text> */}
            </TouchableOpacity>
            <View style={{borderRadius: R.unit.scale(100)}}>
              <Text style={styles.nextButton} onPress={() => next()}>
                NEXT
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    height: R.unit.scale(25),
    width: R.unit.scale(190),
    backgroundColor: R.color.offWhite,
  },
  pageNumText: {
    fontWeight: '700',
    marginTop: R.unit.scale(1),
    fontSize: R.unit.scale(8),
  },
  cancel: {
    height: R.unit.scale(10),
    width: R.unit.scale(10),
    marginRight: Platform.OS == 'ios' ? R.unit.scale(8) : R.unit.scale(6),
    marginTop: Platform.OS == 'ios' ? R.unit.scale(5) : R.unit.scale(4),
  },
  paginationStyle: {
    bottom: R.unit.scale(3),
  },
  bottomContainer: {
    flexDirection: 'row',
    height: R.unit.scale(23),
    width: R.unit.scale(190),
    position: 'absolute',
    backgroundColor: R.color.offWhite,
    bottom: 0,
  },
  bookmark: {
    margin: R.unit.scale(1),
    height: R.unit.scale(18),
    width: R.unit.scale(19.5),
  },
  savedBookmarkImg: {
    margin: R.unit.scale(1),
    height: R.unit.scale(18),
    width: R.unit.scale(19.5),
  },
  tick: {
    margin: R.unit.scale(1),
    marginLeft: R.unit.scale(8),
    height: R.unit.scale(18),
    width: R.unit.scale(18),
  },
  prevButton: {
    margin: R.unit.scale(1),
    height: R.unit.scale(16),
    width: R.unit.scale(44),
    borderRadius: R.unit.scale(3),
    marginLeft: R.unit.scale(37),
    backgroundColor: R.color.goldenDeep,
    color: R.color.offWhite,
    fontWeight: '500',
    textAlign: 'center',
    fontSize: R.unit.scale(9),
    padding: R.unit.scale(2),
  },
  nextButton: {
    margin: R.unit.scale(1),
    height: R.unit.scale(16),
    width: R.unit.scale(44),
    // borderRadius : R.unit.scale(500),
    marginLeft: R.unit.scale(6),
    backgroundColor: R.color.goldenDeep,
    color: R.color.offWhite,
    fontWeight: '500',
    textAlign: 'center',
    fontSize: R.unit.scale(9),
    padding: R.unit.scale(2),
  },
});
export default QuestionsGame;
