<template>
  <div class="footer">
    <div class="socials">
      <i class="fab fa-yelp"></i>
      <i class="fab fa-facebook-f"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-instagram"></i>
    </div>
    <div>
      <p>&copy; Copyright Yummi Japan 2021</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 8rem;
  background: #2f2f2f;
  color: #cacaca;
}
.socials {
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  width: 20%;
  font-size: 1.5rem;
}
</style>
