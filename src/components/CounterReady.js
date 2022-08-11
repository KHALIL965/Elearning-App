import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
// import Constants from 'expo-constants';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import R from '../res/R';

const CounterReady = () => {
  const [isPlaying, setIsPlaying] = React.useState(true)

  return (
    <View style={styles.container}>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={3}
        colors={R.color.goldenDeep}
        colorsTime={[10, 6, 3, 0]}
        onComplete={() => ({ shouldRepeat: false, delay: 2 })}
    >
      {({ remainingTime, color }) => (
          <Text style={{color:R.color.black}}>{'Ready'}</Text>,
        <Text style={{ color, fontSize: 40 }}>
          {remainingTime}
        </Text>
      )}
    </CountdownCircleTimer>
    {/* <Button title="Toggle Playing" onPress={() => setIsPlaying(prev => !prev)} /> */}
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    paddingVertical:R.unit.scale(50),
    marginTop:R.unit.scale(20)
  }
});
export default CounterReady