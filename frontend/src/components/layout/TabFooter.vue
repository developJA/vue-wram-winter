<template>
	<footer>
		<div class="menuWrap footer">
			<router-link to="/home" replace class="home">홈</router-link>
    		<router-link to="/volunteer" replace class="volunteer">봉사</router-link>
			<router-link to="/donation" replace class="donation">기부</router-link>
    		<router-link to="/my" replace class="my">MY</router-link>
		</div>
	</footer>
</template>

<script>
export default {
	data() {
		return{
			currIconNm : "",	// 활성화된 아이콘
		}
	},
	mounted() {
		this.EventBus.$off('activeFooter');
		this.EventBus.$on("activeFooter", (param, callback)=>{
			// this.currIconNm = param.url;
			// console.log('active footer!   url :  ', this.currIconNm);
		});
	},
	methods : {
		activeIcon(event) {
			console.log("this   >> ",event);
		}
	}
};
</script>

<style scoped>

footer{
	width:100%;
	text-align:center;
	position:fixed;
	z-index: 999;
	bottom : 0;
	box-shadow:  -5px 0px 8px 0px #636363;
	background-color: #fff;
}
footer .menuWrap{
	position: relative;
    display: block;
    top: 20px;
    margin: 0 auto;
    height: 80px;
}
footer .menuWrap a{
	float: left;
    padding: 10px 20px;
    list-style: none;
    position: relative;
    width: 25%;
    box-sizing: border-box;
	font-size: 9px;
	background-position: center top;
	line-height: 6;
	background-repeat: no-repeat;
	color : #c3c3c3;
	text-decoration-line : none;
}
footer .menuWrap a.router-link-active{
	color : #39a6ee;
}

footer .footer .home{
	background-image: url("../../assets/img/icon-home.png");
	background-size: 24px auto;
}
footer .footer .volunteer{
	background-image: url("../../assets/img/icon-volunteer.png");
	background-size: 28px auto;
}
footer .footer .donation{
	background-image: url("../../assets/img/icon-donate.png");
	background-size: 28px auto;
}
footer .footer .my{
	background-image: url("../../assets/img/icon-my.png");
	background-size: 25px auto;
}
footer .footer .home.router-link-active{
	background-image: url("../../assets/img/icon-home-blue.png");
	background-size: 24px auto;
}
footer .footer .volunteer.router-link-active{
	background-image: url("../../assets/img/icon-volunteer-blue.png");
	background-size: 28px auto;
}
footer .footer .donation.router-link-active{
	background-image: url("../../assets/img/icon-donate-blue.png");
	background-size: 28px auto;
}
footer .footer .my.router-link-active{
	background-image: url("../../assets/img/icon-my-blue.png");
	background-size: 25px auto;
}
</style>
