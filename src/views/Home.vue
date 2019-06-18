<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'home',
  components: {
    HelloWorld,
  },
  created() {
    this.$$store.commit('setToken', '1');
    const a = this.$$store.getters.isLogin;
    const a2 = this.$$store.state.auth.token;
    this.$$store.dispatch('updateAuthData', 1);
  },
});
</script>
