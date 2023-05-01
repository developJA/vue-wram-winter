// 공통함수
export default class CommonUtil {
static CommonFunc = () => {
  console.log('common Test');
}

static xmlToJson = (nodeList) => {
  const jsonArray = [];
  for (let i = 0; i < nodeList.length; i++) {
    const item = nodeList[i];
    const { childNodes } = item;
    const obj = {};
    for (let j = 0; j < childNodes.length; j++) {
      if (childNodes[j].nodeName != '#text') {
        const _nodeNm = childNodes[j].nodeName;
        const _nodeValue = childNodes[j].childNodes[0].nodeValue;
        obj[_nodeNm] = _nodeValue;
      }
    }
    jsonArray.push(obj);
  }

  return jsonArray;
}

static addComma = (str) => {
  str = str.replace(/[^0-9]/g, '');
  const parts = str.toString().split('.');
  if (str.substring(str.length - 1, str.length) == '.') {
    str = `${parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')}.`;
  } else {
    str = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (parts[1] ? `.${parts[1]}` : '');
  }
  return str;
}

/**
 * 년월일 데이트 포맷
 * @param {*} str : 변환할 날짜 "YYYYMMDD"
 */
static getYMD = (str) => {
  str = str.toString();
  const date_ymd_div = '.';
  const date_hms_div = ':';
  const date = new Date(Number(str.substr(0, 4)), Number(str.substr(4, 2)) + 1, Number(str.substr(6, 2)));
  const y = date.getFullYear();
  const m = (`0${date.getMonth() + 1}`).slice(-2);
  const d = (`0${date.getDate()}`).slice(-2);

  return y + date_ymd_div + m + date_ymd_div + d;
}

static getDateDiff = (dateStr1, dateStr2) => {
  // 먼저 받아온 형식의 날짜를 date형식으로
  const date1 = new Date(dateStr1);
  const date2 = new Date(dateStr2);
  // 그 다음에 getTime를 써서 날짜를 계산해줍니다. 밀리초를 반환합니다.
  const msDiff = date1.getTime() - date2.getTime();
  // 차이는 (1000밀리초×60초×60분×24시간)
  return Math.ceil(msDiff / (1000 * 60 * 60 * 24));
};
}
