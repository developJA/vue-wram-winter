<template>
    <div>
        <div class="container">
            <div id="divCateWrap" class="category-wrap">
                <swiper class="swiper mrg10" :options="swiperOption">
                    <swiper-slide v-for="cateItem in categories" v-bind:key="cateItem.item" ref="VuePerson">
                        <button class="btn-cate bg-light-green" @click="selectCategory(cateItem, $event)">{{cateItem.codeNm}}</button>
                    </swiper-slide>

                    <!-- <div class="swiper-pagination" slot="pagination"></div> -->

                </swiper>
            </div>

            <div class="list-wrap">
                <ul id="ulDonatList">
                    <!-- <li>
                        <div class="thumb-img">
                            <img src="" alt="">
                        </div>
                        <div class="thumb-cont">
                            <p class="title">사망자만 5만3천 명이 넘었습니다.</p>
                            <p class="name">사회복지법인 세이브더칠드런코리아</p>
                            <p class="bottom">목표 모금액 : 150,000원</p>
                        </div>
                    </li> -->
                    <li v-for="listItem in this.donationList" :key="listItem.item"  @click="selectItem(listItem)">
                        <div class="thumb-img">
                            <img :src="loadImage(listItem)" alt="">
                        </div>
                        <div class="thumb-cont">
                            <p class="title">{{listItem.reprsntSj || listItem.rcritPurps}}</p>
                            <p class="name">{{listItem.rcritrNm}}</p>
                            <p class="bottom">목표 모금액 : {{listItem.rcritGoalAm}}원</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import { getCntrRealmCodeList, getCntrGrpProgramList } from '../api/index.js';
import 'swiper/css/swiper.css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3.5,
      },
      categories: [],
      sltCateCd: '', // 선택한 카테고리코드
      sltCateNm: '', // 선택한 카테고리명
      donationAllList : [],
      donationList: [],
      fs : null,    // 파일시스템 모듈
      totCnt : 0,   // 기부 총 건수

      isExist: this.$refs.VuePerson
    };
  },
  created() {
    this.getCateList();
  },
  methods: {
    getCateList() {
      getCntrRealmCodeList()
        .then((res) => {
          this.categories.push({"code" : "", "codeNm" : "전체"})
          this.categories = this.categories.concat(res.data.response.body.items.item);
        //   this.isExist();

          this.getDonationTotCount();
        });
    },
    selectCategory(obj, event) {
      if (document.getElementById('divCateWrap').querySelector('.on') != null) { // 선택된 element가 있을 경우
        document.getElementById('divCateWrap').querySelector('.on').classList.remove('on');
      }
      event.currentTarget.classList.add('on');

      this.sltCateCd = obj.code;
      this.sltCateNm = obj.codeNm;

      console.log('sltCateCd   : ', this.sltCateCd);

      document.getElementById('ulDonatList').innerHTML = ""; // 재렌더링하기 위한 ul 요소 비워줌 
      this.setDonationList(obj.code);
    },
    getDonationTotCount(){
      const param = {
        schCntrClCode: this.sltCateCd,
      };
      getCntrGrpProgramList(param)
      .then((res) => {
        this.totCnt = res.data.response.body.totalCount;
        
        console.log('리스트  총건수 : ', this.totCnt);
        this.getDonationList();
      });
    },
    // 모든 목록 조회
    getDonationList(){
      const param = {
        numOfRows: this.totCnt, // 전체 조회
      };
      getCntrGrpProgramList(param)
      .then((res) => {

        this.donationAllList = res.data.response.body.items.item; // 전체 조회   
        this.donationList = this.donationAllList;
        // console.log("all list  >> ", this.donationList);
      });
    },
    // 카테고리에 따른 리스트 세팅
    setDonationList(code){
        this.donationList = []; // 초기화

        if(code == ""){ // 전체
            this.donationList = this.donationAllList;
        }else{
            const list = this.donationAllList;
            this.donationList = list.filter(item => {
                return item.cntrClUpNm.includes(this.sltCateNm);
            });
            console.log("sltCateNm  : ",this.sltCateNm);
            console.log("donationList  : ",JSON.stringify(this.donationList));
        }
    },
    loadImage(obj) {
        let url = "";
        try {
            url = require(`../assets/img/logo/${obj.rcritrNm} 로고.png`);
        } catch (err) {
            // console.log('no file error');
            url = require(`../assets/img/logo/no_image.png`);
        }

        return url;
    },
    // 리스트 선택
    selectItem(obj) {
        this.$router.push({
            path: 'donationDetail',
            query: {
                schCntrProgrmRegistNo: obj.rcritrId,
            },
        });
    }
  },
  watch : {
    donationList() {
      console.log("donationList watch!!!!");
    }
  }

};
</script>

<style scoped>
.list-wrap li{
    width: 47%;
    display: inline-block;
    padding: 10px 5px;
    vertical-align: top;
}
.list-wrap .thumb-img {
    display: inline-block;
    overflow: hidden;
    position: relative;
    width: 95%;
    height: 5rem;
    background: #f6f6f6;
    border-radius: 10px;
}
.list-wrap .thumb-cont {
    /* font-family: 굴림; */
    background-color: #fff;
}
.list-wrap .thumb-cont p.title{
    font-size: 0.8rem;
}
.list-wrap .thumb-cont p.name{
    color: #9c9c9c;
    font-size: 0.5rem;
    line-height: 1.6rem;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.list-wrap .thumb-cont p.bottom{
    color : #f45587;
    font-weight: bold;
    font-size: 11px;
}
.btn-cate {
    /* border-radius: 8px;
    border: none;
    width: 5.3rem;
    font-size: 13px;
    margin-right: 1rem;
    padding: 10px 5px;
    text-align: center;
    height: 3rem; */
    border: none;
    background-color: #ffffff;
    color: #333333;
    text-align: center;
    border-radius: 0.3rem;
    width: 5.3rem;
    height: 3rem;
    min-height: 2.2rem;
    padding: 1rem 0.5rem;
    line-height: 1.5;
    margin: 0.3rem;
    box-shadow: 1px 1px 1px 1px #9c9c9c;
    font-size: 0.7rem;
    /* margin-right: 1rem; */
}
.btn-cate.on {
    background-color: #eee;
}
.list-wrap .thumb-img img {
    width: 100%;
}

</style>
