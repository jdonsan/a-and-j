<template>
  <section id="hotel" class="my-hotel">
    <div class="my-hotel-container">
      <h2>La Recepción</h2>
      <h3>Parador de Alcalá de Henares</h3>

      <my-container-center>
        <my-tag>
          <font-awesome-icon icon="fa-solid fa-clock" /> 14:00 - 16:00
        </my-tag>
      </my-container-center>

      <img src="@/assets/img/parador.jpg" alt="" />
      <p>
        Os recibiremos en este bonito y céntrico Hotel de la ciudad &#128522;.
        Tendréis a vuestra disposición una <b>habitación doble</b> con
        <b>plaza de aparcamiento</b>.
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
      <br />
      <br />
      <p>
        Si lo desáis, podréis aprovechar este momento para conocer los
        alrededores y comer algo antes de los preparativos: Un buen lugar de
        tapas para picotear algo y cercano al Parador es <b>'La Zarza'</b>.
      </p>

      <my-container-center>
        <my-link href="https://goo.gl/maps/8ecGSZA8pzyT1SKf8" target="_blank">
          <font-awesome-icon icon="fa-solid fa-location-dot" /> Ver Ubicación
          'La Zarza'
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
  name: 'MyHotel',

  components: {
    MyContainerCenter,
    MyTag,
    MyLink
  }
}
</script>

<style lang="scss">
.my-hotel {
  padding-top: 3rem;
  padding-bottom: 2rem;
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
    max-width: 768px;
    margin: 0 auto;
    z-index: 999;
    position: relative;
  }
}
</style>
