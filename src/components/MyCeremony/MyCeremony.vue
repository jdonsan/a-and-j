<template>
  <section class="my-ceremony">
    <div class="my-ceremony-container">
      <h2>La Ceremonia</h2>
      <h3>Ayuntamiento de Alcalá de Henares</h3>

      <my-container-center>
        <my-tag>
          <font-awesome-icon icon="fa-solid fa-clock" /> 18:15 - 19:00
        </my-tag>
      </my-container-center>

      <img src="@/assets/img/ayuntamiento.png" alt="" />
      <p>
        La Ceremonia se hará en el Ayuntamiento de Alcalá, a escasos metros del
        Parador donde nos alojaremos. Podréis ir andando sin problemas mientras
        disfrutáis de la arquitectura de la zona Universitaria de la ciudad.
      </p>
      <p>
        La Ceremonia durará 30 minutos y será un acto donde formalizaremos
        nuestro matrimonio. Si queréis saber más de cómo será el evento, pinchad
        en el enlace de 'Saber Más'.
      </p>
      <my-container-center>
        <my-link
          href="https://maps.app.goo.gl/CCncFsLic8H2pCKj8"
          target="_blank"
        >
          <font-awesome-icon icon="fa-solid fa-location-dot" /> Ver Ubicación
        </my-link>
        <my-link
          href="https://bodas.ayto-alcaladehenares.es/organizacion-ceremonia/"
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
  name: 'MyCeremony',

  components: {
    MyContainerCenter,
    MyTag,
    MyLink
  }
}
</script>

<style lang="scss">
.my-ceremony {
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
}
</style>
