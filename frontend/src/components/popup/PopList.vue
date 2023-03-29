<template>
  <div class="popup-wrap show">
    <div class="popup-bg"></div>
    <div class="popup popup-select">
        <div class="popup-box" :class="{'no-head' : popNoHead}">
            <div class="pop-head">
                {{popTitle}}
                <button type="button" class="btn-close" @click="closePoup">팝업닫기</button>
            </div>
            <div class="pop-body">
                <ul class="list-line">
                    <li v-for="(item,idx) in popList" :key="'selectL'+idx" >
                        <input type="radio" name="selectRadio" :id="'select'+idx" :checked="item.lb == popSelectedItem" @click="selectItem(item)">
                        <label :for="'select'+idx">{{item.lb}}</label>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import EventBus from '../../common/EventBus';

export default {
  name: 'PopList',
  props: {
    popNoHead:{
      type: Boolean,
      default: false
    },
    popTitle: {
      type: String,
      default: "",
    },
    popList: {
      type: Array,
      default: () => {
        return []
      },
      required : true
    },
    popSelectedItem: {
      type: String,
      default: ""
    },
    callback : {
      type : Function
    }
  },
  data() {
    return {
    };
  },
  created() {
    // console.log("list   >>> ", this.list);
  },
  computed: {
  },
  watch: {
  },
  mounted() {
    console.log(this);
    console.log("Modal list!!!!  ", this.popList);
    
  },
  methods : {
    selectItem(item){
      this.callback(item);
      setTimeout(function(){
        EventBus.$emit("closePop");
      },200);
    },
    closePoup(){
      EventBus.$emit("closePop");
    }
  }
};
</script>