<template>
  <div class="default">
    <Header></Header>
    <router-view class="container"></router-view>
    <tab-footer></tab-footer>
  </div>
</template>

<script>
import Header from '../components/layout/Header.vue';
import TabFooter from '../components/layout/TabFooter.vue';

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    TabFooter,
  },
  methods: {
  },
};
</script>
