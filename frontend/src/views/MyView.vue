<template>
    <div>
        
        <div class="profile-wrap">
            <div class="thumb-img">
                <img src="" alt="">
            </div>
            <div class="thumb-info">
                <span class="sticker">Lv.1</span>
                <p class="nick">신정아</p>
                <p class="id">jas1226</p>
            </div>
        </div>
        <div class="container">
            <div class="level-wrap">
                <div class="grade">
                    <span>Lv.1</span>
                    <img src="../assets/img/icon-plant.png">
                </div>
                
                <div class="progress-bar">
                    <div class="bar" id="progress-bar" style="width:70%" value="70">
                        <span class="a11y-blind">3회</span>
                    </div>
                </div>
            </div>
            <div class="list-wrap">
                <ul>
                    <li>
                        <span>활동뱃지 5개</span>
                        <button class="btn-next"></button>
                    </li>
                    <li>
                        <span>봉사 참여 확인</span>
                        <button class="btn-next"></button>
                    </li>
                    <li>
                        <span>관심 활동</span>
                        <button class="btn-next"></button>
                    </li>
                    <li>
                        <span>봉사 기록</span>
                        <button class="btn-next"></button>
                    </li>
                    <li>
                        <span>기부 기록</span>
                        <button class="btn-next"></button>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.profile-wrap{
    padding : 25px 10px;
    display: flex;
    align-items: center;
    background: #f6f6f6;
}
.profile-wrap .thumb-img{
    display: inline-block;
    overflow: hidden;
    position: relative;
    width: 6rem;
    height: 6rem;
    background: #eee;
    border-radius: 35px;
}
.profile-wrap .thumb-info{
    display: inline-block;
    width: calc(100% - 8rem);
    margin-left: 1.5rem;
    word-break: break-all;
}
.thumb-info .sticker{
    border-radius : 15px;
    background-color : #76da11;
    padding : 0px 6px;
    font-size : 0.8rem;
    vertical-align: center;
    color:#fff;
}
.thumb-info .nick{
    font-weight: 800;
    line-height: 2;
    font-size: 1.1rem;
}
.thumb-info .id{
    font-size: 0.9rem;
}
.level-wrap {
    background-color: #ff568b68;
    height : 100px;
    padding: 0px 10px;
}
.level-wrap .progress-bar {
    height: 1rem;
    margin-top: 0.5rem;
    background: #f0f2f5;
    border-radius: 10px;
}
.progress-bar .bar{
    float: left;
    height:1rem;
    color: #fff;
    text-align: center;
    background-color: #3f98d3;
    border-radius: 10px;
    font-size: 0.8rem;
    line-height: 1.3;
}
.level-wrap .grade{
    padding-top : 10px;
    text-align : right;
}
.level-wrap .grade span{
    line-height: 2rem;
    font-weight: 600;
    color: #fff;
}
.level-wrap .grade img{
    height: 1.4rem;
    margin-left: 5px;
}
.list-wrap ul{
    padding : 0px 15px;
}
.list-wrap li{
    padding: 0.6rem 0rem;
    border-bottom: 0.1rem solid #E1E1E1;
    width: calc(100% - 0.5rem);
    line-height: 2;
}
.list-wrap .btn-next{
    background: #ffffff url(../assets/img/btn-pgn-next.png) center center no-repeat;
    background-position: center;
    background-size: 2rem;
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border: none;
    position: absolute;
    right: 30px;
}
</style>