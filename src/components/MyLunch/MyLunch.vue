<template>
  <section class="my-lunch">
    <div class="my-lunch-container">
      <h2>La Comida</h2>
      <h3>El Figón de Antxón</h3>

      <my-container-center>
        <my-tag>
          <font-awesome-icon icon="fa-solid fa-clock" /> 15:00 - 17:00
        </my-tag>
      </my-container-center>

      <img src="@/assets/img/lunch.jpg" alt="" />
      <p>
        Por último, y para rematar, terminaremos el fin de semana comiendo en
        este Figón Asturiano, un restaurante muy conocido y valorado por la
        zona.
      </p>
      <p>
        Nunca vienen mal un poco de fabes y/o cachopo (o lo que queráis) después
        de una actividad cultura, pero no hace falta (o sí) que os digamos que
        si decidís que ya han sido demasiadas emociones para vosotros y vosotras
        y preferis ir a vuestro rollo o si este segundo día os sobra, nos
        aviséis para poder cancelar con tiempo las reservas oportunas :)
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
