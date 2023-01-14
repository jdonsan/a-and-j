<template>
  <section class="my-place">
    <div class="my-place-container">
      <h2>El Lugar</h2>
      <h3>Alcalá de Henares</h3>
      <img src="@/assets/img/alcala.jpeg" alt="" />
      <p>
        Después de 10 años, 8.124 paseos, 1.280 comidas, 500 películas, 50
        conciertos, infinitas celebraciones, después de 9 años viviendo juntos,
        después de tantos y tantos buenos momentos compartidos y, sobre todo,
        después de tanta expectativa creada, el gran día llega... ¡Nos casamos!
      </p>
      <p>
        Os invitamos a un fin de semana diferente en Alcalá de Henares,
        Patrimonio de la Humanidad, para celebrar nuestro amor y vuestro cariño.
        Un fin de semana para comer y beber, reir y llorar, bailar y descansar,
        para aprender, conocer y no parar... en definitiva, un fin de semana
        para disfrutar.
      </p>
      <p>
        Queremos que aprovechéis este fin de semana para conocer más a nuestras
        familias, para que redescubráis a vuestras parejas o amigos y para que
        guardéis un dia especial en vuestros recuerdos. Estad atentos a todo lo
        que tenemos planeado para vosotros y vosotras.
      </p>

      <my-container-center>
        <my-link href="https://goo.gl/maps/aSKrSJ57gJDZuP9T9" target="_blank">
          <font-awesome-icon icon="fa-solid fa-location-dot" /> Ver Ubicación
        </my-link>
        <my-link
          href="https://es.wikipedia.org/wiki/Alcal%C3%A1_de_Henares"
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
import MyLink from '@/components/MyLink/MyLink'

export default {
  name: 'MyPlace',

  components: {
    MyContainerCenter,
    MyLink
  }
}
</script>

<style lang="scss">
.my-place {
  padding-top: 15rem;
  background: $color-5;
  padding-bottom: 8rem;
  position: relative;

  &::after {
    background-image: url('@/assets/img/curva-1.svg');
    position: absolute;
    content: '';
    background-size: contain !important;
    background-repeat: no-repeat;
    background-position: bottom center;
    height: 100%;
    width: 100%;
    bottom: 1rem;
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
