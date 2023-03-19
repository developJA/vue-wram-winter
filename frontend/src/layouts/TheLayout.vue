<template>
  <component :is="$route.meta.layout || 'EmptyLayout'" :scrollTop="scrollTop">
    <slot></slot>
  </component>
</template>

<script>
import DefaultLayout from "./DefaultLayout";
import EmptyLayout from "./EmptyLayout";

export default {
  name: "TheLayout",
  components: {
    DefaultLayout,
    EmptyLayout
  },
  props: {
    scrollTop : {
      type: Number
    },
  },
};
</script>
