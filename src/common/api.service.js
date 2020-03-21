import Vue from 'vue';
import axios from 'axios';
import JwtService from './jwt.service';
import {API_URL} from './config';


const ApiService = {
  init() {
    console.log("init")
    Vue.use(axios);
  },
  setHeader() {
    axios.interceptors.request.use((config) => {
      config.headers['Authorization'] = 'Bearer ' + JwtService.getToken();
      return config;
    }, (error) => {
      console.log(error);
    });

  },
  get(resource, params=""){
    return axios.get(`${API_URL}${resource}/${params}`)
  },
  post(resource, params) {
    return axios.post(`${API_URL}${resource}`, params);
  },
}
export default ApiService;

export const GuestService ={
  get(){
    return ApiService.get("guest/get");
  }
}
