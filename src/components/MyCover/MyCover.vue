<template>
  <section class="my-cover">
    <div class="my-cover-decor">
      <img class="my-cover-decor-1" src="@/assets/img/decor-1.png" alt="" />
      <img class="my-cover-decor-2" src="@/assets/img/decor-2.png" alt="" />
      <img class="my-cover-decor-3" src="@/assets/img/decor-3.png" alt="" />
    </div>
    <div class="my-cover-container">
      <div class="my-cover-content">
        <span class="my-cover-date">06.05.2023</span>
        <h1 class="my-cover-names">
          Ana
          <br />
          <span>&</span>
          <br />
          Jose
        </h1>
        <span class="my-cover-line"></span>
        <p class="my-cover-slogan">
          <img src="@/assets/img/comilla-apertura.svg" alt="" />
          <br />
          Bienvenidos al fin de semana de nuestra boda
          <br />
          <img src="@/assets//img/comilla-cierre.svg" alt="" />
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MyCover'
}
</script>

<style lang="scss" scoped>
.my-cover {
  text-align: center;

  &-decor {
    width: 100%;
    margin: 0 auto;

    img {
      $width: 15rem;

      position: absolute;
      width: $width;
      top: -4rem;
      right: calc(50% - ($width / 2));
    }
  }

  &-content {
    width: 95%;
    margin: 0 auto;
    max-width: 768px;
    margin-top: 7rem;
  }

  &-date {
    font-size: 25px;
    margin-bottom: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: $font-2;

    &::after,
    &::before {
      border-top: 1px solid $color-2;
      content: '';
      display: block;
      width: 100%;
      margin: 0rem 2rem;
    }
  }

  &-names {
    font-size: 100px;
    color: $color-1;
    font-family: $font-1;
    font-weight: $weight-font-regular;
    line-height: 69px;

    span {
      font-size: 35px;
      font-family: $font-2;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      background: $color-2;
      color: $color-4;
      border-radius: 100%;
      margin-bottom: 15px;
    }
  }

  &-line {
    display: block;
    border-top: 1px solid $color-2;
    margin: 0 auto;
    margin-top: 2rem;
    width: 50%;
  }

  &-slogan {
    color: $color-1;
    font-family: $font-2;
    font-weight: $weight-font-regular;
    font-size: 22px;
    line-height: 1.5;
    margin-top: 25px;

    img {
      width: 30px;
      margin: 10px 0;
    }
  }
}
</style>
