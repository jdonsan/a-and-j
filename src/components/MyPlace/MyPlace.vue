<template>
  <section class="my-place">
    <div class="my-place-container">
      <h2>El Lugar</h2>
      <h3>Alcala de Henares</h3>
      <img src="@/assets/img/alcala.jpeg" alt="" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
        beatae eaque accusamus cupiditate deleniti provident, optio alias
        incidunt laborum, voluptatibus rem? At aperiam natus perferendis,
        voluptatum error maxime delectus tempore.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
        beatae eaque accusamus cupiditate deleniti provident, optio alias
        incidunt laborum, voluptatibus rem? At aperiam natus perferendis,
        voluptatum error maxime delectus tempore.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MyPlace'
}
</script>

<style lang="scss">
.my-place {
  padding-top: 15rem;
  background: $color-5;
  padding-bottom: 8rem;
  position: relative;

  &::after {
    background-image: url('@/assets/img/curva-1.svg');
    position: absolute;
    content: '';
    background-size: contain !important;
    background-repeat: no-repeat;
    background-position: bottom center;
    height: 100%;
    width: 100%;
    bottom: 1rem;
    z-index: 99;
  }

  &-container {
    width: 95%;
    margin: 0 auto;
  }
}
</style>
