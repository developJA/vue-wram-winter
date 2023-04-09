<template>
  <div id="app">
    <TheLayout>
      <router-view />
    </TheLayout>
    <common-popup></common-popup>
  </div>
</template>

<script>
import CommonPopup from "./components/layout/CommonPopup.vue"
import TheLayout from "./layouts/TheLayout";

export default {
  name: 'App',
  components: {
    TheLayout,
    CommonPopup,
  }
};
</script>

<style>

</style>
