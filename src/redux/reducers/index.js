import {combineReducers} from 'redux';
import classReducer from './ClassReducer';


const rootReducer = combineReducers({
    classReducer:classReducer
});
export default rootReducer;
