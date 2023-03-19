<template>
  <div>
    <Header></Header>
    <router-view class="scroll-wrap"></router-view>
    <tab-footer></tab-footer>
  </div>
</template>

<script>
// import Header from "@/components/layout/Header";
import Header from '../components/layout/Header.vue';
import TabFooter from '../components/layout/TabFooter.vue';
import CommonPopup from "../components/layout/CommonPopup";

export default {
  name: "DefaultLayout",
  components: { 
    Header,
    TabFooter,
    CommonPopup,
  },
  // props: {
  //   scrollTop : {
  //     type: Number,
  //     default : 0
  //   },
  // },
  // data() {
  //   return {
  //     isChange: false,
  //   };
  // },
  // watch: {
  //   scrollTop(af,bf){
  //     if(af > bf){
  //       this.isChange = true;
  //     }
  //   }
  // },
  // computed : {
  //   headerClass(){
  //     if(!this.isChange) return "";
  //     else{
  //       return this.scrollTop > 0 ? "stickyon" : "stickyoff"
  //     }
  //   }
  // },
  methods : {
  }
};
</script>
