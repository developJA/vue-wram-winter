<template>
    <div>
        <div class="srch-wrap">
            <div class="inp-text select">
                <input type="text" readonly value="내위치">
                <button type="button" class="btn-select"></button>
            </div>
        </div>
        <div class="container">
            <div id="map-cont">
                <!-- <kakao-map></kakao-map> -->
            </div>
            <div class="region-cont">
                <div class="summary">
                    <span>시/도</span>
                    <em> > </em>
                    <span>구/군</span>
                    <em> > </em>
                    <span class="active">읍/면/동</span>
                </div>
                <div class="thumb-box">
                    <button class="on">강원도</button>
                    <button>경기도</button>
                    <button>경상남도</button>
                    <button>경상북도</button>
                    <button>광주광역시</button>
                    <button>대구광역시</button>
                    <button>대전광역시</button>
                    <button>부산광역시</button>
                    <button>서울특별시</button>
                    <button>세종특별자치시</button>
                </div>
                <div class="bottom-box">
                    <button class="btn-txt">다음</button>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {

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
.region-cont > .summary {
    font-weight: 600;
    color: #000;
    padding: 10px 0px;
}
.region-cont .summary em {
    color: #7e7e7e;
}

.region-cont .summary span.active {
    color: #f45587;
}
.region-cont .thumb-box{
    padding-top : 10px;
}
.region-cont .thumb-box button{
    border: none;
    background-color: #ffffff;
    color: #333333;
    display: inline-block;
    text-align: center;
    border-radius: 0.3rem;
    vertical-align: top;
    min-width: 6.3rem;
    height: 2.8rem;
    min-height: 2.2rem;
    padding: 0 0.6rem;
    line-height: 1.5;
    margin: 4px 4px;
    box-shadow: 1px 1px 1px 1px #9c9c9c;
    font-size: 0.7rem;
}
.region-cont .thumb-box button.on{
    background-color: #eee;
}
</style>