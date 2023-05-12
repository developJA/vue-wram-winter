<template>
    <div>
        <div class="content">
            <div class="scroll-wrap">
                <div class="list-cont">
                    <div class="list-wrap">
                        <ul>
                            <li v-for="listItem in likeList" v-bind:key="listItem.item" @click="moveDetail(listItem)" class="bt-bld pdl05">
                                <div>
                                    <span class="icon bg-green">{{ listItem.typeNm }}</span>
                                    <span class="bold">{{ listItem.title }}</span>
                                </div>
                                <p class="bold blue">{{ listItem.groupNm }}</p>
                                <p class="dark-gray">{{ CommonUtil.getYMD(String(listItem.startDt)) }} ~ {{ CommonUtil.getYMD(String(listItem.endDt)) }}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="nodata-wrap">
                    <div class="no-data-img"></div>
                    <p>관심 활동이 없습니다.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getBookmarkListApi } from '../../server/api.js';

export default {
  data() {
    return {
      likeList: [],
    };
  },
  created() {
    this.getLikeList();
  },
  methods: {
    getLikeList() {
      const _this = this;
      const param = {
        user_id: _this.getGlobal('USER_INFO').id,
      };
      getBookmarkListApi(param, function (rd) {
        _this.likeList = rd.data.bookmarks;

        if (_this.likeList.length > 0) {
          document.querySelector('.scroll-wrap').classList.remove('flex');
          document.querySelector('.nodata-wrap').classList.add('none');
        } else {
          document.querySelector('.scroll-wrap').classList.add('flex');
          document.querySelector('.nodata-wrap').classList.remove('none');
        }
      });
    },
    moveDetail(obj) {
      console.log(obj);
      this.$router.push({
        name: 'donationDetail',
        params: {
          groupName : obj.groupNm,
          itemId : obj.item_id,
        }
      });
    },
  },
};
</script>

<style scoped>

</style>
