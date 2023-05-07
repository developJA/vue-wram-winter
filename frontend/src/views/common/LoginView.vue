<template>
    <div>
        <div class="login-wrap h-center">
            <div class="inner">
                <div class="login-box-top">
                    <h2 class="top-logo"></h2>
                    <div class="inp-wrap">
                        <div class="inp-box">
                            <label class="inp-label" for="inpId">
                                아이디 <i>*</i>
                            </label>
                            <div class="inp-text">
                                <input type="text" id="inpId" placeholder="아이디를 입력해주세요.">
                            </div>
                        </div>
                        <div class="inp-box">
                            <label class="inp-label" for="inpPw">
                                비밀번호 <i>*</i>
                            </label>
                            <div class="inp-text">
                                <input type="password" id="inpPw" placeholder="비밀번호를 입력해주세요.">
                            </div>
                        </div>
                    </div>
                    <div class="t-align">
                        <div class="left">
                            <span class="chk-box">
                                <input type="checkbox" id="autoLoginCheck" name="labelCheck">
                                <label for="autoLoginCheck">아이디 저장</label>
                            </span>
                        </div>
                    </div>
                    <div class="btn-box">
                        <button type="button" class="btn-txt dft" @click="submit">로그인</button>
                    </div>
                    <div class="mrtb10 none">
                        <button class="">
                            회원이 아니신가요?
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { loginApi } from '../../server/api.js';

export default {
  mounted() {
    const autoLoginYn = this.getStorage('AUTO_LOGIN_YN');
    if (autoLoginYn === 'Y') {
      document.getElementById('autoLoginCheck').checked = true;
      document.getElementById('inpId').value = this.getStorage('USER_ID');
    } else {
      document.getElementById('autoLoginCheck').checked = false;
    }
  },
  methods: {
    moveMain() {
      this.$router.replace({ path: '/home' });
    },
    submit() {
      const _this = this;
      const idVal = document.getElementById('inpId').value;
      const pwVal = document.getElementById('inpPw').value;

      if (idVal.length < 1) {
        _this.$popAlert('아이디를 입력하세요.');
        return false;
      }
      if (pwVal.length < 1) {
        _this.$popAlert('비밀번호를 입력하세요.');
        return false;
      }
      const param = {
        id: idVal,
        pw: pwVal,
      };
      loginApi(param, function (rd) {
        if (rd.status === 'SUCCESS') {
          // 자동로그인 여부 저장
          const autoLoginYn = document.getElementById('autoLoginCheck').checked;
          _this.setStorage('AUTO_LOGIN_YN', autoLoginYn ? 'Y' : 'N');
          _this.setStorage('USER_ID', idVal);

          // 사용자 정보 저장
          const userInfo = rd.data;
          _this.setGlobal('USER_INFO', userInfo);

          _this.moveMain();
        } else {
          _this.$popAlert('로그인에 실패하였습니다.');
        }
      });
    },
  },
};
</script>

<style>

</style>
