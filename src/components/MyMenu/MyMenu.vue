<template>
  <div class="my-menu">
    <div :class="['my-menu-button', { open: isOpen }]" @click="toggle">
      <div class="my-menu-button-container">
        <font-awesome-icon
          :icon="'fa-solid ' + (isOpen ? 'fa-xmark' : 'fa-bars')"
        />
      </div>
    </div>
    <ul :class="[{ open: isOpen }]">
      <li><a @click="toggle" href="#place">El Lugar</a></li>
      <li><a @click="toggle" href="#hotel">La Recepción</a></li>
      <li><a @click="toggle" href="#preparation">La Preparación</a></li>
      <li><a @click="toggle" href="#ceremony">La Ceremonia</a></li>
      <li><a @click="toggle" href="#photos">Las Fotos</a></li>
      <li><a @click="toggle" href="#celebration">La Celebración</a></li>
      <li><a @click="toggle" href="#party">La Fiesta</a></li>
      <li><a @click="toggle" href="#breakfast">El Desayuno</a></li>
      <li><a @click="toggle" href="#tour">El Tour</a></li>
      <li><a @click="toggle" href="#lunch">La Comida</a></li>
      <li><a @click="toggle" href="#farewell">La Despedida</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyMenu',

  data() {
    return {
      isOpen: false
    }
  },

  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss">
.my-menu {
  &-button {
    width: 80px;
    height: 80px;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    @include flex-center();

    &-container {
      width: 48px;
      height: 48px;
      border-radius: 100%;
      background: rgba($color-1, 0.3);
      @include flex-center();
      color: $color-1;
      font-size: 16px;
    }

    &.open {
      z-index: 1001;

      .my-menu-button-container {
        background: rgba($color-1, 1);
        color: $color-5 !important;
      }
    }
  }

  ul {
    display: none;
    opacity: 0;
    position: fixed;
    z-index: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 1rem;
    background: rgba($color-1, 0.95);
    display: fixed;
    z-index: 1000;
    padding-top: 80px;
    padding-left: 24px;

    &.open {
      display: block;
      opacity: 1;
      animation: fade-in 0.5s ease;
    }

    li {
      padding: 0.4rem 0 0.4rem;

      a {
        color: $color-4;
        font-family: $font-2;
        text-decoration: none;
        font-size: 1.6rem;
      }
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
