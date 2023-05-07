<template>
    <div>
        <div class="scroll-wrap">
            <div id="divTitleImg" class="banner-img-cont">
                <div class="bookmark" @click="saveBookmarks">
                    <i class="ico-fav"></i>
                    <span class="a11y-blind">즐겨찾기</span>
                </div>
                <img :src="drawImage(donationInfo.rcritrNm)">
            </div>
            <div class="cont-wrap">
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
    </div>

</template>

<script>
import 'setimmediate';
import { getCntrGrpProgramList } from '../../api/index.js';
import { regBookmarksApi, delBookmarksApi } from '../../server/api.js';

export default {
  data() {
    return {
      donationInfo: {},
      client: null,
      centerDntnList: [], // 단체별 기부목록
      bookmarkId: '', // 즐겨찾기 id
    };
  },
  created() {
    // query로 넘겨받은 donation정보
    const { query } = this.$router.currentRoute;
    this.donationInfo = query.donationInfo;
    console.log('donationInfo  >>> ', this.donationInfo);

    this.searchGoogleImage();
  },
  mounted() {
    // 푸터 버튼 활성화 => 기부
    this.EventBus.$emit('activeFooter', { url: 'donation' });

    // 즐겨찾기 저장여부 확인
  },
  methods: {
    // 기부단체 이미지
    drawImage(name) {
      let url = '';
      try {
        url = require(`@/assets/img/logo/${name} 로고.png`);
      } catch (err) {
        // console.log('no file error');
        url = require('@/assets/img/logo/no_image.png');
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
    // 즐겨찾기 저장
    saveBookmarks() {
      const _classList = document.getElementsByClassName('bookmark')[0].classList;
      if (_classList.contains('on')) {
        this.deleteBookmark();
      } else {
        this.registBookmark();
      }
    },
    // 즐겨찾기 추가
    registBookmark() {
      const _this = this;
      const param = {
        user_id: _this.getGlobal('USER_INFO').id,
        type: 'donation',
        typeNm: '기부',
        title: this.donationInfo.reprsntSj,
        groupNm: this.donationInfo.rcritrNm,
        startDt: this.donationInfo.rcritBgnde,
        endDt: this.donationInfo.rcritEndde,
        item_id: this.donationInfo.rcritrId,
      };
      regBookmarksApi(param, function (rd) {
        _this.$popAlert('즐겨찾기에 추가되었습니다.');
        document.getElementsByClassName('bookmark')[0].classList.add('on');
      });
    },
    // 즐겨찾기 삭제
    deleteBookmark() {
      const _this = this;
      const param = {
        user_id: _this.getGlobal('USER_INFO').id,
        type: 'donation',
        item_id: this.donationInfo.rcritrId,
      };
      delBookmarksApi(param, function (rd) {
        _this.$popAlert('즐겨찾기에서 제거되었습니다.');
        document.getElementsByClassName('bookmark')[0].classList.remove('on');
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
    background-image: url('../../assets/img/icon-left-quote.png');
    background-repeat: no-repeat;
    color: transparent;
    background-size: contain;
    height: 1rem;
    margin-left: 45%
}
.right-quote {
    background-image: url('../../assets/img/icon-right-quote.png');
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
