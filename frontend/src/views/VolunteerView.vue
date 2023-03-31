<template>
    <div>
        <div class="srch-wrap">
            <div class="inp-text select" @click="showSelectPopup">
                <input id="inpSelBox" type="text" readonly value="내위치">
                <button type="button" class="btn-select"></button>
            </div>
        </div>
        <div class="container">
            <div id="map-cont">
                <!-- <kakao-map></kakao-map> -->
            </div>
            <region-item class="region-cont" v-show="true" />
            <list-item class="list-cont" v-show="false" />
        </div>
        
    </div>
</template>

<script>
import RegionItem from '../components/volunteer/RegionItem.vue';
import ListItem from '../components/volunteer/ListItem.vue';

export default {
    components: { 
        RegionItem,
        ListItem
    },
    methods : {
        showSelectPopup(){
            let param = {};
            param.list = [
                {"lb" : "내위치"},
                {"lb" : "지역"},
            ];
            this.$popList(param, function(rs){
                console.log("list popup callback", rs);
                document.getElementById("inpSelBox").value = rs.lb;

                this.changeContent();
            });
        },
        changeContent(){
            // let sltVal = document.getElementById("inpSelBox").value;
            // if(sltVal == "내위치"){
                
            // }
        }

    }
    

}
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