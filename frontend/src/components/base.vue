<template>
  <div>{{helloWrold}}</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'ComponentName',
  data() {
    return {
    };
  },
  computed: {
    ...mapState({}),
    ...mapGetters({}),
  },
  methods: {
    ...mapMutations([]),
    ...mapActions([]),
  },
  watch: {

  },
};
</script>
<!--
  scope 미선언시 global 영역으로 css가 적용됩니다.
  선언할 경우 component 안에서만 적용됩니다.
 -->
<style scoped>

</style>
