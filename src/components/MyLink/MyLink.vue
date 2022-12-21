<template>
  <a class="my-link">
    <slot />
  </a>
</template>

<script>
export default {
  name: 'MyButton'
}
</script>

<style lang="scss">
.my-link {
  display: inline-block;
  background: $color-2;
  color: $color-5;
  font-family: $font-2;
  font-weight: $weight-font-regular;
  padding: 1rem;
  border-radius: 5rem;
  margin: 0.5rem;
  text-decoration: none;
}
</style>
