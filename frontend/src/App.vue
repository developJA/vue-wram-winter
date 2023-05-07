<template>
  <div id="app">
    <the-layout>
      <router-view />
    </the-layout>
    <common-popup></common-popup>
    <indicator-layout></indicator-layout>
  </div>
</template>

<script>
import TheLayout from './layouts/TheLayout.vue';
import CommonPopup from './components/layout/CommonPopup.vue';
import IndicatorLayout from './layouts/IndicatorLayout.vue';

export default {
  name: 'App',
  components: {
    TheLayout,
    CommonPopup,
    IndicatorLayout,
  },
  mounted() {
    this.Common.resizeContents();
  },
};
</script>

<style>

</style>
