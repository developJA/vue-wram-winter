<template>
    <div class="popup-wrap show">
        <div class="popup-bg"></div>
        <div class="popup">
            <!-- 타이틀 없을 경우 no-head -->
            <div class="popup-box" :class="{'no-head' : popNoHead}">
                <div class="pop-head">{{popTitle}}</div>
                <div class="pop-body" v-html="popMsg">
                    <p>내용이 출력됩니다.</p>
                    <p><strong class="bold">중요한 내용</strong>표시</p>
                    <p class="sub">서브텍스트</p>

                <!-- MP010302001SP ->
                    <p>사용자 계정정보 <strong class="bold red">5</strong>회 불일치로 <br>접속이 제한됩니다.</p>
                    <p>비밀번호 초기화를 진행하거나 <br>시스템 관리자에게 문의주세요.</p>

                    <button type="button" class="btn line">문의</button>
                    <button type="button" class="btn">비밀번호 초기화</button>
                <!- //MP010302001SP -->
                </div>
                <div class="pop-foot">
                    <p class="btn-wrap">
                        <button type="button" class="btn line" @click="popClick(false)">{{cancelButtonText}}</button>
                        <button type="button" class="btn" @click="popClick(true)">{{popBtn}}</button>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PopConfirm',
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
      default: "확인",
    },
    cancelButtonText: {
      type: String,
      default: "취소",
    },
    isLeft : {
      type: Boolean,
      default : false
    }
  },
  data() {
    return {
      PopConfirm: true,
    };
  },
  methods : {
    popClick: function(isTrueOrFalse) {
      this.$emit("click", isTrueOrFalse) ;
    },
  }
};
</script>