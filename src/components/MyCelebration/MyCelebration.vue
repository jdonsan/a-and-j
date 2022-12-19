<template>
  <section class="my-celebration">
    <div class="my-celebration-container">
      <h2>La Celebración</h2>
      <h3>Casino de Alcalá de Henares</h3>
      <img src="@/assets/img/casino.jpeg" alt="" />
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
  name: 'MyCelebration'
}
</script>

<style lang="scss">
.my-celebration {
  padding-top: 1rem;
  background: $color-5;
  padding-bottom: 1rem;

  &-container {
    width: 95%;
    margin: 0 auto;
  }
}
</style>
