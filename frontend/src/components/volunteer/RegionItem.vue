<template>
    <div>
        <div id="divDepthCont" class="summary">
            <span class="active">시/도</span>
            <!-- <em> > </em>
            <span>구/군</span>
            <em> > </em>
            <span class="active">읍/면/동</span> -->
        </div>
        <div id="divAreaNmList" class="thumb-box" v-if="listFlag()">
            <button v-for="region in sidoList" class="post" :key="region.item" @click="activeRegion(region, $event)">
                {{region.sidoNm}}
            </button>
            <button v-for="region in gugunList" class="post" :key="region.item" @click="activeRegion(region, $event)">
                {{region.gugunNm}}
            </button>

        </div>
        <div class="bottom-box">
            <button id="btnNext" class="btn-txt" disabled @click="moveNext()">다음</button>
        </div>
    </div>

</template>

<script>
import { getAreaCodeInquiryList } from '../../api/index.js';

export default {
  data() {
    return {
      sidoList: [],
      gugunList: [],
      rgnlevel: 1, // 지역 레벨(시도:1, 구군:2, 읍/면/동:3)
      sltSidoInfo: {}, // 클릭한 시도 데이터
      sltGugunInfo: {}, // 클릭한 구군 데이터
    };
  },
  created() {
    // 화면 첫 로드 시 시도명 리스트 초기화
    this.sidoArr = [];
    this.getSidoInfo();
  },
  methods: {
    listFlag() {
      return (this.sidoList.length > 0) || (this.gugunList.length > 0);
    },
    getSidoInfo() {
      const param = {
        schSido: '',
      };

      getAreaCodeInquiryList(param)
        .then((res) => {
          console.log(res);
          const items = res.items.item;

          // console.log(items);
          const _sidoList = items.reduce(function (acc, curr) {
            if (acc.findIndex(({ sidoNm }) => sidoNm === curr.sidoNm) === -1) {
              acc.push(curr);
            }
            return acc;
          }, []);
          this.sidoList = _sidoList;
          this.rgnlevel = 1; // 레벨 1
          console.log('this.sidoList   >>> ', this.sidoList);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getGugunInfo(sidoNm) {
      console.log('get gugun info >>>>>', sidoNm);
      const param = {
        schSido: sidoNm,
      };

      getAreaCodeInquiryList(param)
        .then((res) => {
          const items = res.items.item;

          console.log('getGugunList   >>>   ', items);
          if (Array.isArray(items)) {
            this.gugunList = items;
          } else {
            this.gugunList = [items];
          }

          this.rgnlevel = 2; // 레벨 2

          document.getElementById('btnNext').innerText = '확인';
          document.getElementById('btnNext').setAttribute('disabled', true); // 하단 버튼 비활성화
        })
        .catch((err) => {
          console.log(err);
        });
    },
    activeRegion(obj, event) {
      const parentNode = event.currentTarget.parentElement;
      if (parentNode.querySelector('.on') != null) { // 선택된 element가 있을 경우
        parentNode.querySelector('.on').classList.remove('on');
      }
      event.currentTarget.classList.add('on');

      if (this.rgnlevel === 1) {
        this.sltSidoInfo = obj;
      } else if (this.rgnlevel === 2) {
        this.sltGugunInfo = obj;
      }

      document.getElementById('btnNext').removeAttribute('disabled'); // 하단 버튼 활성화
    },

    moveNext() {
      if (this.rgnlevel === 1) {
        this.sidoList = [];
        document.getElementById('divDepthCont').innerHTML = '<span>시/도</span>';
        document.getElementById('divDepthCont').innerHTML += '<em> > </em>';
        document.getElementById('divDepthCont').innerHTML += '<span class="active">구/군</span>';
        this.getGugunInfo(this.sltSidoInfo.sidoNm);
      } else if (this.rgnlevel === 2) {
        this.gugunList = [];

        // 리스트 컴포넌트로 데이터 전달
        this.$emit('selectRegion', this.sltGugunInfo);
      }
    },
  },

};
</script>

<style scoped>

</style>
