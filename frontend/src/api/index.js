import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: '/openapi/service/rest',
  key: 'czDub2E2d3LEXxD6Oc%2FG9Pzpc1IF9B7WiEUeghL9oSO0V7bFP8PRYBODUdoVNG2knFQcdXqJpG8HwPXi%2BuCxSw%3D%3D',
  lang: 'ko-KR',
};

// 2. API 함수들을 정리
// 지역코드조회
function getAreaCodeInquiryList(sendObj) {
  const queryStr = new URLSearchParams(sendObj).toString();
  return axios.get(`${config.baseUrl}/CodeInquiryService/getAreaCodeInquiryList?serviceKey=${config.key}&${queryStr}&numOfRows=1000`);
}
// 기부코드조회
function getCntrRealmCodeList() {
  // &clsType=A&pageNo=1&numOfRows=11 -- 기타까지의 리스트길이 : 11
  return axios.get(`${config.baseUrl}/CodeInquiryService/getCntrRealmCodeList`);
}
// 기부관련단체분야별목록조회
function getCntrAreaGrpList() {
  // ContributionGroupService/getCntrAreaGrpList?serviceKey=czDub2E2d3LEXxD6Oc%2FG9Pzpc1IF9B7WiEUeghL9oSO0V7bFP8PRYBODUdoVNG2knFQcdXqJpG8HwPXi%2BuCxSw%3D%3D&schCntrClCode=01&schSido=6110
  return axios.get(`${config.baseUrl}/ContributionGroupService/getCntrAreaGrpList`);
}
// 기부목록 조회
function getCntrGrpProgramList() {
  // &schRcritBgnde=20200301&schRcritEndde=20201231 -- 화면개발 시 쓰지 않기
  // cntrClUpNm(분야)로 필터링 필요
  console.log('getCntrGrpProgramList!!');
  console.log(`/ContributionGroupService/getCntrGrpProgramList?serviceKey=${config.key}`);
  return axios.get(`${config.baseUrl}/ContributionGroupService/getCntrGrpProgramList?serviceKey=${config.key}`);
}
// 기부목록 조회 2
// https://www.nanumkorea.go.kr/ctgp/selectCntrGrp.do?cntrRalm=&grpNm=&grpRegistCode=&pageIndex=2

// 봉사 활동처 조회
function getVolunteerList() {
  let url = 'http://apis.data.go.kr/B460014/vmsdataview/getVollcolectionList'; /* URL */
  url += `?${encodeURIComponent('serviceKey')}=${config.key}`; /* Service Key */
  url += `&${encodeURIComponent('numOfRows')}=${encodeURIComponent('10')}`; /**/
  url += `&${encodeURIComponent('pageNo')}=${encodeURIComponent('1')}`; /**/
  url += `&${encodeURIComponent('strDate')}=${encodeURIComponent('2020-11-01')}`; /**/
  url += `&${encodeURIComponent('endDate')}=${encodeURIComponent('2020-12-31')}`; /**/
  url += `&${encodeURIComponent('areaCode')}=${encodeURIComponent('0101')}`; /**/
  // url += '&' + encodeURIComponent('TermType') + '=' + encodeURIComponent('1'); /**/
  // url += '&' + encodeURIComponent('status') + '=' + encodeURIComponent('1'); /**/
  return axios.get(url);
}

// 지역별 봉사 참여정보 목록조회
function getVolunteerAreaList(sendObj) {
  const queryStr = new URLSearchParams(sendObj).toString();
  // url += '&' + encodeURIComponent('schSido') + '=' + encodeURIComponent('6410000'); /**/
  // url += '&' + encodeURIComponent('schSign1') + '=' + encodeURIComponent('6410000'); /**/
  // url += '&' + encodeURIComponent('upperClCode') + '=' + encodeURIComponent('0100'); /**/
  // url += '&' + encodeURIComponent('nanmClCode') + '=' + encodeURIComponent('0199'); /**/
  // url += '&' + encodeURIComponent('schCateGu') + '=' + encodeURIComponent('all'); /**/
  return axios.get(`${config.baseUrl}/VolunteerPartcptnService/getVltrAreaList?serviceKey=${config.key}&${queryStr}`);
}

export {
  getAreaCodeInquiryList,
  getCntrAreaGrpList,
  getCntrRealmCodeList,
  getCntrGrpProgramList,
  getVolunteerList,
  getVolunteerAreaList,
};
