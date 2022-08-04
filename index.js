/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import Learn from './src/screens/Learn';
import ScoreCard from './src/screens/Scorecard';
import CustomScoreCard from './src/components/CustomScoreCard';


AppRegistry.registerComponent(appName, () => ScoreCard);
