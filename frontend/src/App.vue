<template>
    <div id="app">
    <TheLayout>
      <common-popup></common-popup>
      <router-view />
    </TheLayout>
    <!-- <Header></Header>
    <router-view class="scroll-wrap"></router-view>
    <tab-footer></tab-footer>
    <common-popup></common-popup> -->
  </div>
</template>

<script>
// import Header from './components/layout/Header.vue'
// import TabFooter from './components/layout/TabFooter.vue';
// import CommonPopup from "./components/layout/CommonPopup";

import TheLayout from "./layouts/TheLayout";
import CommonPopup from "./components/layout/CommonPopup.vue";

export default {
  name: 'App',
  components: {
    TheLayout,
    CommonPopup,
    // Header,
    // TabFooter,
    // CommonPopup,
  }
};
</script>

<style>

</style>
