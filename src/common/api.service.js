import Vue from 'vue';
import axios from 'axios';
import JwtService from './jwt.service';
import {API_URL} from './config';

const ApiService = {
  init() {
    Vue.use(axios);
  },
  setHeader() {
    Vue.axios.defaults.headers.common[
      "Authorization"
    ] = `Token ${JwtService.getToken()}`;
  },
  query(resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },
  post(code) {
    console.log(`${API_URL}account/login`);
    return axios.post(`${API_URL}account/login`, code);
  },
}
export default ApiService;
