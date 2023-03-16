// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl : 'http://openapi.1365.go.kr/openapi/service/rest/',
    key : 'czDub2E2d3LEXxD6Oc%2FG9Pzpc1IF9B7WiEUeghL9oSO0V7bFP8PRYBODUdoVNG2knFQcdXqJpG8HwPXi%2BuCxSw%3D%3D',
    lang : 'ko-KR',
}

// 2. API 함수들을 정리 
// 기부관련단체분야별목록조회
function getCntrAreaGrpList () {
    // ContributionGroupService/getCntrAreaGrpList?serviceKey=czDub2E2d3LEXxD6Oc%2FG9Pzpc1IF9B7WiEUeghL9oSO0V7bFP8PRYBODUdoVNG2knFQcdXqJpG8HwPXi%2BuCxSw%3D%3D&schCntrClCode=01&schSido=6110
    return axios.post('ContributionGroupService/getCntrAreaGrpList')
}
// 기부코드조회 
function getCntrRealmCodeList() {
    // &clsType=A&pageNo=1&numOfRows=11 -- 기타까지의 리스트길이 : 11
    return axios.post('CodeInquiryService/getCntrRealmCodeList')
}
// 기부목록 조회
function getCntrGrpProgramList() {
    // &schRcritBgnde=20200301&schRcritEndde=20201231
    // cntrClUpNm(분야)로 필터링 필요
    return axios.post('CodeInquiryService/getCntrRealmCodeList');
}

export {
    getCntrAreaGrpList,
    getCntrRealmCodeList,
    getCntrGrpProgramList,
}