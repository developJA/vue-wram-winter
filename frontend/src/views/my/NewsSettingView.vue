<template>
    <div>
      <div class="content">
        <div class="scroll-wrap">
            <div class="list-cont">
                <div class="list-wrap">
                    <ul>
                        <li v-for="listItem in histList" v-bind:key="listItem.item" @click="moveDetail(listItem)" class="bt-bld pdl05">
                          <div>
                            <span class="bold">{{ listItem.title }}</span>
                          </div>
                          <p class="dark-gray">{{ listItem.groupNm }}</p>
                          <p class="blue">기부한 총 금액 : <strong class="bold">{{ CommonUtil.addComma(String(listItem.amount)) }}</strong></p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="nodata-wrap none">
                <div class="no-data-img"></div>
                <p>따뜻한 소식이 없습니다.</p>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import { getDonateHistApi } from '../../server/api.js';

export default {
  data() {
    return {
      histList: [],
    };
  },
  created() {
    this.getHistoryList();
  },
  methods: {
    getHistoryList() {
      const _this = this;
      const param = {
        user_id: _this.getGlobal('USER_INFO').id,
      };
      getDonateHistApi(param, function (rd) {
        if (rd.status === 'SUCCESS') {
          _this.histList = rd.data.histories;

          console.log("_this.histList    >>  ", rd.data.histories);

          if (_this.histList.length > 0) {
            document.querySelector('.scroll-wrap').classList.remove('flex');
            document.querySelector('.nodata-wrap').classList.add('none');
          } else {
            document.querySelector('.scroll-wrap').classList.add('flex');
            document.querySelector('.nodata-wrap').classList.remove('none');
          }
        }
      });
    },

  },
};
</script>

<style scoped>

</style>
