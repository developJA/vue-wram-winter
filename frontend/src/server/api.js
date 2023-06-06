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
      console.log('err   >>> ', err);
    });
}

function getDonateHistApi(sendData, _callback) {
  let result = {};

  api.getDonatinonHistory()
    .then((res) => {
      const { data } = res;
      const myList = data.filter((x) => x.user_id === sendData.user_id);
      result = {
        status: 'SUCCESS',
        data: {
          histories: myList || [],
        },
      };

      _callback(result);
    })
    .catch((err) => {
      console.log('err   >>> ', err);
    });
}

function donateApi(sendData, _callback) {
  let result = {};

  // 로그인 여부 체크
  if (sendData.user_id === undefined) {
    EventBus.$popAlert('다시 로그인 해주세요.');
    return false;
  }
  // 중복체크...
  api.getDonatinonHistory()
    .then((res) => {
      const { data } = res;
      const oldItem = data.find((x) => x.user_id === sendData.user_id && x.item_id === sendData.item_id);

      if (oldItem !== undefined) { // 이미 기부이력이 있는 활동일 경우
        sendData.amount += Number(oldItem.amount);
        sendData.id = oldItem.id;

        api.putDonationHistory(sendData)
          .then((resPost) => {
            result = {
              status: 'SUCCESS',
              data: {
                histories: resPost.data,
              },
            };
            _callback(result);
          })
          .catch((err) => {
            console.log('errr   >>> ', err);
          });
      } else { // 기부이력이 없는 활동일 경우
        api.postDonationHistory(sendData)
          .then((resPost) => {
            result = {
              status: 'SUCCESS',
              data: {
                histories: resPost.data,
              },
            };
            _callback(result);
          })
          .catch((err) => {
            console.log('errr   >>> ', err);
          });
      }
    })
    .catch((err) => {
      console.log('err   >>> ', err);
    });
}

function getNoticeListApi(sendData, _callback) {
  let result = {};

  api.getNotices()
    .then((res) => {
      result = {
        status: 'SUCCESS',
        data: {
          noticeList: res.data,
        },
      };

      _callback(result);
    })
    .catch((err) => {
      console.log('err   >>> ', err);
    });
}

function regNoticeListApi(sendData, _callback) {
  let result = {};

  // 로그인 여부 체크
  if (sendData.writer_id === undefined) {
    EventBus.$popAlert('다시 로그인 해주세요.');
    return false;
  }

  api.postNotices(sendData)
    .then((res) => {
      console.log('postNotices res >>>>> ', res);
      result = {
        status: 'SUCCESS',
        data: {
          noticeList: res.data,
        },
      };

      _callback(result);
    })
    .catch((err) => {
      console.log('errr   >>> ', err);
    });
}

function getMainApi(sendData, _callback) {
  let result = {};
  let noticeList = [];

  // 공지사항 조회
  api.getNotices()
    .then((res) => {
      if (res.data.length > 0) {
        noticeList = res.data.slice(0, 2);
      }

      // 따뜻한 소식 조회
      result = {
        status: 'SUCCESS',
        data: {
          noticeList,
        },
      };

      _callback(result);
    })
    .catch((err) => {
      console.log('getNotices    err   >>> ', err);
    });
}

export {
  loginApi,
  signUpApi,
  regBookmarksApi,
  getBookmarkListApi,
  delBookmarksApi,
  checkMyBookmarkApi,
  getDonateHistApi,
  donateApi,
  getNoticeListApi,
  regNoticeListApi,
  getMainApi,
};
