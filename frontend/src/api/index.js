import axios from 'axios';
import EventBus from '@/common/EventBus';
import { MNetSend } from '@/common/service.api';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: '/openapi/service/rest',
  key: 'czDub2E2d3LEXxD6Oc%2FG9Pzpc1IF9B7WiEUeghL9oSO0V7bFP8PRYBODUdoVNG2knFQcdXqJpG8HwPXi%2BuCxSw%3D%3D',
  lang: 'ko-KR',
  fakeServer: process.env.VUE_APP_SERVER,
};

axios.interceptors.request.use(
  (config) => {
    EventBus.$emit('showIndicator', true);
    return config;
  },
);

axios.interceptors.response.use(
  (res) => {
    EventBus.$emit('showIndicator', false);
    return res;
  },
  (error) => {
    EventBus.$emit('showIndicator', false);
    EventBus.$popAlert(error.message);
  },
);

// 2. API 함수들을 정리
// 지역코드조회
async function getAreaCodeInquiryList(sendObj) {
  const queryStr = new URLSearchParams(sendObj).toString();
  return await MNetSend({
    url: `${config.baseUrl}/CodeInquiryService/getAreaCodeInquiryList?serviceKey=${config.key}&${queryStr}&numOfRows=1000`,
    method : 'GET'
  });
  // return axios.get(`${config.baseUrl}/CodeInquiryService/getAreaCodeInquiryList?serviceKey=${config.key}&${queryStr}&numOfRows=1000`);
}
// 기부코드조회
async function getCntrRealmCodeList() {
  // &clsType=A&pageNo=1&numOfRows=11 -- 기타까지의 리스트길이 : 11
  return await MNetSend({
    url: `${config.baseUrl}/CodeInquiryService/getCntrRealmCodeList`,
    method : 'GET'
  });
}
// 기부관련단체분야별목록조회
async function getCntrCategoryGrpList(sendObj) {
  const queryStr = new URLSearchParams(sendObj).toString();
  // url += '&' + encodeURIComponent('schCntrClCode') + '=' + encodeURIComponent('01'); /**/
  return await MNetSend({
    url: `${config.baseUrl}/ContributionGroupService/getCntrCategoryGrpList?serviceKey=${config.key}&${queryStr}`,
    method : 'GET'
  });
  // return axios.get(`${config.baseUrl}/ContributionGroupService/getCntrCategoryGrpList?serviceKey=${config.key}&${queryStr}`);
}
// 기부목록 조회
async function getCntrGrpProgramList(sendObj) {
  const queryStr = new URLSearchParams(sendObj).toString();
  return await MNetSend({
    url: `${config.baseUrl}/ContributionGroupService/getCntrGrpProgramList?serviceKey=${config.key}&${queryStr}`,
    method : 'GET'
  });
  // return axios.get(`${config.baseUrl}/ContributionGroupService/getCntrGrpProgramList?serviceKey=${config.key}&${queryStr}`);
}
// 기부목록 조회 2
// https://www.nanumkorea.go.kr/ctgp/selectCntrGrp.do?cntrRalm=&grpNm=&grpRegistCode=&pageIndex=2

// 봉사 활동처 조회
async function getVolunteerList() {
  let url = 'http://apis.data.go.kr/B460014/vmsdataview/getVollcolectionList'; /* URL */
  url += `?${encodeURIComponent('serviceKey')}=${config.key}`; /* Service Key */
  url += `&${encodeURIComponent('numOfRows')}=${encodeURIComponent('10')}`; /**/
  url += `&${encodeURIComponent('pageNo')}=${encodeURIComponent('1')}`; /**/
  url += `&${encodeURIComponent('strDate')}=${encodeURIComponent('2020-11-01')}`; /**/
  url += `&${encodeURIComponent('endDate')}=${encodeURIComponent('2020-12-31')}`; /**/
  url += `&${encodeURIComponent('areaCode')}=${encodeURIComponent('0101')}`; /**/
  // url += '&' + encodeURIComponent('TermType') + '=' + encodeURIComponent('1'); /**/
  // url += '&' + encodeURIComponent('status') + '=' + encodeURIComponent('1'); /**/
  return await MNetSend({
    url: url,
    method : 'GET'
  });
  // return axios.get(url);
}

// 봉사 참여정보 지역별 목록조회
async function getVolunteerAreaList(sendObj) {
  const queryStr = new URLSearchParams(sendObj).toString();
  // url += '&' + encodeURIComponent('schSido') + '=' + encodeURIComponent('6410000'); /**/
  // url += '&' + encodeURIComponent('schSign1') + '=' + encodeURIComponent('6410000'); /**/
  return await MNetSend({
    url: `${config.baseUrl}/VolunteerPartcptnService/getVltrSearchWordList?serviceKey=${config.key}&${queryStr}`,
    method : 'GET'
  });
  // return axios.get(`${config.baseUrl}/VolunteerPartcptnService/getVltrSearchWordList?serviceKey=${config.key}&${queryStr}`);
}

// 자원봉사참여 상세정보
async function getVolunteerDetail(sendObj) {
  const queryStr = new URLSearchParams(sendObj).toString();
  return await MNetSend({
    url: `${config.baseUrl}/VolunteerPartcptnService/getVltrPartcptnItem?serviceKey=${config.key}&${queryStr}`,
    method : 'GET'
  });
  // return axios.get(`${config.baseUrl}/VolunteerPartcptnService/getVltrPartcptnItem?serviceKey=${config.key}&${queryStr}`);
}

// 구글 이미지 검색 API
function searchGoogleImage(queryStr) {
  return axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBo4Y4LqHnTqz7XqJPI13kcVQMt-GhuR6A&cx=1392865ebcc984797&q=${queryStr}`);
}

/* 로컬 DB */
// 로그인
function getUser() {
  return axios.get(`${config.fakeServer}/user`);
}

// 즐겨찾기 가져오기
function getBookmarks() {
  return axios.get(`${config.fakeServer}/bookmarks`);
}

// 즐겨찾기 추가하기
function postBookmarks(sendObj) {
  return axios.post(`${config.fakeServer}/bookmarks`, sendObj);
}

// 즐겨찾기 삭제하기
function deleteBookmarks(sendObj) {
  return axios.delete(`${config.fakeServer}/bookmarks/${sendObj.id}`);
}

// 기부목록 가져오기
function getDonatinonHistory() {
  return axios.get(`${config.fakeServer}/donationHist`);
}

// 기부목록 업데이트
function putDonationHistory(sendObj) {
  return axios.put(`${config.fakeServer}/donationHist/${sendObj.id}`, sendObj);
}

// 기부목록 추가하기
function postDonationHistory(sendObj) {
  return axios.post(`${config.fakeServer}/donationHist`, sendObj);
}

// 공지사항 가져오기
function getNotices() {
  return axios.get(`${config.fakeServer}/notices`);
}

// 기부목록 추가하기
function postNotices(sendObj) {
  return axios.post(`${config.fakeServer}/notices`, sendObj);
}

export {
  getAreaCodeInquiryList,
  getCntrCategoryGrpList,
  getCntrRealmCodeList,
  getCntrGrpProgramList,
  getVolunteerList,
  getVolunteerAreaList,
  getVolunteerDetail,
  searchGoogleImage,
  getUser,
  getBookmarks,
  postBookmarks,
  deleteBookmarks,
  getDonatinonHistory,
  putDonationHistory,
  postDonationHistory,
  getNotices,
  postNotices,
};
