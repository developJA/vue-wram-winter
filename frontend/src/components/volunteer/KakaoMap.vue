<template>
	<div>
    <div id="staticMap">
    </div>
	</div>
</template>

<script>
export default {
  name: 'kakaoMap',
  components: {

  },
  props: {

  },
  data() {
    return {
      map: null,
      myLocation: null,
    };
  },
  created() {
  },
  watch: {

  },
  mounted() {
    // map 영역 크기
    const w = window.innerWidth - 20;
    const h = w / 4 * 5;
    document.getElementById('staticMap').style.width = `${w}px`;
    document.getElementById('staticMap').style.height = `${h}px`;

    const script = document.createElement('script');
    console.log('process.env.VUE_APP_KAKAOMAP_KEY   >>  ', process.env.VUE_APP_KAKAOMAP_KEY);
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.VUE_APP_KAKAOMAP_KEY}`;

    script.onload = () => kakao.maps.load(this.initMap);

    document.head.appendChild(script);
  },
  methods: {
    initMap() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.myLocation = position.coords;
        console.log('loc  >> ', this.myLocation);
        const staticMapContainer = document.getElementById('staticMap');

        const staticMapOption = {
          center: new kakao.maps.LatLng(this.myLocation.latitude, this.myLocation.longitude), // 이미지 지도의 중심좌표
          level: 5, // 이미지 지도의 확대 레벨
        };
        this.map = new kakao.maps.Map(staticMapContainer, staticMapOption); // 이미지 지도를 생성
      });
    },

  },
  watch: {

  },
};
</script>

<style scoped>
</style>
