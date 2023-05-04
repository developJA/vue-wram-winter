<template>
  <div id="app">
    <TheLayout>
      <router-view />
    </TheLayout>
    <common-popup></common-popup>
    <indicator-layout></indicator-layout>
  </div>
</template>

<script>
import CommonPopup from "./components/layout/CommonPopup.vue"
import IndicatorLayout from './layouts/IndicatorLayout.vue';
import TheLayout from "./layouts/TheLayout";

export default {
  name: 'App',
  components: {
    TheLayout,
    CommonPopup,
    IndicatorLayout,
  },
  mounted() {
    this.Common.resizeContents();
  }
};
</script>

<style>

</style>
