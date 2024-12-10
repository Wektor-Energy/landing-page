<template>
  <lp-header :nav-options="['Sobre nós', 'Solução', 'Vantagens', 'Contato']" />
</template>

<script>
import LpHeader from '@/components/LpHeader.vue';

export default {
  name: 'LandingPage',
  components: {
    "lp-header": LpHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
