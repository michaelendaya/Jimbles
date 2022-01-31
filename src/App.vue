<template>
  <v-app id="app">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style lang="scss" >
@import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500&display=swap');
.main {
  background: #2c2f33;
}
#app {
font-family: 'Ubuntu Mono', monospace;
}
</style>
