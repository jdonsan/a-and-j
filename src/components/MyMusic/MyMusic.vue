<template>
  <div class="my-music" @click="togglePlay(!isPlay)">
    <div class="my-music-container">
      <font-awesome-icon
        :icon="'fa-solid ' + (isPlay ? 'fa-volume-high' : 'fa-volume-xmark')"
      />
      <audio ref="myAudio" src="@/assets/audio/music.mp3" autoplay loop></audio>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyMusic',

  data() {
    return {
      isPlay: true
    }
  },

  methods: {
    togglePlay(isPlaying) {
      this.isPlay ? this.$refs.myAudio.pause() : this.$refs.myAudio.play()
      this.isPlay = isPlaying
    }
  }
}
</script>

<style lang="scss">
.my-music {
  width: 80px;
  height: 80px;
  position: fixed;
  z-index: 999;
  bottom: 0;
  right: 0;
  @include flex-center();

  &-container {
    width: 48px;
    height: 48px;
    border-radius: 100%;
    background: rgba($color-1, 0.3);
    @include flex-center();
    color: $color-1;
    font-size: 16px;
  }
}
</style>
