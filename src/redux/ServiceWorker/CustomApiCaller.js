import ApiConstants from "./ApiConstants";


export default function ApiCaller(path, method, bodyPayload, token) {
  console.log('path in custom caller', path, bodyPayload, method);
  let options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(token && {Authorization: 'Token ' + token}),
    },
   
    method: method,
    ...(bodyPayload && {body: JSON.stringify(bodyPayload)}),
  };
  console.log('optionscustom caller', options);

  return fetch(ApiConstants.BASE_URL + path, options)
    .then((response) => {
      console.log('response of custom new call', response);
      return response.json();
    })
    .then((data) => {
      console.log('in custom call', data);
      return data;
    })
    .catch((error) => {
      console.log('error', error);
      return {errors: {base: 'Something went wrong'}};
    });
}