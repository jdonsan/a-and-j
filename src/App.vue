<template>
  <div id="app">
    <my-cover />
    <my-countdown />
    <my-place />
    <my-hotel />
    <my-preparation />
    <my-ceremony />
    <my-celebration />
    <my-party />
    <my-breakfast />
    <my-music />
  </div>
</template>

<script>
import MyCover from './components/MyCover/MyCover'
import MyCountdown from './components/MyCountdown/MyCountdown'
import MyPlace from './components/MyPlace/MyPlace'
import MyHotel from './components/MyHotel/MyHotel'
import MyPreparation from './components/MyPreparation/MyPreparation'
import MyCeremony from './components/MyCeremony/MyCeremony'
import MyCelebration from './components/MyCelebration/MyCelebration'
import MyParty from './components/MyParty/MyParty'
import MyBreakfast from './components/MyBreakfast/MyBreakfast'
import MyMusic from './components/MyMusic/MyMusic'

export default {
  name: 'App',

  components: {
    MyCover,
    MyCountdown,
    MyPlace,
    MyHotel,
    MyPreparation,
    MyCeremony,
    MyCelebration,
    MyParty,
    MyBreakfast,
    MyMusic
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
  background-attachment: fixed;
  background-position: 100%;

  div,
  section,
  article {
    box-sizing: border-box;
  }
}

h2 {
  font-family: $font-1;
  font-weight: $weight-font-regular;
  color: $color-1;
  width: 100%;
  font-size: 60px;
  line-height: 60px;
  margin-bottom: 0;
  text-align: center;
}

p {
  font-family: $font-2;
  font-weight: $weight-font-regular;
  color: $color-1;
  width: 100%;
  font-size: 20px;
  line-height: 1.3;
  margin: 1rem 0;
}

h3 {
  font-family: $font-2;
  text-align: center;
  font-size: 20px;
  color: $color-2;
}

img {
  width: 100%;
  margin: 1rem 0;
}

#app {
}
</style>
