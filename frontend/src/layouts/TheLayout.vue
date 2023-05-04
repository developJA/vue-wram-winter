<template>
  <component :is="$route.meta.layout || 'EmptyLayout'" :scrollTop="scrollTop">
    <slot></slot>
  </component>
</template>

<script>
import DefaultLayout from "./DefaultLayout";
import EmptyLayout from "./EmptyLayout";
import FrameLayout from "./FrameLayout";

export default {
  name: "TheLayout",
  components: {
    DefaultLayout,
    EmptyLayout,
    FrameLayout
  },
  props: {
    scrollTop : {
      type: Number
    },
  },
};
</script>
