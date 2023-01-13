<template>
  <footer class="my-footer">
    <h3>Ana ❤ Jose</h3>
    <h3>2013</h3>
  </footer>
</template>

<script>
export default {
  name: 'MyFooter'
}
</script>

<style lang="scss">
.my-footer {
  padding-top: 2rem;
  padding-bottom: 1.6rem;
  background: $color-2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    color: $color-5;
    padding-bottom: 0.4rem;
  }
}
</style>
