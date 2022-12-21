<template>
  <section class="my-ceremony">
    <div class="my-ceremony-container">
      <h2>La Ceremonia</h2>
      <h3>Ayuntamiento de Alcalá de Henares</h3>

      <my-container-center>
        <my-tag>
          <font-awesome-icon icon="fa-solid fa-clock" /> 18:14 - 19:00
        </my-tag>
      </my-container-center>

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

      <my-container-center>
        <my-link
          href="https://www.google.com/search?q=ayuntamiento+de+alcala+de+henares&hotel_occupancy=2&tbm=lcl&ei=mS6jY-KHEJ-1kdUP1ZKb-AE&ved=0ahUKEwiiuKiui4v8AhWfWqQEHVXJBh8Q4dUDCAk&uact=5&oq=ayuntamiento+de+alcala+de+henares&gs_lcp=Cg1nd3Mtd2l6LWxvY2FsEAMyCwgAEIAEELEDEIMBMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgUIABCiBDoHCAAQHhCiBDoGCAAQFhAeUMgGWP4HYNcJaABwAHgAgAGBAYgBtwOSAQMxLjOYAQCgAQHAAQE&sclient=gws-wiz-local#rlfi=hd:;si:16165404939716334455,l,CiFheXVudGFtaWVudG8gZGUgYWxjYWxhIGRlIGhlbmFyZXNIyubNiuy1gIAIWjUQABgAGAEYAhgDGAQiIWF5dW50YW1pZW50byBkZSBhbGNhbGEgZGUgaGVuYXJlcyoECAMQAJIBCWNpdHlfaGFsbJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VObGRuWXpjR04zRUFFqgEUEAEqECIMYXl1bnRhbWllbnRvKA4;mv:[[40.48946817486701,-3.3570940068237354],[40.476003564296555,-3.387735562609868],null,[40.48273620718678,-3.372414784716802],16]"
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
