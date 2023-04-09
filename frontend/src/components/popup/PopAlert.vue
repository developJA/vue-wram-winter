<template>
    <div class="popup-wrap show">
        <div class="popup-bg"></div>

        <div class="popup" @click.stop="popClick(true)">
            <div class="popup-box" :class="{'no-head' : popNoHead}">
                <div class="pop-head">{{ popTitle }}</div>
                <div class="pop-body" v-html="popMsg">
                    
                </div>
                <div class="pop-foot">
                    <p class="btn-wrap">
                        <button type="button" class="btn" @click.stop="popClick(true)">{{popBtn}}</button>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "PopAlert",
  props: {
    popNoHead:{
      type: Boolean,
      default: false
    },
    popTitle: {
      type: String,
      default: "",
    },
    popMsg: {
      type: String,
      default: "",
    },
    popBtn: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      PopAlert: true,
    };
  },
  mounted(){
    console.log("Modal alert");
  },
  methods: {
    popClick: function(submit) {
      this.$emit("click", submit);
    },
  },
};
</script>