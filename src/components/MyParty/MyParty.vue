<template>
  <section class="my-party">
    <div class="my-party-container">
      <h2>La Fiesta</h2>
      <h3>Hanoi House</h3>

      <my-container-center>
        <my-tag> <font-awesome-icon icon="fa-solid fa-clock" /> 00:00 </my-tag>
      </my-container-center>

      <img src="@/assets/img/hanoi.webp" alt="" />

      <p>
        Después de comer y beber todo lo que queramos hasta reventar, iremos a
        este famoso pub del centro de la ciudad donde podremos bailar y seguir
        bebiendo.
      </p>
      <p>
        Este local cuenta con una gran terraza y una zona de copas donde ponen
        música de todo tipo. Dadle la murga al DJ para que os ponga vuestra
        canción favorita.
      </p>
      <p>
        El pub se encuentra detrás del Ayuntamiento, por lo que seguís teniendo
        muy a mano vuestra habitación y pertenencias si las necestáis en
        cualquier momento dado.
      </p>

      <my-container-center>
        <my-link href="https://goo.gl/maps/JaDfzvhMxM6tTueD7" target="_blank">
          <font-awesome-icon icon="fa-solid fa-location-dot" /> Ver Ubicación
        </my-link>
        <my-link
          href="https://www.instagram.com/hanoihousealcala"
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
  name: 'MyParty',

  components: {
    MyContainerCenter,
    MyTag,
    MyLink
  }
}
</script>

<style lang="scss">
.my-party {
  padding-top: 2rem;
  background: $color-5;
  padding-bottom: 3rem;

  &-container {
    width: 95%;
    max-width: 768px;
    margin: 0 auto;
    z-index: 999;
    position: relative;
  }
}
</style>
