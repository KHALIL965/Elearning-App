import ApiCaller from '../ServiceWorker/ApiConstants';
import {
 CLASS_SUCCESS,
 CLASS_FAILURE,
 CLASS_LOADING
} from '../constants/index';
import ApiConstants from '../ServiceWorker/ApiConstants';

export default function classSubject(onResponse, classData) {
  let method = 'GET';
//   let registerDataState = {};
  return (dispatch) => {
    dispatch(classLoading());
    return ApiCaller(ApiConstants.Subject, method, classData ).then((res) => {
      if (res && res.StatusCode === 200) {
          console.log("Response in Action>>>>",res && res.StatusCode === 200)
        dispatch(classSuccess(res));
        console.log("Response in Action>>>>",res)
        onResponse.success(res);
        console.log('Response...',res)
      } else {
        dispatch(classFailure(res));
        onResponse.error(res);
        console.log('Response...',res)
      }
    });
  };
}

function classLoading() {
  return {
    type: CLASS_LOADING,
  };
}

function classSuccess(data) {
  return {
    type: CLASS_SUCCESS,
    data,
  };
}

function classFailure(data) {
  return {
    type: CLASS_FAILURE,
    data,
  };
}
