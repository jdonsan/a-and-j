<template>
  <section class="my-preparation">
    <div class="my-preparation-container">
      <h2>La Preparación</h2>
      <h3>Parador de Alcalá de Henares</h3>

      <my-container-center>
        <my-tag>
          <font-awesome-icon icon="fa-solid fa-clock" /> 16:00 - 18:00
        </my-tag>
      </my-container-center>

      <img src="@/assets/img/preparation.jpg" alt="" />
      <p>
        Es el momento de ponerse guapos y guapas. Aprovecha este momento para
        ponerte música y arreglarte bailando y recordad como fue el día que nos
        conociste, para echarte una siesta rápida o hacer lo que te apetezca con
        tu pareja o amigos.
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
  name: 'MyPreparation',

  components: {
    MyContainerCenter,
    MyTag,
    MyLink
  }
}
</script>

<style lang="scss">
.my-preparation {
  padding-top: 8rem;
  padding-bottom: 4rem;
  background: $color-5;
  position: relative;

  &-container {
    width: 95%;
    max-width: 768px;
    margin: 0 auto;
    z-index: 999;
    position: relative;
  }
}
</style>
