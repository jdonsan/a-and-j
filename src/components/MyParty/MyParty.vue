<template>
  <section class="my-party">
    <div class="my-party-container">
      <h2>La Fiesta</h2>
      <h3>Hanoi House</h3>

      <my-tags-container>
        <my-tag> <font-awesome-icon icon="fa-solid fa-clock" /> 00:00 </my-tag>
      </my-tags-container>

      <img src="@/assets/img/hanoi.webp" alt="" />

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
  name: 'MyParty',

  components: {
    MyTag,
    MyTagsContainer
  }
}
</script>

<style lang="scss">
.my-party {
  padding-top: 2rem;
  background: $color-5;
  padding-bottom: 1rem;

  &-container {
    width: 95%;
    margin: 0 auto;
  }
}
</style>
