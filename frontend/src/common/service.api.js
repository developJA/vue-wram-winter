/**
 * 공통 API SERVER axios 서비스
 */

import axios from "axios";
import store from "@/store";
import Define from "@/common/define";
import { $popAlert } from "@/common/EventBus";

let configSet = {};
let fetchDataErrorCodes = []


const service = axios.create({
    //baseURL: process.env.VUE_APP_URL,
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 20000, // request timeout time ms
});

/* axios 인터셉터 처리 [요청] */
service.interceptors.request.use(
  (config) => {
    configSet = config;

    return config;
  },
  (error) => {
    console.error('service.interceptors.request.use', error); // for debug
    return Promise.reject(error);
  }
);

/* axios 인터셉터 처리 [응답] */
service.interceptors.response.use(

  async function (response) {
    const res = response.data;

    try {
        return response;
    }
    catch (e) {
      return Promise.reject(new Error(res.message || 'Error'))
    }
  },
  async function (error) {

    let message = '오류가 발생했습니다. 관리자에게 문의하여 주시기 바랍니다.'
    const response = error.response || {};
    const { status, config } = response;
    let data;
    try{
      if(response.data) {
        if(response.data.data) {
          data = response.data.data;
        } else {
          data = response.data;
        }
      }
    } catch (e) {
      data = response.data;
    }
    try {
      /* 세션연장처리 */

    }
    catch (e) {
      message = e
      console.log(e)
      // loadingClose();
    }

    await $popAlert(message);

    return Promise.reject(data);
  }
);

export default service;


/**
 * 모피어스 GW 서버 네이티브 HTTP 통신
 * @param options
 * @returns {Promise<unknown>}
 */
export const MNetSend = (options) => {
  const _options = {
      url: options.url || "",
      method: options.method || "POST",
      param: options.param || {},
      headers: options.headers|| {},
  };

  console.log(_options);

  if (!isMorpheus()) {
    return new Promise((resolve, reject) => {
      _options.data = {};
      _options.data.head = {};
      _options.data.body = _options.param;

      axios.get(_options.url)
        .then((result) => {
          if (result.status == 200) {
            resolve(result.data);  
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  } else {
    return new Promise((resolve, reject) => {
        M.net.http.send({
            server: Define.SERVER_NAME,
            path: _options.url,
            method: _options.method,
            timeout: 30000,
            //userData: {
            //    Authorization: _options.headers,
            //},
            indicator: {
                show: false,
                message: "Loading..",
                cancelable: true,
            },
            data: _options.param,
            success: function (recevedData, setting) {
                resolve(recevedData); // data 바로 출력됨
            },
            error: function (errorCode, errorMessage, setting) {
                reject(errorCode, errorMessage);
            },
        });
    });
  }
  
};

/**
 * 로그인화면으로 이동전에 기존에 로딩을 강제숨김 처리
 */
const loadingClose = () => {
  try {
    router.app.$loading().close();
  } catch (e) {
    console.error('router.app.$loading()', e);
  }  
}