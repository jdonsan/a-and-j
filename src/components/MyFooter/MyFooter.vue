<template>
  <footer class="my-footer">
    <h3>Ana ❤ Jose</h3>
    <h3>2023</h3>

    <div class="my-decor">
      <img class="my-decor-1" src="@/assets/img/decor-1.png" alt="" />
      <img class="my-decor-2" src="@/assets/img/decor-2.png" alt="" />
      <img class="my-decor-3" src="@/assets/img/decor-3.png" alt="" />
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MyFooter'
}
</script>

<style lang="scss">
.my-footer {
  position: relative;
  padding-top: 2rem;
  padding-bottom: 10rem;
  margin-bottom: -2rem;
  background: $color-5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    color: $color-2;
    padding-bottom: 0.4rem;
  }
}

.my-decor {
  width: 100%;
  margin: 0 auto;

  img {
    $width: 15rem;

    position: absolute;
    width: $width;
    bottom: -0.5rem;
    right: calc(50% - ($width / 2));
    transform: rotate(180deg);
  }
}
</style>
