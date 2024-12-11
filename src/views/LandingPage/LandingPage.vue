<template>
  <lp-header :nav-options="navOptions" :onClick="goToSection" />
  <div class="content">
    <about-us-section id="section_1" />
    <solution-section id="section_2" />
  </div>
</template>

<script>
import LpHeader from "@/components/LpHeader.vue";
import { AboutUs, Solution } from "./Sections";

export default {
  name: "LandingPage",
  components: {
    "lp-header": LpHeader,
    "about-us-section": AboutUs,
    "solution-section": Solution,
  },
  data() {
    return {
      navOptions: [
        {
          id: 1,
          label: "Sobre nós",
        },
        {
          id: 2,
          label: "Solução",
        },
        {
          id: 3,
          label: "Vantagens",
        },
        {
          id: 4,
          label: "Contato",
        },
      ],
    };
  },
  methods: {
    goToSection(id) {
      const section = document.getElementById(`section_${id}`);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  background-color: aqua;
}
.content {
  position: relative;
  width: 100%;
  overflow: hidden;
}
</style>
