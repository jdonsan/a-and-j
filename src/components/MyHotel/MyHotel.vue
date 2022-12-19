<template>
  <section class="my-hotel">
    <div class="my-hotel-container">
      <h2>La Recepción</h2>
      <h3>Parador de Alcalá de Henares</h3>

      <my-tags-container>
        <my-tag>
          <font-awesome-icon icon="fa-solid fa-clock" /> 14:00 - 16:00
        </my-tag>
      </my-tags-container>

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
import MyTag from '@/components/MyTag/MyTag'
import MyTagsContainer from '@/components/MyTagsContainer/MyTagsContainer'

export default {
  name: 'MyHotel',

  components: {
    MyTag,
    MyTagsContainer
  }
}
</script>

<style lang="scss">
.my-hotel {
  padding-top: 3rem;
  padding-bottom: 0.5rem;
  background: $color-5;
  position: relative;

  &::after {
    background-image: url('@/assets/img/linea-2.svg');
    position: absolute;
    content: '';
    background-size: contain !important;
    background-repeat: no-repeat;
    background-position: bottom center;
    height: 100%;
    width: 100%;
    bottom: -85px;
    z-index: 99;
  }

  &-container {
    width: 95%;
    margin: 0 auto;
  }
}
</style>
