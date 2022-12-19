<template>
  <section class="my-preparation">
    <div class="my-preparation-container">
      <h2>La Preparación</h2>
      <h3>Parador de Alcalá de Henares</h3>

      <my-tags-container>
        <my-tag>
          <font-awesome-icon icon="fa-solid fa-clock" /> 16:00 - 18:00
        </my-tag>
      </my-tags-container>

      <img src="@/assets/img/preparation.jpg" alt="" />
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
    </div>
  </section>
</template>

<script>
import MyTag from '@/components/MyTag/MyTag'
import MyTagsContainer from '@/components/MyTagsContainer/MyTagsContainer'

export default {
  name: 'MyPreparation',

  components: {
    MyTag,
    MyTagsContainer
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
    margin: 0 auto;
  }
}
</style>
