<template>
    <div>
      <Header></Header>
      <router-view class="container"></router-view>
    </div>
  </template>
  
  <script>
  import Header from '../components/layout/Header.vue';
  
  export default {
    name: "EmptyLayout",
    components: { 
      Header,
    },
  };
</script>
  