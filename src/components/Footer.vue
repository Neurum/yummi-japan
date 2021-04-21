<template>
  <div class="footer">
    <div class="socials">
      <a href="https://www.yelp.com"><i class="fab fa-yelp"></i></a>
      <a href="https://www.facebook.com"><i class="fab fa-facebook-f"></i></a>
      <a href="https://www.twitter.com"><i class="fab fa-twitter"></i></a>
      <a href="https://www.instagram.com"><i class="fab fa-instagram"></i></a>
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
  font-size: 2.5rem;
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

  & a {
    font-size: 3rem;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }
}
</style>
