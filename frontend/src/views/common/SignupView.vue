<template>
  <div>
    <h2>회원가입</h2>
    <form>
        <div>
        <label for="username">아이디:</label>
        <input type="text" id="id" v-model="id" />
      </div>
      <div>
        <label for="username">사용자 이름:</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div>
        <label for="email">이메일:</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div>
        <label for="password">비밀번호:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <div>
        <button type="submit" @click.prevent="submitForm">회원가입</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    submitForm() {
      // 회원가입 폼 제출 로직
    },
  },
};
</script>
