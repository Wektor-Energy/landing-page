<template>
  <lp-header :nav-options="['Sobre nós', 'Solução', 'Vantagens', 'Contato']" />
  <about-us />
</template>

<script>
import LpHeader from "@/components/LpHeader.vue";
import { AboutUs } from "./Sections";

export default {
  name: "LandingPage",
  components: {
    "lp-header": LpHeader,
    "about-us": AboutUs,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
