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
      result = {
        status: 'SUCCESS',
        data: {
          bookmarks: res.data,
        },
      };

      _callback(result);
    })
    .catch((err) => {
      console.log('errr   >>> ', err);
    });
}

function getBookmarkListApi(sendData, _callback) {
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

function checkMyBookmarkApi(sendData, _callback) {
  let result = {};

  // 파라미터 체크
  if (sendData.user_id === undefined) {
    EventBus.$popAlert('다시 로그인 해주세요.');
    return false;
  } if (sendData.item_id === undefined || sendData.type === undefined) {
    EventBus.$popAlert('필수파라미터 누락');
    return false;
  }

  api.getBookmarks()
    .then((res) => {
      console.log('getBookmarks res >>>>> ', res);
      const { data } = res;
      const obj = data.find((x) => x.user_id === sendData.user_id && x.type === sendData.type && x.item_id === sendData.item_id);
      result = {
        status: 'SUCCESS',
        data: {
          bookmarks: obj,
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
  getBookmarkListApi,
  delBookmarksApi,
  checkMyBookmarkApi,
};
