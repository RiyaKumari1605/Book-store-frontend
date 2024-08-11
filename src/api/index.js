import axios from 'axios';

import BASE_URL from './url';

const api = {
  get: url => axios.get(BASE_URL + url),
  getAuth: request =>
    axios.get(BASE_URL+ request.url, {
      headers: {
        Authorization: request.token,
        'Content-Type': 'application/json',
        Source: 'WEB',
      },
    }),

  post: request =>
    axios.post(BASE_URL + request.url, request.data),
  postAuth: request =>
    axios.post(BASE_URL + request.url, request.data, {
      headers: {Authorization: request.token, Source: 'WEB'},
    }),

  put: request =>
    axios.put(BASE_URL + request.url, request.data),
  putAuth: request =>
    axios.put(BASE_URL + request.url, request.data, {
      headers: {Authorization: request.token, Source: 'WEB'},
    }),
};
 
export default api;
 