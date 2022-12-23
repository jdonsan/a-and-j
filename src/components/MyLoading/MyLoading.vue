<template>
  <div class="my-loading">
    <div class="rhombus">
      <div class="circle1"></div>
      <div class="circle2"></div>
    </div>
    <span>Cargando</span>
  </div>
</template>

<script>
export default {
  name: 'MyLoading'
}
</script>

<style lang="scss">
.my-loading {
  @include flex-center;
  flex-direction: column;

  span {
    text-align: center;
    color: $color-5;
    font-family: $font-2;
    padding: 1rem 0 0.5rem;
    font-size: 1rem;
    font-weight: $weight-font-bold;
    display: inline-block;
    margin: 0 auto;
  }

  .rhombus {
    height: 70px;
    width: 70px;
  }

  .rhombus:before {
    content: '';
    position: absolute;
    background: $color-2;
    height: 40px;
    width: 40px;
    z-index: 0;
    margin-top: 15px;
    margin-left: 15px;
    transform: rotate(45deg);
  }

  .rhombus .circle1 {
    content: '';
    position: absolute;
    background: $color-2;
    height: 40px;
    width: 40px;
    z-index: 1;
    border-radius: 50%;
    animation-duration: 2s;
    animation-name: change1;
    animation-iteration-count: infinite;
    /*animation-direction: alternate;*/
  }

  .rhombus .circle2 {
    content: '';
    position: absolute;
    background: $color-2;
    height: 40px;
    width: 40px;
    z-index: 1;
    margin-left: 30px;
    border-radius: 50%;
    animation-duration: 2s;
    animation-name: change2;
    animation-iteration-count: infinite;
  }

  @keyframes pump {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }

  @keyframes change1 {
    0%,
    25% {
      margin-top: 0px;
      margin-left: 0px;
    }
    50%,
    75% {
      margin-top: 30px;
      margin-left: 30px;
    }
  }

  @keyframes change2 {
    25%,
    50% {
      margin-top: 30px;
      margin-left: 0px;
    }
    75%,
    100% {
      margin-top: 0px;
      margin-left: 30px;
    }
  }
}
</style>
