<template>
    <div>
        <div class="content">
            <div class="scroll-wrap">
                <div class="banner-wrap">
                    <!-- <swiper class="swiper h500" :options="swiperOption">
                        <swiper-slide v-for="listItem in getList" class="post" v-bind:key="listItem.item">
                            <router-link v-bind:to="`detail/${listItem.id}`">
                                <img :src="`https://image.tmdb.org/t/p/w500/${listItem.poster_path}`">
                            </router-link>
                        </swiper-slide>

                        <div class="swiper-pagination" slot="pagination"></div>

                    </swiper> -->
                </div>
                <div class="news-wrap">
                    <div class="cont-ttl">
                        <h3>따뜻한 소식</h3>
                        <button>더보기</button>
                    </div>
                    <ul>
                        <li>
                            <div class="thumb-img">
                                <img src="" alt="">
                            </div>
                            <div class="thumb-cont">
                                <p class="title">용인시 동물보호협회</p>
                                <p class="cont">돈이 많아서 기부 1억씩 하고싶다</p>
                                <p class="bottom">총 모금액 150,000원</p>
                            </div>
                        </li>
                        <li>
                            <div class="thumb-img">
                                <img src="" alt="">
                            </div>
                            <div class="thumb-cont">
                                <p class="title">용인시 동물보호협회</p>
                                <p class="cont">돈이 많아서 기부 1억씩 하고싶다</p>
                                <p class="bottom">총 모금액 150,000원</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="notice-wrap">
                    <div class="cont-ttl">
                        <h3>공지사항</h3>
                        <button>더보기</button>
                    </div>
                    
                    <ul>
                        <li>
                            <p class="title">[알림]작은돈부터 기부 시작!</p>
                            <p class="date">2023-02-01</p>
                        </li>
                        <li>
                            <p class="title">[알림]작은돈부터 기부 시작!</p>
                            <p class="date">2023-02-01</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>

export default {
    created() {
        
    },
    methods : {
        async getSeaWeatherData(){
        let rst = await this.$MNetSend({
            url: '',
        });

        console.log(rst);

        }
    }
}
</script>

<style scoped>
.cont-ttl{
    display: flex;
    flex-wrap: wrap;
}
.cont-ttl button{
    position: absolute;
    right: 10px;
    margin-top: 27px;
    border: none;
    background: none;
    color: #9e9e9e;
    text-decoration:underline;
    font-size: 11px;
}
ul {
    padding-left: 5px;
    margin: 0px;
}
.news-wrap li {
    width: calc(100% - 1rem);
    position: relative;
}
.news-wrap .thumb-img, .notice-wrap .thumb-img{
    display: inline-block;
    overflow: hidden;
    position: relative;
    width: 4.5rem;
    height: 4rem;
    background: #f6f6f6;
    border-radius: 10px;
}
.news-wrap p{
    display: inline-block;
    margin-left: 0.5rem;
    word-break: break-all;
    font-size: small;
    font-family: 굴림;
}
.thumb-cont {
    display: inline-block;
    width: calc(100% - 7rem);
    word-break: break-all;
    vertical-align: top;
}
.news-wrap p.title {
    font-size: 0.5rem;
}
.news-wrap p.cont {
    line-height: 2rem;
}
.news-wrap p.bottom {
    right: 6px;
    position: absolute;
    bottom: 6px;
    font-weight: bold;
    color : #39a6ee;
    font-size: 0.7rem;
}

.notice-wrap li {
    position: relative;
    line-height: 1.6rem;
    border-bottom: 0.1rem solid #E1E1E1;
    padding: 10px 5px;
}
.notice-wrap p.title{
    font-weight: bold;
    line-height: 1.6rem;
}
.notice-wrap p.date{
    color: #9c9c9c;
    font-size: 0.7rem;
}
</style>