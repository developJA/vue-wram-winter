<template>
    <div>
        <div class="srch-wrap">
            <div class="inp-text select" @click="showSelectPopup">
                <input id="inpSelBox" type="text" readonly value="내위치">
                <button type="button" class="btn-select"></button>
            </div>
        </div>
        <div class="container">
            <kakao-map id="map-cont" v-if="currComponent === 'map'"></kakao-map>
            <region-item class="region-cont" v-if="currComponent === 'region'" @selectRegion="completeSelRegion"/>
            <list-item class="list-cont" v-if="currComponent === 'list'" :regionInfo="sltRegionInfo"/>
        </div>

    </div>
</template>

<script>
import RegionItem from '../components/volunteer/RegionItem.vue';
import ListItem from '../components/volunteer/ListItem.vue';
import KakaoMap from '../components/volunteer/KakaoMap.vue';

export default {
  data() {
    return {
      currComponent: 'map',
      sltRegionInfo: {},
    };
  },
  components: {
    RegionItem,
    ListItem,
    KakaoMap,
  },
  methods: {
    showSelectPopup() {
      const param = {};
      const _this = this;
      param.list = [
        { lb: '내위치', value: 'map' },
        { lb: '지역', value: 'region' },
      ];
      _this.$popList(param, function (rs) {
        console.log('list popup callback', rs);
        document.getElementById('inpSelBox').value = rs.lb;
        document.getElementById('inpSelBox').setAttribute('data-value', rs.value);

        _this.changeContent();
      });
    },
    changeContent() {
      this.currComponent = document.getElementById('inpSelBox').getAttribute('data-value');
    },
    completeSelRegion(obj) {
      console.log('completeSelRegion   !!!   ', obj);
      this.sltRegionInfo = obj;
      this.currComponent = 'list';
    },

  },

};
</script>

<style scoped>
.inp-text.select .btn-select{
    display: inline-block;
    width: 1.6rem;
    height: 1.6rem;
    background: #ffffff url(../assets/img/common/btn-select.png) center center no-repeat;
    background-position: center;
    background-size: 1.6rem;
    vertical-align: middle;
    position: absolute;
    left: 73px;
    border: none;
    margin: 7px;
}
.inp-text.select > input{
    padding-right: 2.5rem;
    padding: 0 0.7rem;
    width: 25%;
    height: 2.4rem;
    overflow: hidden;
    border: 0.1rem solid #E1E1E1;
    border-radius: 0.3rem;
    background: #ffffff;
    font-size: 1.1rem;
    letter-spacing: -0.03rem;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
