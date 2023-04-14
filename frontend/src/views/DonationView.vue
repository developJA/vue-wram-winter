<template>
    <div>
        <div class="container">
            <div class="category-wrap">
                <swiper class="swiper mrg10" :options="swiperOption">
                    <swiper-slide v-for="listItem in categories" class="btn-cate" v-bind:key="listItem.item">
                        {{listItem.codeNm}}
                    </swiper-slide>

                    <!-- <div class="swiper-pagination" slot="pagination"></div> -->

                </swiper>
            </div>

            <div class="list-wrap">
                <ul>
                    <li>
                        <div class="thumb-img">
                            <img src="" alt="">
                        </div>
                        <div class="thumb-cont">
                            <p class="title">사망자만 5만3천 명이 넘었습니다.</p>
                            <p class="name">사회복지법인 세이브더칠드런코리아</p>
                            <p class="bottom">목표 모금액 : 150,000원</p>
                        </div>
                    </li>
                    <li>
                        <div class="thumb-img">
                            <img src="" alt="">
                        </div>
                        <div class="thumb-cont">
                            <p class="title">사망자만 5만3천 명이 넘었습니다.</p>
                            <p class="name">안동시 복지관</p>
                            <p class="bottom">목표 모금액 : 150,000원</p>
                        </div>
                    </li>
                    <li>
                        <div class="thumb-img">
                            <img src="" alt="">
                        </div>
                        <div class="thumb-cont">
                            <p class="title">사망자만 5만3천 명이 넘었습니다.</p>
                            <p class="name">안동시 복지관</p>
                            <p class="bottom">목표 모금액 : 150,000원</p>
                        </div>
                    </li>
                    <li>
                        <div class="thumb-img">
                            <img src="" alt="">
                        </div>
                        <div class="thumb-cont">
                            <p class="title">사망자만 5만3천 명이 넘었습니다.</p>
                            <p class="name">안동시 복지관</p>
                            <p class="bottom">목표 모금액 : 150,000원</p>
                        </div>
                    </li>
                    <li>
                        <div class="thumb-img">
                            <img src="" alt="">
                        </div>
                        <div class="thumb-cont">
                            <p class="title">사망자만 5만3천 명이 넘었습니다.</p>
                            <p class="name">안동시 복지관</p>
                            <p class="bottom">목표 모금액 : 150,000원</p>
                        </div>
                    </li>
                    <li>
                        <div class="thumb-img">
                            <img src="" alt="">
                        </div>
                        <div class="thumb-cont">
                            <p class="title">사망자만 5만3천 명이 넘었습니다.</p>
                            <p class="name">안동시 복지관</p>
                            <p class="bottom">목표 모금액 : 150,000원</p>
                        </div>
                    </li>
                    <li>
                        <div class="thumb-img">
                            <img src=" " alt="">
                        </div>
                        <div class="thumb-cont">
                            <p class="title">사망자만 5만3천 명이 넘었습니다.</p>
                            <p class="name">안동시 복지관</p>
                            <p class="bottom">목표 모금액 : 150,000원</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import { getCntrRealmCodeList } from '../api/index.js';
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
    font-family: 굴림;
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
    border: 0.1rem solid #333;
    max-width: 8rem;
    font-size: 13px;
    margin-right: 1rem;
    padding: 10px 5px;
    text-align: center;
}
</style>
