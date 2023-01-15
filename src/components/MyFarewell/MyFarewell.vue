<template>
  <section id="farewell" class="my-farewell">
    <div class="my-farewell-container">
      <h2>La Despedida</h2>

      <my-container-center>
        <my-tag> <font-awesome-icon icon="fa-solid fa-clock" /> 16:00 </my-tag>
      </my-container-center>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quia
        magni animi beatae accusantium? Asperiores, qui quisquam facere
        consectetur deleniti sed ipsa iure, quam voluptatibus inventore corporis
        doloribus rem. Hic!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nemo
        tempora, hic, voluptas distinctio eius atque fuga corrupti a adipisci
        itaque, consectetur recusandae reiciendis accusantium praesentium
        eveniet. Iusto, corporis dignissimos?
      </p>
    </div>
  </section>
</template>

<script>
import MyContainerCenter from '@/components/MyContainerCenter/MyContainerCenter'
import MyTag from '@/components/MyTag/MyTag'

export default {
  name: 'MyFarewell',

  components: {
    MyContainerCenter,
    MyTag
  }
}
</script>

<style lang="scss">
.my-farewell {
  padding-top: 5rem;
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
