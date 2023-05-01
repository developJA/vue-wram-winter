<template>
    <div>
        <div id="divTitleImg" class="banner-img-cont">
            <img :src="drawImage(donationInfo.rcritrNm)">
        </div>
        <div class="cont-wrap">
            <!-- <div class="top-box">
                <span class="tag">#튀르키예 - 시리아긴급모금</span>
                <p class="num">4,757,765,500원</p>
            </div>
            <div class="mid-box">
                <p>직접 기부금 : 2,851,242원</p>
                <p>참여 기부금 : 2,851,242원</p>
                <p>특별 기부금 : 2,851,242원</p>
                <p class="bottom">100명 참여</p>
            </div>
            <div class="desc-cont">
                <p class="left-quote">"</p>
                <div class="pdtb15">실제로 에르도안 대통령은 이슬람주의와 민족주의를 앞세워 적극적인 주권 행사를 하고 있다. 2020년 7월 유네스코 유산인 아야 소피아 박물관을 이슬람 사원인 모스크로 전환하는 법령을 발표한 것도 이와 같은 맥락에서다. 과거 튀르키예 공화국을 설립한 아타튀르크 전 대통령이 이슬람식의 술탄제를 폐지하고 서구화를 꾀한 것과는 반대되는 행보다. </div>
                <p class="right-quote">"</p>
            </div> -->
            <div class="top-box">
                <span class="tag">#{{ donationInfo.reprsntSj }}</span>
                <p class="num">{{ CommonUtil.addComma(String(donationInfo.rcritGoalAm)) }}원</p>
            </div>
            <div class="tbl-box" style="">
                <table>
                    <colgroup>
                        <col style="width:35%">
                        <col style="width:auto">
                    </colgroup>
                    <tbody>
                        <tr>
                            <td class="bold">모금기간</td>
                            <td class="left">{{ CommonUtil.getYMD(String(donationInfo.rcritBgnde)) }} ~ {{ CommonUtil.getYMD(String(donationInfo.rcritEndde)) }}</td>
                        </tr>
                        <tr>
                            <td class="bold">활동기간</td>
                            <td class="left">{{ getDuration() }}일간 진행됩니다.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="desc-cont">
                <p class="left-quote">"</p>
                <div class="pdtb15">{{ donationInfo.rcritSj }}</div>
                <p class="right-quote">"</p>
            </div>
            <div class="border-box">
                <div>
                    <span class="title">{{ donationInfo.rcritrNm }}</span>
                </div>
                <div class="tbl-box">
                    <table>
                        <colgroup>
                            <col style="width:35%">
                            <col style="width:auto">
                        </colgroup>
                        <tbody>
                            <tr>
                                <td class="bold">모집등록번호</td>
                                <td class="left">{{ donationInfo.cntrProgrmRegistNo }}</td>
                            </tr>
                            <tr>
                                <td class="bold">주소</td>
                                <td class="left">{{ donationInfo.postAdres }}</td>
                            </tr>
                            <tr>
                                <td class="bold">홈페이지</td>
                                <td class="left">{{ donationInfo.hmpgAdres }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="sub-list">
                <ul>
                    <li v-for="listItem in centerDntnList" :key="listItem.item">
                        <span class="title">{{listItem.reprsntSj || listItem.rcritPurps}}</span>
                        <p><strong class="dark-gray">분야</strong> : {{ listItem.cntrClUpNm }}</p>
                        <p><strong class="dark-gray">지역</strong> : {{ listItem.rcritArea }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
import 'setimmediate';
import { getCntrGrpProgramList } from '../api/index.js';

export default {
  data() {
    return {
      donationInfo: {},
      client: null,
      centerDntnList: [], // 단체별 기부목록
    };
  },
  created() {
    const { query } = this.$router.currentRoute;
    this.donationInfo = query.donationInfo;

    console.log(this.donationInfo);

    this.searchGoogleImage();
  },
  methods: {
    // 기부단체 이미지
    drawImage(name) {
      let url = '';
      try {
        url = require(`../assets/img/logo/${name} 로고.png`);
      } catch (err) {
        // console.log('no file error');
        url = require('../assets/img/logo/no_image.png');
      }

      return url;
    },
    getDuration() {
      const date_start = new Date(this.CommonUtil.getYMD(String(this.donationInfo.rcritBgnde)));
      const date_end = new Date(this.CommonUtil.getYMD(String(this.donationInfo.rcritEndde)));
      const diffMSec = this.CommonUtil.getDateDiff(date_end, date_start);
      return diffMSec;
    },
    searchGoogleImage() {
      // 구글 검색 라이브러리
      const GoogleImages = require('google-images');
      const client = new GoogleImages('1392865ebcc984797', 'AIzaSyBo4Y4LqHnTqz7XqJPI13kcVQMt-GhuR6A');

      let keyWord = '';
      const pageStVal = 1;

      const reprsntSj = this.donationInfo.reprsntSj || this.donationInfo.rcritPurps;
      const includeStrs = ['빈곤', '지원', '모금', '피해', '질병', '구호', '사업'];
      for (let i = 0; i < includeStrs.length; i++) {
        const includeStr = includeStrs[i];
        if (reprsntSj.includes(includeStr)) {
          const _before = reprsntSj.split(includeStr)[0].trim();
          const strtIdx = _before.lastIndexOf(' ');
          keyWord = _before.substr(strtIdx + 1) + includeStr;
          break;
        }
      }
      console.log('keyWord   : ', keyWord);

      if (keyWord.length > 0) {
        client.search(keyWord, { page: pageStVal, size: 'large' })
          .then((images) => {
            // console.log("images   >>>   ",images);
            if (images.length > 0) {
              if (images[0].url.indexOf('map') > 0 || images[0].url.indexOf('youtube') > 0) return false;

              document.getElementById('divTitleImg').children[0].src = images[0].url;
            }

            this.getCenterDonationList(); // 기부단체별 목록조회
          });
      }
    },
    // 기부단체별 목록 조회
    getCenterDonationList() {
      const param = {
        schCntrProgrmRegistNo: this.donationInfo.cntrProgrmRegistNo,
      };
      getCntrGrpProgramList(param)
        .then((res) => {
          console.log(res);
          this.centerDntnList = res.data.response.body.items.item; // 전체 조회
        });
    },
  },
};
</script>

<style>
.banner-img-cont > img{
    width : 100%;
    max-height: 16rem;
}
.cont-wrap{
    text-align: center;
}
.top-box{
    padding : 20px 0px;
}
.top-box .tag{
    background-color: #eee;
    color: #2c70dd;
    border-radius: 6px;
    line-height: 2rem;
    font-size: 0.8rem;
    padding: 2px 9px;
}
.top-box .num{
    font-size : 1.8rem;
    font-weight: 600;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.mid-box{
    font-size : 0.8rem;
    font-family: 'Courier New', Courier, monospace;
}
.mid-box .bottom{
    line-height: 2rem;
    font-weight: 600;
    font-family: '고딕';
    /* color: #9c9c9c; */
}
.desc-cont {
    padding : 20px;
    font-size: small;
}
.left-quote {
    background-image: url('../assets/img/icon-left-quote.png');
    background-repeat: no-repeat;
    color: transparent;
    background-size: contain;
    height: 1rem;
    margin-left: 45%
}
.right-quote {
    background-image: url('../assets/img/icon-right-quote.png');
    background-repeat: no-repeat;
    color: transparent;
    background-size: contain;
    height: 1rem;
    margin-left: 45%
}
.tbl-box {
    font-size : 0.9rem;
    font-family: 'Courier New', Courier, monospace;
}
.tbl-box td {
    padding: 0.5rem 0.3rem;
}
.border-box {
    background: #eee;
    padding: 1rem 0rem;
    text-align: left;
}
.border-box > div {
    font-size : 0.8rem;
    background: #fff;
    padding: 0.5rem;
}
.border-box .title {
    color : #39a6ee;
    font-size: 1.1rem;
    padding-top : 1rem;
    font-weight: 600;
}
.border-box .tbl-box {
    font-size : 0.65rem;
    font-family: 'Courier New', Courier, monospace;
}
.border-box .tbl-box td {
    padding: 0.3rem 0.2rem;
}
.sub-list {
    text-align: left;
    font-size:0.9rem;
}
.sub-list li {
    padding: 0.8rem;
    border: 2px;
    border-bottom: 0.1rem solid #666666;
    margin: 0.2rem;
}
.sub-list span.title {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    display: -webkit-box;
    word-break: keep-all;
    padding : 0.2rem 0rem;
}
.sub-list p{
    text-align:right;
    font-size:0.75rem;
}
</style>
