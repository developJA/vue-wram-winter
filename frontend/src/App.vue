<template>
    <div id="app">
    <Header></Header>
    <router-view class="scroll-wrap"></router-view>
    <tab-footer></tab-footer>
    <common-popup></common-popup>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'
import TabFooter from './components/layout/TabFooter.vue';
import CommonPopup from "./components/layout/CommonPopup";

export default {
  name: 'App',
  components: {
    Header,
    TabFooter,
    CommonPopup,
  }
};
</script>

<style>

</style>
