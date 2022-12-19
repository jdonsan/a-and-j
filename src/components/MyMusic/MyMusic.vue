<template>
  <div ref="myAudio" class="my-music" @click="togglePlay(!isPlay)">
    <div class="my-music-container">
      <font-awesome-icon icon="fa-solid fa-music" />
      <audio src="@/assets/audio/music.mp3" autoplay loop></audio>
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
    togglePlay() {
      console.log(this.$refs)
      //  isPlaying ? this.$refs.myAudio.pause() : this.$refs.myAudio.play()
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
    color: $color-5;
  }
}
</style>
