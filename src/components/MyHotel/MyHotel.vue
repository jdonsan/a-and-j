<template>
  <section class="my-hotel">
    <div class="my-hotel-container">
      <h2>La Recepción</h2>
      <h3>Parador de Alcalá de Henares</h3>
      <img src="@/assets/img/parador.jpg" alt="" />
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
  name: 'MyHotel'
}
</script>

<style lang="scss">
.my-hotel {
  padding-top: 4rem;
  padding-bottom: 5rem;
  background: $color-5;
  position: relative;

  &-container {
    width: 95%;
    margin: 0 auto;
  }
}
</style>
