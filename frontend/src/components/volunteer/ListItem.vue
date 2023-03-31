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
                        <span class="left dark-gray">{{ listItem.seq }}</span>
                        <span class="icon bg-green">{{ listItem.statusName }}</span>
                        <span class="icon bg-blue">{{ listItem.areaName }}</span>
                        <span class="icon bg-pink">{{ listItem.termTypeName }}</span>
                    </div>
                    <p class="bold">{{ listItem.title }}</p>
                    <p class="bold blue">{{ listItem.centName }}</p>
                    <p class="dark-gray">{{ listItem.progrmBgnde }} ~ {{ listItem.progrmEndde }}</p>
                    <p class="bold">신청/필요인원 : <strong class="dark-gray">{{ listItem.reqCnt }}/{{ listItem.partCnt }}</strong></p>
                </li>    
            </ul>
        </div>
    </div>
</template>

<script>
import { getVolunteerList } from '../../api/index.js';

export default {
    data() {
        return {
            volunList : [],
        }
    },
    created() {
        this.getListItem();

    },
    methods : {
        moveDetail(){
            this.$router.push({ path: 'donationDetail' })
        },
        getListItem(){
            getVolunteerList()
            .then((res)=>{
                console.log(res);
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(res.data, "text/xml");
                const itemNodes = xmlDoc.getElementsByTagName('item'); // 특정 태그를 기준으로 변수에 담는다
                // console.log(itemNodes);

                // xml -> JSON
                this.volunList = this.CommonUtil.xmlToJson(itemNodes);
                console.log("volunList   >>>    ", this.volunList);
                return this.volunList;
            })
            .then((err)=>{
                console.log(err);
            });
        },
    }
}
</script>

<style scoped>
</style>