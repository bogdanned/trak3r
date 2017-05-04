import axios from 'axios';

export function signupActions(userData){
  return dispatch => {
    return axios.post('api/users', userData);
  }
}
