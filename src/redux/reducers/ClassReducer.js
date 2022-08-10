import {
    CLASS_SUCCESS,
    CLASS_FAILURE,
    CLASS_LOADING,
  } from '../constants/index';
  
  const initialState = {
    classData: null,
    classLoading: false,
    classError: null,
  };
  
  export default function classReducer(state = initialState, action) {
    console.log('action in class', action.type, action.data);
    switch (action.type) {
      case CLASS_LOADING:
        return {
          ...state,
          classLoading: true,
          classData: null,
          classError: null,
        };
      case CLASS_SUCCESS:
        return {
          ...state,
          classLoading: false,
          classData: action.data,
          classError: null,
        };
      case CLASS_FAILURE:
        return {
          ...state,
          classLoading: false,
          classError: action.data,
          classData: null,
        };
      default:
        return state;
    }
  }
  