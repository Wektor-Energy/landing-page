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
    <div class="section-3">
      <div class="section-description-container">
        <div class="description-header section-title">
          <label>GESTÃO INTELIGENTE</label>
          <a>Maior precisão e rentabilidade<label>.</label></a>
        </div>
        <a>
          A partir dos dados, a Inteligência Artificial Generativa realiza
          análises complexas, relatórios e direcionamentos de gestão, evitando
          possíveis falhas humanas nas interpretações e nas tomadas de
          decisões.<br /><br />
          Tudo para aumentar a rentabilidade do negócio. Assista ao vídeo:
        </a>
      </div>
      <div class="video-section">
        <video controls>
          <source src="@/assets/videos/presentation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
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
  padding: 48px 46px;
  align-items: center;
  background-color: var(--White);
  display: flex;
  flex-direction: column;
  gap: var(--Scale-8);
}

.section-container > div {
  display: flex;
  flex-wrap: wrap;
}

.section-1 {
  width: 100%;
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

.section-3 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: var(--Scale-8);
}

.section-description-container {
  flex: 1 1 30%;
  display: flex;
  flex-direction: column;
  gap: var(--Scale-8);
  flex-shrink: 0;
}

.section-description-container > a {
  align-self: stretch;
  text-align: left;
  color: var(--Black, #000);
  font-family: var(--sds-typography-subheading-font-family);
  font-size: var(--sds-typography-subheading-size-medium);
  font-style: normal;
  font-weight: var(--sds-typography-subheading-font-weight);
  line-height: 150%;
}

.description-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--Scale-5);
  align-self: stretch;
}

.description-header > label {
  color: var(--primary-600);
  font-family: var(--sds-typography-body-font-family);
  font-size: var(--sds-typography-body-size-medium);
  font-style: normal;
  font-weight: var(--sds-typography-body-font-weight-strong);
  line-height: 140%;
}

.video-section {
  flex: 1 1 60%;
}

.img-section {
  display: flex;
  overflow: hidden;
  aspect-ratio: 2.5/1;
}

.video-section > video,
.img-section > img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: var(--Scale-3);
}

a > label {
  color: var(--secondary-600) !important;
}

.section-title {
  color: var(--primary-1000);
  font-family: var(--sds-typography-title-page-font-family);
  font-size: var(--sds-typography-title-page-size-base);
  font-style: normal;
  font-weight: var(--sds-typography-title-page-font-weight);
  line-height: 140%;
  letter-spacing: -0.96px;
  text-align: left;
  display: flex;
}
</style>
