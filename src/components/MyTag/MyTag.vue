<template>
  <span class="my-tag">
    <slot />
  </span>
</template>

<script>
export default {
  name: 'MyTag'
}
</script>

<style lang="scss">
.my-tag {
  background: $color-3;
  border-radius: 1rem;
  display: inline-block;
  padding: 0.5rem;
  color: $color-5;
  font-family: $font-2;
  font-weight: $weight-font-regular;
  margin: 1rem auto;
}
</style>
