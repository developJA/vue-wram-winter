import { mapGetters } from 'vuex';

export default {

  data() {
    return {

    };
  },

  computed: {
    ...mapGetters({
      // getLoginSession: 'userAuth/getCach                                                                                                                                                                                                                                                                   edUser',
    }),
  },

  mounted() {
    // this.target = document.querySelector('.scrollBox');
    // if (this.target != null) {
    //   this.target.addEventListener('scroll', this.handleScroll);
    // }
  },

  methods: {
    // global 데이터 저장
    setGlobal(key, value) {
      if (isMorpheus()) {
        M.data.global(key, value);
      } else {
        sessionStorage.setItem(key, JSON.stringify(value));
      }
    },
    // global 데이터 가져오기
    getGlobal(key) {
      if (isMorpheus()) {
        return M.data.global(key);
      }else{
        return JSON.parse(sessionStorage.getItem(key));
      }
      // return this.$store.getters[`global/${key}`];
    },
    // global 데이터 삭제
    removeGlobal(key) {
      if (isMorpheus()) {
        M.data.removeGlobal(key);
      } else {
        sessionStorage.removeItem(key);
        // this.$store.commit(`global/${key}`, '');
      }
    },

    // storage 데이터 저장
    setStorage(key, value) {
      if (isMorpheus()) {
        M.data.storage(key, value);
      } else {
        localStorage.setItem(key, JSON.stringify(value));
        // this.$store.commit(`storage/${key}`, value);
      }
    },
    // storage 데이터 가져오기
    getStorage(key) {
      if (isMorpheus()) {
        return M.data.storage(key);
      }else{
        return JSON.parse(localStorage.getItem(key));
      }
      // return this.$store.getters[`storage/${key}`];
    },
    // storage 데이터 삭제
    removeStorage(key) {
      if (isMorpheus()) {
        M.data.removeStorage(key);
      } else {
        localStorage.removeItem(key);
        // this.$store.commit(`storage/${key}`, '');
      }
    },

  },
};
