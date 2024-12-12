<template>
  <div class="section-container">
    <div class="section-1">
      <div class="section-title">
        <a>Tudo integrado em uma única plataforma<label>.</label></a>
      </div>
      <div class="img-section">
        <img alt="Solar Engenieer" src="@/assets/images/worker.jpg" />
      </div>
    </div>
    <div class="section-2">
      <section-card
        v-for="(card, index) in cards"
        v-bind:key="index"
        :label="card.label"
        :title="card.title"
        :body="card.body"
        :Image="card.Image"
      />
    </div>
  </div>
</template>
<script>
import SectionCard from "@/components/SectionCard.vue";
export default {
  name: "SolutionSection",
  components: {
    "section-card": SectionCard,
  },
  data() {
    return {
      cards: [
        {
          label: "DADOS TÉCNICOS",
          title: "Operacionais e Performance",
          body: "Gestão operacional integrada de plataformas, SPEs e plantas, com a  classificação de ativos conforme dados operacionais.",
          Image: require("@/assets/images/dashboard.png"),
        },
        {
          label: "DADOS FINANCEIROS",
          title: "Custos e Resultados",
          body: "Gestão financeira completa a partir dos impactos operacionais e classificação de ativos conforme dados financeiros.",
          Image: require("@/assets/images/dashboard.png"),
        },
        {
          label: "INSIGHTS",
          title: "Análises e Recomendações",
          body: "IA Generativa na gestão de plantas e plataformas, além da geração de rating dos ativos para análises estratégicas e mitigação de riscos.",
          Image: require("@/assets/images/dashboard.png"),
        },
      ],
    };
  },
};
</script>
<style scoped>
.section-container {
  margin: -80px 0px;
  padding: 128px 46px;
  align-items: center;
  background-color: var(--primary-100);
  display: flex;
  flex-direction: column;
  gap: var(--Scale-8);
}

.section-container > div {
  display: flex;
  flex-wrap: wrap;
}

.section-1 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: var(--Scale-8);
}

.section-1 > * {
  flex: 1 1 47%;
}

.section-2 {
  gap: 20px;
}

.section-2 > * {
  flex: 1 1 30%;
}

.img-section {
  display: flex;
  overflow: hidden;
  height: 200px;
  border-radius: var(--Scale-3);
}

.img-section > img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

a > label {
  color: var(--secondary-600) !important;
}

.section-title {
  font-family: var(--sds-typography-title-page-font-family);
  font-size: var(--sds-typography-title-page-size-base);
  font-style: normal;
  font-weight: var(--sds-typography-title-page-font-weight);
  line-height: 140%;
  letter-spacing: -0.96px;
  text-align: left;
  display: flex;
  align-items: center;
}
</style>
