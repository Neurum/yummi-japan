<template>
  <div class="home">
    <div class="name">
      YUMMI JAPAN
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
};
</script>

<style lang="scss" scoped>
.home {
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  width: 80%;
}
.name {
  padding-top: 1rem;
  font-family: 'Moyko', san-serif;
  font-size: 4rem;
}
</style>
