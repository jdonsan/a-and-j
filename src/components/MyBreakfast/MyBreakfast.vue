<template>
  <section class="my-breakfast">
    <div class="my-breakfast-container">
      <div class="next-day">
        <h2>Y al día siguiente...</h2>
      </div>

      <h2>El desayuno</h2>
      <h3>Parador de Alcalá de Henares</h3>

      <my-tags-container>
        <my-tag>
          <font-awesome-icon icon="fa-solid fa-clock" /> 08:00 - 10:00
        </my-tag>
      </my-tags-container>

      <img src="@/assets/img/breakfast.jpg" alt="" />
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
  name: 'MyBreakfast',

  components: {
    MyTag,
    MyTagsContainer
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
    margin: 0 auto;
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
