/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import CustomPagination from './src/components/CustomPagination';

AppRegistry.registerComponent(appName, () => CustomPagination);
