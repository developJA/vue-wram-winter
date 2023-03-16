import axios from "axios";
import { MNetSend } from '@/common/service.api';

export default {
  install(Vue) {

    // axios 생성
    const axiosInstance = axios.create({
      baseURL: "/",
      withCredentials: false, // send cookies when cross-domain requests
      timeout: 10000 // request timeout
    });

    // vue 공통 method 주입
    Vue.prototype.$axios = axiosInstance;
    Vue.prototype.$MNetSend = MNetSend;

  }
};
