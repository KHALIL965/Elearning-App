/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import Learn from './src/screens/Learn';
import Popup from './src/screens/Popup';


AppRegistry.registerComponent(appName, () =>Popup);
