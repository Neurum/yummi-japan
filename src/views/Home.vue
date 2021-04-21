<template>
  <div class="home">
    <div class="name">
      YUMMI&ensp; JAPAN
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
p {
  font-size: 1.5rem;
  margin-top: 1.5rem;
}
.home {
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  width: 80%;
}
.name {
  padding-top: 1rem;
  font-family: 'Moyko', san-serif;
  font-size: 7rem;
}
</style>
