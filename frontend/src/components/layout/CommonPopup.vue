<template>
    <div>
      <pop-alert v-if="popAlertActive" :popTitle="title" :popMsg="text" :popBtn="buttonText" :popNoHead="popNoHead" @click="onAleartClicked"></pop-alert>
      <pop-confirm v-if="popConfirmActive" :popTitle="title" :popMsg="text" :popBtn="buttonText" :cancelButtonText="cancelButtonText" :popNoHead="popNoHead" :isLeft="isLeft" @click="onConfirmClicked"></pop-confirm>
      <pop-list v-if="popListActive" @click="onListClicked" :popList="popList" :callback="callback"></pop-list>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import PopAlert from '@/components/popup/PopAlert';
import PopConfirm from '@/components/popup/PopConfirm';
import PopList from '@/components/popup/PopList';
import EventBus from '@/common/EventBus';

export default {
  name: 'Common',
  components: { PopAlert, PopConfirm, PopList },
  props: {

  },
  created() {},
  mounted() {
    EventBus.$off('showAlert');
    EventBus.$on('showAlert', (param, callback) => {
      console.log('alert common popup');
      this.text = this.isHtml(param.text) ? param.text : `<p>${param.text}</p>`;
      this.popNoHead = param.isNoHead || false;
      this.title = param.title || '알림';
      this.buttonText = param.buttonText || '확인';
      this.popAlertActive = true;
      this.callback = callback || null;
    });

    EventBus.$off('showConfirm');
    EventBus.$on('showConfirm', (param) => {
      this.title = param.title || '알림';
      this.popNoHead = param.isNoHead || false;
      this.text = this.isHtml(param.text) ? param.text : `<p>${param.text}</p>`;
      this.buttonText = param.buttonText || '확인';
      this.cancelButtonText = param.cancelButtonText || '취소';
      this.isLeft = param.isLeft || false;
      this.confirmParam = param;
      this.popConfirmActive = true;
    });

    EventBus.$off('showList');
    EventBus.$on('showList', (param, callback) => {
      console.log('list common popup');
      this.popList = param.list || [];
      this.popListActive = true;
      this.callback = callback || null;
    });

    EventBus.$off('closePop');
    EventBus.$on('closePop', () => {
      const chk = this.popAlertActive || this.popConfirmActive || this.popListActive;
      if (chk) this.popAlertActive = this.popConfirmActive = this.popListActive = false;
      console.log(chk);
      EventBus.$emit('closePopCb', !chk);
    });
  },
  computed: {
    ...mapState({
    }),
  },
  watch: {},
  data() {
    return {
      popAlertActive: false,
      popConfirmActive: false,
      popListActive: false,
      confirmParam: null,
      title: '',
      text: '',
      buttonText: '',
      popNoHead: false,
      isLeft: false,
      popMileageActive: false,
      popConfirmErrorActive: false,
      popList: [],
    };
  },
  methods: {
    onConfirmClicked(isTrueOrFasle) {
      EventBus.$emit('CBConfirm', isTrueOrFasle);
      this.popConfirmActive = false;
    },
    onAleartClicked() {
      EventBus.$emit('CBAlert');
      this.popAlertActive = false;
    },
    onListClicked(cbData) {
      /* 리스트 선택 시 반환 값
      {
          code : this.value,
        }  */

      EventBus.$emit('CBList', cbData);
      this.popListActive = false;
    },

    isHtml(content) {
      let content1 = '';
      content1 = content.replaceAll('<p>', '__HTMLTAG__');
      if (content1.lastIndexOf('__HTMLTAG__') > -1) return true;
      return false;
    },
  },
};
</script>

<style scoped>

</style>
