<template>
    <div class="loading-wrap" v-if="showIndicator">
        <div class="loading-bg"></div>

        <div class="loading">
            <i class="ico-loading" aria-hidden="true">
                <span class="a11y-blind">로딩중</span>
            </i>
        </div>
    </div>
</template>

<script>
export default {
  name: "Indicator",
  props: {
   
  },
  data() {
    return {
      showIndicator: false,
    };
  },
  mounted(){
    this.EventBus.$on('showIndicator', (flag) => {
        this.showIndicator = flag;
    })
  },
  methods: {
    
  },
};
</script>

<style scoped>
.loading-wrap {
	display: -webkit-box;
    display: -ms-flexbox;
	display: flex;
	-webkit-box-flex: 1;
	-ms-flex: 1;
	flex: 1;
	-webkit-box-align: center;
    -moz-align-items: center;
    -ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
    -moz-box-justify-content: center;
    -ms-flex-pack: center;
	justify-content: center;
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background-color: rbga(255, 255, 255, .3);
	z-index: 100;
}

.loading-wrap .loading {
	display: -webkit-box;
    display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
    -moz-box-justify-content: center;
    -ms-flex-pack: center;
	justify-content: center;
	margin-bottom: 2rem;
}

.loading-wrap .loading>i {
	display: block;
	width: 4.4rem;
	height: 4.4rem;
	background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='63' viewBox='0 0 64 63'%3E%3Cg fill='%23006ECD' fill-rule='evenodd'%3E%3Cellipse cx='31.538' cy='3.841' rx='3.846' ry='3.841'/%3E%3Cellipse opacity='.4' cx='31.538' cy='59.15' rx='3.846' ry='3.841'/%3E%3Cellipse opacity='.9' transform='rotate(-30 17.692 7.546)' cx='17.692' cy='7.546' rx='3.845' ry='3.842'/%3E%3Cellipse opacity='.3' transform='rotate(-30 45.385 55.445)' cx='45.385' cy='55.445' rx='3.845' ry='3.842'/%3E%3Cellipse opacity='.8' transform='rotate(-60 7.556 17.668)' cx='7.556' cy='17.668' rx='3.842' ry='3.845'/%3E%3Cellipse opacity='.22' transform='rotate(-60 55.52 45.323)' cx='55.521' cy='45.323' rx='3.842' ry='3.845'/%3E%3Cellipse opacity='.7' transform='rotate(-90 3.846 31.495)' cx='3.846' cy='31.495' rx='3.841' ry='3.846'/%3E%3Cellipse opacity='.17' transform='rotate(-90 59.23 31.495)' cx='59.231' cy='31.495' rx='3.841' ry='3.846'/%3E%3Cellipse opacity='.6' transform='rotate(-120 7.556 45.323)' cx='7.556' cy='45.323' rx='3.842' ry='3.845'/%3E%3Cellipse opacity='.12' transform='rotate(-120 55.52 17.668)' cx='55.521' cy='17.668' rx='3.842' ry='3.845'/%3E%3Cellipse opacity='.5' transform='rotate(-150 17.692 55.445)' cx='17.692' cy='55.445' rx='3.845' ry='3.842'/%3E%3Cellipse opacity='.06' transform='rotate(-150 45.385 7.546)' cx='45.385' cy='7.546' rx='3.845' ry='3.842'/%3E%3C/g%3E%3C/svg%3E") no-repeat center center;
	background-size: 4.3rem;
	-webkit-animation: rotate-image 3s linear infinite;
	animation: rotate-image 3s linear infinite;
	image-rendering: -webkit-optimize-contrast;
}
</style>