<template>
  <div id="app">
    <div v-if="!start" class="my-loading-page">
      <div class="my-loading-page-container"></div>
      <div class="my-loading-page-background"></div>
      <div class="my-loading-page-center">
        <my-loading v-if="loading" />
        <button v-else @click="start = true">Empezar</button>
      </div>
    </div>
    <div v-else>
      <my-menu />
      <my-cover />
      <my-countdown />
      <my-place />
      <my-hotel />
      <my-preparation />
      <my-ceremony />
      <my-photos />
      <my-celebration />
      <my-party />
      <my-breakfast />
      <my-tour />
      <my-lunch />
      <my-farewell />
      <my-footer />
      <my-music />
    </div>
  </div>
</template>

<script>
import MyMenu from './components/MyMenu/MyMenu'
import MyCover from './components/MyCover/MyCover'
import MyCountdown from './components/MyCountdown/MyCountdown'
import MyPlace from './components/MyPlace/MyPlace'
import MyHotel from './components/MyHotel/MyHotel'
import MyPreparation from './components/MyPreparation/MyPreparation'
import MyCeremony from './components/MyCeremony/MyCeremony'
import MyPhotos from './components/MyPhotos/MyPhotos'
import MyCelebration from './components/MyCelebration/MyCelebration'
import MyParty from './components/MyParty/MyParty'
import MyBreakfast from './components/MyBreakfast/MyBreakfast'
import MyTour from './components/MyTour/MyTour'
import MyLunch from './components/MyLunch/MyLunch'
import MyFarewell from './components/MyFarewell/MyFarewell'
import MyFooter from './components/MyFooter/MyFooter'
import MyMusic from './components/MyMusic/MyMusic'
import MyLoading from './components/MyLoading/MyLoading'

export default {
  name: 'App',

  components: {
    MyMenu,
    MyCover,
    MyCountdown,
    MyPlace,
    MyHotel,
    MyPreparation,
    MyCeremony,
    MyPhotos,
    MyCelebration,
    MyParty,
    MyBreakfast,
    MyTour,
    MyLunch,
    MyFarewell,
    MyFooter,
    MyMusic,
    MyLoading
  },

  data() {
    return {
      start: false,
      loading: true
    }
  },

  mounted() {
    setTimeout(() => (this.loading = false), 4000)
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
  border-radius: 1rem;
}

button {
  min-width: 200px;
  border: 0;
  display: inline-block;
  background: $color-2;
  color: $color-5 !important;
  font-family: $font-2;
  font-weight: $weight-font-regular;
  padding: 1rem;
  border-radius: 5rem;
  margin: 0.5rem;
  text-decoration: none;
}

b {
  color: $color-1;
  font-weight: bold;
}

#app {
  .my-loading-page {
    background: $color-1;
    height: 100vh;
    width: 100vw;
    position: relative;

    &-container {
      width: 100%;
      height: 100%;
      background: url('@/assets/img/bg.jpg');
      background-attachment: fixed;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      z-index: 1;
    }
    &-background {
      width: 100%;
      height: 100%;
      background: $color-1;
      position: absolute;
      z-index: 2;
      opacity: 0.8;
    }
    &-center {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 3;
      @include flex-center();
      margin-top: -12rem;
    }
  }
}
</style>
