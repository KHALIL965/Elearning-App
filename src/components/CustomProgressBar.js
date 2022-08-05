import * as React from 'react';
import { ProgressBar} from 'react-native-paper';
import R from '../res/R';
const CustomProgressBar = () => (
   <ProgressBar style={{ marginTop:2}} progress={0.01} color={R.color.goldenDeep} />
);
export default CustomProgressBar;