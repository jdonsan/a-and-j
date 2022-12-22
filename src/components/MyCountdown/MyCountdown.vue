<template>
  <section class="my-countdown">
    <div class="my-countdown-container">
      <h3>Faltan</h3>

      <div class="my-countdown-clock">
        <div class="my-countdown-clock-col">
          <span class="number">{{ days }}</span>
          <span class="time">días</span>
        </div>

        <div class="my-countdown-clock-col">
          <span class="number">{{ hours }}</span>
          <span class="time">hs</span>
        </div>

        <div class="my-countdown-clock-col">
          <span class="number">{{ minutes }}</span>
          <span class="time">min</span>
        </div>

        <div class="my-countdown-clock-col">
          <span class="number">{{ seconds }}</span>
          <span class="time">seg</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MyCountdownContainer',

  data() {
    return {
      isToday: false,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  },

  mounted() {
    this.run()
  },

  methods: {
    run() {
      const countDownDate = new Date('May 6, 2023 00:00:01').getTime()
      const interval = setInterval(() => {
        const now = new Date().getTime()
        const distance = countDownDate - now

        this.days = Math.floor(distance / (1000 * 60 * 60 * 24))
        this.hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000)

        if (distance < 0) {
          clearInterval(interval)
          this.isToday = true
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.my-countdown {
  margin-top: 2rem;
  margin-bottom: 12rem;

  &-container {
    background: url('@/assets/img/contador.png') center center no-repeat;
    background-size: contain;
    position: absolute;
    left: calc(50% - 160px);
    z-index: 99;
    width: 100%;
    max-width: 320px;
    max-height: 320px;
    min-width: 320px;
    min-height: 320px;
    margin: 0 auto;
    @include flex-center();
    flex-direction: column;

    h3 {
      font-family: $font-2;
      font-weight: $weight-font-regular;
      color: $color-2;
      width: 100%;
      text-align: center;
      font-weight: 300;
      font-size: 40px;
    }
  }

  &-clock {
    font-family: $font-2;
    display: flex;
    margin: 1rem 0;

    &-col {
      padding: 0 0.4rem;
      border-right: 1px solid #ccc;

      &:last-child {
        border-right: 0px;
      }

      span {
        display: block;
        text-align: center;
      }

      .number {
        font-size: 30px;
        font-weight: $weight-font-bold;
        color: $color-1;
        margin-bottom: 0.5rem;
      }

      .time {
        font-size: 18px;
        font-weight: $weight-font-regular;
        color: $color-2;
      }
    }
  }
}
</style>
