<template>
  <div class="background">
    <Navbar />
    <router-view />
  </div>
  <Footer />
</template>

<script>
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

body {
  &::-webkit-scrollbar {
    width: 1rem;

    &-track {
      background: #2f2f2f;
    }

    &-thumb {
      background: #317b86;
    }
  }
}

@font-face {
  font-family: 'Moyko';
  src: url('./assets/fonts/Moyko.ttf');
  font-weight: normal;
  font-style: normal;
}
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2f2f2f;
}
.background {
  background-image: url('./assets/images/image2.jpg');
  width: 100%;
  height: 100vh;
  background-size: cover;
}
</style>
