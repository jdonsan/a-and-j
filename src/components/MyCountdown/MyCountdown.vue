<template>
  <section class="my-countdown">
    <div class="my-countdown-container">
      <h3>Faltan</h3>

      <div class="my-countdown-clock">
        <div class="my-countdown-clock-col">
          <span class="number">39</span>
          <span class="time">días</span>
        </div>

        <div class="my-countdown-clock-col">
          <span class="number">18</span>
          <span class="time">hs</span>
        </div>

        <div class="my-countdown-clock-col">
          <span class="number">38</span>
          <span class="time">min</span>
        </div>

        <div class="my-countdown-clock-col">
          <span class="number">20</span>
          <span class="time">seg</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MyCountdownContainer'
}
</script>

<style lang="scss" scoped>
.my-countdown {
  margin-top: 2rem;

  &-container {
    background: url('@/assets/img/contador.png') center center no-repeat;
    background-size: contain;
    z-index: 99;
    width: 100%;
    max-width: 380px;
    max-height: 380px;
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
