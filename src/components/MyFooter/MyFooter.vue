<template>
  <footer class="my-footer">
    <h3>Ana ❤ Jose</h3>
    <h3>2023</h3>
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
  background: $color-5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    color: $color-2;
    padding-bottom: 0.4rem;
  }
}
</style>
