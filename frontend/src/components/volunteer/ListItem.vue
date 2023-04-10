<template>
    <div>
        <div class="title underline">
            <span>서울시 마포구 상암동</span>
        </div>
        <div class="total">
            <span>전체 <em class="blue">3186</em>건</span>
        </div>
        <div class="list-wrap">
            <ul>
                <!-- <li class="bt-bld"  @click="moveDetail">
                    <div class="top">
                        <span class="left dark-gray">3186</span>
                        <span class="icon bg-green">모집중</span>
                        <span class="icon bg-blue">서울</span>
                        <span class="icon bg-pink">대면</span>
                    </div>
                    <p class="bold">시설봉사</p>
                    <p class="bold blue">사랑재요양원</p>
                    <p class="dark-gray">2023-03-01 ~ 23023-05-01</p>
                    <p class="bold">필요/신청인원 : <strong class="dark-gray">3/0</strong></p>
                </li> -->
                <li v-for="listItem in volunList" class="bt-bld" v-bind:key="listItem.item" @click="moveDetail">
                    <div class="top">
                        <span class="left dark-gray">{{ listItem.progrmRegistNo }}</span>
                        <span class="icon bg-green">{{ listItem.progrmSttusSe }}</span>
                        <span class="icon bg-blue">{{ regionInfo.sidoNm }}</span>
                        <span class="icon bg-pink">{{ listItem.progrmSttusSe }}</span>
                    </div>
                    <p class="bold">{{ listItem.progrmSj }}</p>
                    <p class="bold blue">{{ listItem.nanmmbyNm }}</p>
                    <p class="dark-gray">{{ listItem.progrmBgnde }} ~ {{ listItem.progrmEndde }}</p>
                    <p class="bold">신청/필요인원 : <strong class="dark-gray">{{ listItem.reqCnt }}/{{ listItem.partCnt }}</strong></p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { getVolunteerAreaList } from '../../api/index.js';

export default {
  data() {
    return {
      volunList: [],
    };
  },
  props: {
    regionInfo: Object,
  },
  created() {
    this.getListItem(this.regionInfo);
  },
  mounted() {
    document.getElementsByClassName('title')[0].querySelector('span').innerHTML = `${this.regionInfo.sidoNm} ${this.regionInfo.gugunNm}`;
  },
  methods: {
    moveDetail() {
      this.$router.push({ path: 'donationDetail' });
    },
    getListItem(obj) {
      const param = {
        schSido: obj.sidoCd,
      };
      getVolunteerAreaList(param)
        .then((res) => {
          console.log('getVolunteerAreaList     : ', res);
          this.volunList = res.data.response.body.items.item;
        })
        .then((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
</style>
