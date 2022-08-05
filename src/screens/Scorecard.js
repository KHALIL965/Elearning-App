import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import R from '../res/R';
import Color from '../res/Color';
import CustomScoreCard from '../components/CustomScoreCard';
import { useNavigation } from '@react-navigation/native';
 
const ScoreCard = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView>
        <ScrollView  showsVerticalScrollIndicator={false}>
            <View style={styles.scoreContainer}>
                <Text style={styles.scoreText} >You Scored</Text>
                <View style={styles.card}>
                    <View>
                        <Text style={styles.attemptText}> Attempted on</Text>
                        <Text style={styles.date}>01/Aug/2022</Text>
                    </View>
                    <View>
                        <Text style={styles.score}>16</Text>
                        <Text style={styles.scoreUnder}>You scored Out of 40</Text>
                    </View>

                    <View>
                        <Text style={styles.timeText}>Time Taken</Text>
                        <Text style={styles.secsTaken}>10 secs</Text>
                    </View>
                    <View style={styles.verticleLine}></View>

                    <View style={{ marginTop: 5 }}>
                        <Text style={styles.boxGreen}>4{'\n'}Correct</Text>
                        <Text style={styles.boxRed}>5{'\n'}Wrong</Text>
                        <Text style={styles.boxGray}>1{'\n'}skipped</Text>
                    </View>
                </View>

            </View>

                <View>
                    <Text style={styles.betterText}> Can do better!</Text>
                    <Text style={styles.betterUnder}> You are at 0 percentile</Text>
                    <Image style={styles.scoreImage} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1s96xBGN-1EI9YQhbPMi4UnuCMU4WXU42kQ&usqp=CAU' }} />
                    <Text></Text>
                    <Text style={styles.suggestText}>Suggested Modules</Text>
                    <Text style={styles.divider}></Text>
                    <CustomScoreCard />
                    <Text style={styles.reattempt}>Do you wish to Re-attempt?</Text>
                    <TouchableOpacity style={{ height: R.unit.scale(35), marginTop: R.unit.scale(8) }}>
                        <Text style={styles.button}>RE-ATTEMPT</Text>
                    </TouchableOpacity>                                  
                </View>
                
               <View style = {styles.container}>
                       <TouchableOpacity 
                      
                       onPress={()=>navigation.goBack()}
                       >
                          <Text style={styles.exitButton}>EXIT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                         onPress={()=>navigation.navigate('Learn')}
                         >
                            <Text style={styles.reviewButton}>REVIEW</Text>
                        </TouchableOpacity>
                </View>
        </ScrollView>
       
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection : 'row', 
        justifyContent : 'space-around', 
        backgroundColor : R.color.offWhite, 
        padding : 10,
        overflow : 'hidden',
    },
    scoreContainer: {
        backgroundColor: R.color.goldenDeep,
        flexDirection: 'column',
        height: R.unit.scale(120)
    },
    verticleLine: {
        margin: R.unit.scale(4),
        marginTop : R.unit.scale(17),
        height: R.unit.scale(50),
        width: R.unit.scale(0.4),
        backgroundColor: R.color.SpanishGray,
    },
    scoreText: {
        color: R.color.offWhite,
        fontSize: R.unit.fontSize(1.25),
        fontWeight: '500',
        padding: R.unit.scale(6.5)
    },
    card: {
        height: R.unit.scale(85),
        width: R.unit.scale(176),
        backgroundColor: R.color.offWhite,
        flexDirection: 'row',
        marginLeft: R.unit.scale(6),
        borderRadius: R.unit.scale(4),
    },
    attemptText: {
        fontSize: R.unit.scale(5.5),
        padding: R.unit.scale(3)
    },
    date: {
        fontSize: R.unit.scale(6),
        fontWeight: '800',
        textAlign :'center'
    },
    score: {
        fontWeight: '800',
        fontSize: R.unit.scale(41),
        marginLeft: R.unit.scale(5),
        marginTop: R.unit.scale(21)
    },
    scoreUnder: {
        marginTop : R.unit.scale(-5),
        fontSize: R.unit.scale(5.6),
        fontWeight: '800'
    },
    timeText: {
        fontSize: R.unit.scale(5.5),
        padding: R.unit.scale(2),
    },
    secsTaken: {
        fontSize: R.unit.scale(6),
        fontWeight: '800',
        textAlign : 'center'
    },

    boxGreen: {
        color: R.color.offWhite,
        height: R.unit.scale(25),
        width: R.unit.scale(29),
        textAlign : 'center',
        backgroundColor: R.color.LightGreen,
        borderRadius: R.unit.scale(3),
        alignItems: 'center',
        fontSize: R.unit.scale(7),
        fontWeight: '900',
        padding: R.unit.scale(3),
        marginBottom: R.unit.scale(2.5)
    },
    boxRed: {
        color: R.color.offWhite,
        height: R.unit.scale(25),
        width: R.unit.scale(29),
        textAlign : 'center',
        backgroundColor: R.color.LightPink,
        borderRadius: R.unit.scale(3),
        alignItems: 'center',
        fontSize: R.unit.scale(7),
        fontWeight: '900',
        padding: R.unit.scale(3),
        marginBottom: R.unit.scale(2.5)
    },
    boxGray: {
        color: R.color.offWhite,
        height: R.unit.scale(25),
        width: R.unit.scale(29),
        textAlign : 'center',
        backgroundColor: R.color.SpanishGray,
        borderRadius: R.unit.scale(3),
        alignItems: 'center',
        fontSize: R.unit.scale(7),
        fontWeight: '900',
        padding: R.unit.scale(2),
        marginBottom: R.unit.scale(2.5)
    },
    betterText : {
        fontWeight: '800',
        marginLeft: R.unit.scale(6), 
        marginTop: R.unit.scale(4),  
        fontSize: R.unit.scale(11.5), 
        color: '#795C34'
    },
    betterUnder : {
        fontWeight: '700', 
        fontSize: R.unit.scale(9), 
        marginLeft: R.unit.scale(7),  
        color: '#795C34'
    },
    scoreImage : {
        height: R.unit.scale(119),
        width: R.unit.scale(130), 
        opacity: 0.5, 
        marginTop: R.unit.scale(12),
        marginLeft: R.unit.scale(23), 
    },
    suggestText : {
        marginLeft: R.unit.scale(5), 
        fontSize: R.unit.scale(8), 
        fontWeight: '700', 
        color: '#383634' 
    },  
    divider: {
        marginTop: R.unit.scale(-5),
        margin: R.unit.scale(5),
        borderBottomColor: '#6fb3de',
        borderBottomWidth: R.unit.scale(0.6),
        width: '90%'
    },
    reattempt: {
        fontWeight: '700',
        textAlign: 'center',
        color: '#795C34',
        fontSize: R.unit.scale(9)
    },
    button: {
        height: R.unit.scale(24),
        width: R.unit.scale(63),
        backgroundColor: 'transparent',
        borderWidth: R.unit.scale(0.7),
        borderColor: R.color.goldenDeep,
        borderRadius: R.unit.scale(3),
        textAlign: 'center',
        fontSize: R.unit.scale(7.2),
        fontWeight: '700',
        padding: R.unit.scale(6),
        alignSelf: 'center',
        color: '#795C34'
    },
    exitButton : {
        height: R.unit.scale(24),
        width: R.unit.scale(35),
        backgroundColor: 'transparent',
        borderWidth: R.unit.scale(0.6),
        borderColor: R.color.goldenDeep,
        borderRadius: R.unit.scale(3),
        textAlign: 'center',
        fontSize: R.unit.scale(7.5),
        fontWeight: '700',
        padding: R.unit.scale(6),
        color: '#795C34',
        marginBottom : R.unit.scale(4)
    },
    reviewButton : {
        justifyContent : 'flex-end',
        height: R.unit.scale(24),
        width: R.unit.scale(105),
        color : R.color.offWhite,
        backgroundColor: R.color.goldenDeep,
        borderColor: R.color.goldenDeep,
        borderWidth: R.unit.scale(1),
        borderRadius: R.unit.scale(3),
        textAlign: 'center',
        fontSize: R.unit.scale(8),
        fontWeight: '700',
        padding: R.unit.scale(6),
        marginBottom : R.unit.scale(4)
    }
})


export default ScoreCard;


   