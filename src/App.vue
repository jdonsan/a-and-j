<template>
  <div id="app">
    <my-cover />
    <my-countdown />
  </div>
</template>

<script>
import MyCover from './components/MyCover/MyCover'
import MyCountdown from './components/MyCountdown/MyCountdown'

export default {
  name: 'App',

  components: {
    MyCover,
    MyCountdown
  }
}
</script>

<style lang="scss">
body,
html {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  background: url('@/assets/img/bg.webp');
  background-attachment: cover;
  background-position: 100%;

  div,
  section,
  article {
    box-sizing: border-box;
  }
}

#app {
}
</style>
