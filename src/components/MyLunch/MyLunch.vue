<template>
  <section class="my-lunch">
    <div class="my-lunch-container">
      <h2>La Comida</h2>
      <h3>El Figón de Antón</h3>

      <my-container-center>
        <my-tag>
          <font-awesome-icon icon="fa-solid fa-clock" /> 14:00 - 16:00
        </my-tag>
      </my-container-center>

      <img src="@/assets/img/lunch.jpg" alt="" />
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

      <my-container-center>
        <my-link href="https://goo.gl/maps/oZM84GggTPBXDUvN6" target="_blank">
          <font-awesome-icon icon="fa-solid fa-location-dot" /> Ver Ubicación
        </my-link>
        <my-link href="https://elfigondeanton.es/" target="_blank">
          <font-awesome-icon icon="fa-solid fa-circle-info" /> Saber Más
        </my-link>
      </my-container-center>
    </div>
  </section>
</template>

<script>
import MyContainerCenter from '@/components/MyContainerCenter/MyContainerCenter'
import MyTag from '@/components/MyTag/MyTag'
import MyLink from '@/components/MyLink/MyLink'

export default {
  name: 'MyLunch',

  components: {
    MyContainerCenter,
    MyTag,
    MyLink
  }
}
</script>

<style lang="scss">
.my-lunch {
  padding-top: 5rem;
  padding-bottom: 4rem;
  position: relative;
  background: $color-5;

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

  &::after {
    background-image: url('@/assets/img/linea-4.svg');
    position: absolute;
    content: '';
    background-repeat: no-repeat;
    background-position: bottom center;
    height: 100%;
    width: 100%;
    bottom: -2px;
    z-index: 99;
  }

  &-container {
    width: 95%;
    max-width: 768px;
    margin: 0 auto;
    z-index: 999;
    position: relative;
  }
}
</style>
