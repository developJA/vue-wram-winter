<template>
  <div>
    <Header></Header>
    <router-view class="scroll-wrap"></router-view>
    <tab-footer></tab-footer>
  </div>
</template>

<script>
import Header from '../components/layout/Header.vue';
import TabFooter from '../components/layout/TabFooter.vue';

export default {
  name: "DefaultLayout",
  components: { 
    Header,
    TabFooter,
  },
  methods : {
  }
};
</script>
