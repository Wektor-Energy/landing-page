<template>
  <LandingPage />
</template>

<script>
import LandingPage from "./views/LandingPage/LandingPage.vue";

export default {
  name: "App",
  components: {
    LandingPage,
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  background-color: var(--primary-600);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

#app {
  font-family: var(--font-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
