<template>
    <div>
        <div class="container">
            <div id="divCateWrap" class="category-wrap">
                <swiper class="swiper mrg10" :options="swiperOption">
                    <swiper-slide v-for="listItem in categories" v-bind:key="listItem.item">
                        <button class="btn-cate bg-light-green" @click="selectCategory(listItem, $event)">{{listItem.codeNm}}</button>
                    </swiper-slide>

                    <!-- <div class="swiper-pagination" slot="pagination"></div> -->

                </swiper>
            </div>

            <div class="list-wrap">
                <ul>
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
                    <li v-for="listItem in donationList" :key="listItem.item">
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
import { getCntrRealmCodeList, getCntrCategoryGrpList, getCntrGrpProgramList } from '../api/index.js';
import 'swiper/css/swiper.css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
      },
      categories: [],
      sltCateCd: '', // 선택한 카테고리 코드
      donationList: [],
      fs : null,    // 파일시스템 모듈
    };
  },
  created() {
    // console.log('hi!!!', this.$store._actions);
    // this.$store.dispatch('global/FETCH_DONATION_LIST');
    // console.log('state DONATION_LIST            ', this.$store.state.DONATION_LIST);

    this.getCateList();
  },
  computed: {
    getList() {
      const result = this.$store.state.dailys.results;
      console.log('result            ', result);
      return result;
    },

  },
  methods: {
    getCateList() {
      getCntrRealmCodeList()
        .then((res) => {
          this.categories = res.data.response.body.items.item;
        });
    },
    selectCategory(obj, event) {
      if (document.getElementById('divCateWrap').querySelector('.on') != null) { // 선택된 element가 있을 경우
        document.getElementById('divCateWrap').querySelector('.on').classList.remove('on');
      }
      event.currentTarget.classList.add('on');

      this.sltCateCd = obj.code;

      console.log('sltCateCd   : ', this.sltCateCd);

      this.getDonationList();
    },
    getDonationList() {
      const param = {
        schCntrClCode: this.sltCateCd,
      };
       getCntrCategoryGrpList(param)
        .then((res) => {
            const items = res.data.response.body.items.item;
          
            console.log('getCntrCategoryGrpList   >>> ', items);
            this.getDonationList2(items);
        });
    },
    async getDonationList2(list) {
        for(let i=0;i<list.length; i++){
            const result = await loop(list[i].cntrProgrmRegistNo);
            console.log("result    : ",result);
        }

        function loop(str){
            console.log("cntrProgrmRegistNo   : ",str);
            return new Promise(function(resolve) {
                const param = {
                    schCntrProgrmRegistNo: str,
                };
                getCntrGrpProgramList(param)
                .then((res) => {
                    console.log("response >> ",res);
                    resolve(res.data.response.body.items.item);
                });
            });
        }
        
    },
    loadImage(obj) {
        let url = "";
        try {
            url = require(`../assets/img/logo/${obj.rcritrNm} 로고.png`);
        } catch (err) {
            console.log('no file error');
            url = require(`../assets/img/logo/no_image.png`);
        }

        return url;
    }
  },
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
    border-radius: 8px;
    border: none;
    width: 5.3rem;
    font-size: 13px;
    margin-right: 1rem;
    padding: 10px 5px;
    text-align: center;
    height: 3rem;
}
.btn-cate.on {
    background: #76da11;
}
.list-wrap .thumb-img img {
    width: 100%;
}

</style>
