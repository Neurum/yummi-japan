<template>
  <div id="nav">
    <div class="logo">
      Y J
    </div>
    <div class="nav-menu">
      <router-link to="/">Home</router-link>
      <router-link to="/menu">Menu</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/locations">Locations</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#nav {
  padding: 5px 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-weight: bold;
    color: #2f2f2f;

    &.router-link-exact-active {
      color: #317b89;
      text-decoration: overline;
    }
  }
}

.logo {
  font-family: 'Moyko', san-serif;
  font-size: 5rem;
  padding-left: 3rem;
}

.nav-menu {
  a {
    padding-right: 3rem;
    font-size: 2.25rem;
    text-decoration: none;
  }
}
</style>
