<template>
    <div>
        <div id="divDepthCont" class="summary">
            <!-- <span>시/도</span>
            <em> > </em>
            <span>구/군</span>
            <em> > </em>
            <span class="active">읍/면/동</span> -->
        </div>
        <div id="divAreaNmList" class="thumb-box">
            <!-- <button class="on">강원도</button>
            <button>경기도</button>
            <button>경상남도</button>
            <button>경상북도</button>
            <button>광주광역시</button>
            <button>대구광역시</button>
            <button>대전광역시</button>
            <button>부산광역시</button>
            <button>서울특별시</button>
            <button>세종특별자치시</button> -->
        </div>
        <div class="bottom-box">
            <button class="btn-txt" disabled>다음</button>
        </div>
    </div>
  
</template>

<script>
import { getAreaCodeInquiryList } from '../../api/index.js';

export default {
    data() {
        return {
            sidoList : [],
            gugunList : [],
        }
    },
    created() {
        // 화면 첫 로드 시 시도명 리스트 초기화
        this.sidoArr = [];
        this.getAreaCode();
    },
    methods : {
        getAreaCode(sidoNm){
            let param = {
                schSido : sidoNm || ""
            };
            
            getAreaCodeInquiryList(param)
            .then((res)=>{
                console.log(res.data.response.body);
                const body = res.data.response.body;
                const items = body.items.item;
                if(sidoNm !== undefined){   // 구군 리스트 조회
                    
                }else{                      // 시도 리스트 조회
                    const _sidoList = items.map(x => x.sidoNm);
                    const _set = new Set(_sidoList);
                    this.sidoList =  [..._set]; // Set객체로 중복제거
                    // console.log(this.sidoList);
                    this.setAreaCode(this.sidoList);
                }
            })
            .catch((err)=>{
                console.log(err);
            });
        },
        setAreaCode(arr){
            document.getElementById("divAreaNmList").innerHTML = '';
            arr.forEach(item => {
                document.getElementById("divAreaNmList").innerHTML += '<button>'+ item +'</button>';
            })
        }
    },
    mounted() {
        // 상단 depth 타이틀
        document.getElementById("divDepthCont").innerHTML = '<span class="active">시/도</span>';
    }
}
</script>

<style scoped>

</style>