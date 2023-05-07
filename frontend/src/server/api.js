import * as api from '../api/index.js';
import EventBus from '../common/EventBus.js';

function loginApi(sendData, _callback) {
  let result = {};

  api.getUser()
    .then((res) => {
      console.log('login res:', res.data);
      let account = null; // 일치하는 계정

      account = res.data.find((x) => x.id === sendData.id);

      if (account !== undefined && account.pw === sendData.pw) {
        result = {
          status: 'SUCCESS',
          data: account,
        };
      } else {
        result = { status: 'FAIL' };
      }

      _callback(result);
    })
    .catch((err) => {
      console.log('error >>>> ', err);
    });
}

function signUpApi(sendData, _callback) {
  const result = {};

  api.getUser()
    .then((res) => {
      console.log('register res:', res.data);

      _callback(result);
    });
}

function regBookmarksApi(sendData, _callback) {
  let result = {};

  // 로그인 여부 체크
  if (sendData.user_id === undefined) {
    EventBus.$popAlert('다시 로그인 해주세요.');
    return false;
  }
  // 중복체크.....

  api.postBookmarks(sendData)
    .then((res) => {
      console.log('postBookmarks res >>>>> ', res);
      result = { status: 'SUCCESS' };

      _callback(result);
    })
    .catch((err) => {
      console.log('errr   >>> ', err);
    });
}

function myBookmarksApi(sendData, _callback) {
  let result = {};

  api.getBookmarks()
    .then((res) => {
      console.log('getBookmarks res >>>>> ', res);
      const { data } = res;
      const myList = data.filter((x) => x.user_id == sendData.user_id);
      result = {
        status: 'SUCCESS',
        data: {
          bookmarks: myList || [],
        },
      };

      _callback(result);
    })
    .catch((err) => {
      console.log('err   >>> ', err);
    });
}

function delBookmarksApi(sendData, _callback) {
  let result = {};

  // 로그인 여부 체크
  if (sendData.user_id === undefined) {
    EventBus.$popAlert('다시 로그인 해주세요.');
    return false;
  }

  // 중복체크.....

  delete sendData.user_id;
  delete sendData.type;

  api.deleteBookmarks(sendData)
    .then((res) => {
      result = { status: 'SUCCESS' };

      _callback(result);
    })
    .catch((err) => {
      console.log('errr   >>> ', err);
    });
}

export {
  loginApi,
  signUpApi,
  regBookmarksApi,
  myBookmarksApi,
  delBookmarksApi,
};
