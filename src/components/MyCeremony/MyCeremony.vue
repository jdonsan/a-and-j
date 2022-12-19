<template>
  <section class="my-ceremony">
    <div class="my-ceremony-container">
      <h2>La Ceremonia</h2>
      <h3>Ayuntamiento de Alcalá de Henares</h3>
      <img src="@/assets/img/ayuntamiento.png" alt="" />
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
  name: 'MyCeremony'
}
</script>

<style lang="scss">
.my-ceremony {
  padding-top: 6rem;
  padding-bottom: 1rem;
  position: relative;

  &::before {
    background-image: url('@/assets/img/linea-3.svg');
    position: absolute;
    content: '';
    background-repeat: no-repeat;
    background-position: top center;
    height: 100%;
    width: 100%;
    top: -1px;
  }

  &-container {
    width: 95%;
    margin: 0 auto;
  }
}
</style>
