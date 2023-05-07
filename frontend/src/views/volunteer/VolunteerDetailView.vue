<template>
    <div>
        <div class="scroll-wrap">
            <div class="banner-img-cont">
                <img src="https://ichef.bbci.co.uk/news/640/cpsprodpb/408e/live/c4de3cf0-a68a-11ed-8f65-71bfa0525ce3.jpg">
            </div>
            <div class="cont-wrap">
                <div class="top-box">
                    <span class="tag">#튀르키예 - 시리아긴급모금</span>
                    <p class="num">4,757,765,500원</p>
                </div>
                <div class="mid-box">
                    <p>직접 기부금 : 2,851,242원</p>
                    <p>참여 기부금 : 2,851,242원</p>
                    <p>특별 기부금 : 2,851,242원</p>
                    <p class="bottom">100명 참여</p>
                </div>
                <div class="desc-cont">
                    <p class="left-quote">"</p>
                    <div class="pdtb15">실제로 에르도안 대통령은 이슬람주의와 민족주의를 앞세워 적극적인 주권 행사를 하고 있다. 2020년 7월 유네스코 유산인 아야 소피아 박물관을 이슬람 사원인 모스크로 전환하는 법령을 발표한 것도 이와 같은 맥락에서다. 과거 튀르키예 공화국을 설립한 아타튀르크 전 대통령이 이슬람식의 술탄제를 폐지하고 서구화를 꾀한 것과는 반대되는 행보다. </div>
                    <p class="right-quote">"</p>
                </div>
                <div class="bottom-box pdtb15">
                  <button id="btnDonate" class="btn-txt">5,000원 기부하기</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getVolunteerDetail } from '../../api/index.js';

export default {
  data() {
    return {
      volunteerInfo: {},
      prgrmNo: '',
    };
  },
  created() {
    const { query } = this.$router.currentRoute;
    console.log('query  >> ', query);
    this.prgrmNo = query.prgrmNo;
  },
  mounted() {
    console.log('mount!!!   prgrmNo : ', this.prgrmNo);
    const param = {
      progrmRegistNo: this.prgrmNo,
    };
    getVolunteerDetail(param)
      .then((res) => {
        this.volunteerInfo = res.data.response.body.items.item;
      })
      .then((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
.banner-img-cont > img{
    width : 100%;
}
.cont-wrap{
    text-align: center;
}
.top-box{
    padding : 20px 0px;
}
.top-box .tag{
    background-color: #eee;
    color: #2c70dd;
    border-radius: 6px;
    line-height: 2rem;
    font-size: 0.8rem;
    padding: 2px 9px;
}
.top-box .num{
    font-size : 1.8rem;
    font-weight: 600;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.mid-box{
    font-size : 0.8rem;
    font-family: 'Courier New', Courier, monospace;
}
.mid-box .bottom{
    line-height: 2rem;
    font-weight: 600;
    font-family: '고딕';
    /* color: #9c9c9c; */
}
.desc-cont {
    padding : 20px;
    font-size: small;
}
.left-quote {
    background-image: url('../../assets/img/icon-left-quote.png');
    background-repeat: no-repeat;
    color: transparent;
    background-size: contain;
    height: 1rem;
    margin-left: 45%
}
.right-quote {
    background-image: url('../../assets/img/icon-right-quote.png');
    background-repeat: no-repeat;
    color: transparent;
    background-size: contain;
    height: 1rem;
    margin-left: 45%
}
</style>
