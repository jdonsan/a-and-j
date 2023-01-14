<template>
  <section class="my-breakfast">
    <div class="my-breakfast-container">
      <div class="next-day">
        <h2>Y al día siguiente...</h2>
      </div>

      <h2>El Desayuno</h2>
      <h3>Parador de Alcalá de Henares</h3>

      <my-container-center>
        <my-tag>
          <font-awesome-icon icon="fa-solid fa-clock" /> 08:00 - 10:00
        </my-tag>
      </my-container-center>

      <img src="@/assets/img/breakfast.jpg" alt="" />
      <p>
        Después de una noche de copas y bailoteos, siempre viene bien un buen
        desayuno. Vuestra reserva en el Parador contará con un desayuno de tipo
        buffet.
      </p>
      <p>
        Este es un momento para vosotros y vosotras, desayunad con quien os
        apetezca: vuestra pareja, vuestros amigos o vuestra familia. Estad a
        vuestra bola. Desayunad a la hora que queráis y lo que queráis.
      </p>
      <p>
        Dejaremos la habitación sobre las 11:00 para poder sacar el coche y
        realizar con tiempo suficiente la siguiente actividad. Así que
        organizaros como queráis.
      </p>
      <my-container-center>
        <my-link href="https://goo.gl/maps/wkzh8BUGkKVoYqE37" target="_blank">
          <font-awesome-icon icon="fa-solid fa-location-dot" /> Ver Ubicación
        </my-link>
        <my-link
          href="https://paradores.es/es/parador-de-alcala-de-henares"
          target="_blank"
        >
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
  name: 'MyBreakfast',

  components: {
    MyContainerCenter,
    MyTag,
    MyLink
  }
}
</script>

<style lang="scss">
.my-breakfast {
  padding-top: 6rem;
  padding-bottom: 4rem;
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

  .next-day {
    position: relative;
    margin: 0 auto;
    padding: 1rem;
    width: 90%;
    background: $color-2;
    margin-bottom: 4rem;

    h2 {
      color: $color-5;
      font-size: 45px;
    }

    &::before {
      background-image: url('@/assets/img/cinta-1.svg');
      position: absolute;
      content: '';
      background-size: contain !important;
      background-repeat: no-repeat;
      background-position: right;
      height: 100%;
      width: 16px;
      left: -15px;
      top: 0;
    }

    &::after {
      background-image: url('@/assets/img/cinta-2.svg');
      position: absolute;
      content: '';
      background-size: contain !important;
      background-repeat: no-repeat;
      background-position: left;
      height: 100%;
      width: 16px;
      right: -15px;
      top: 0;
    }
  }
}
</style>
