<template>
  <div class="section-container">
    <div class="cards-section">
      <a class="title">
        Mais vantagens para sua empresa<label class="primary">.</label>
      </a>
      <div class="cards-list">
        <advantage-card
          v-for="(card, index) in cards"
          :icon="card.icon"
          :text="card.text"
          :key="index"
        />
      </div>
    </div>
    <div class="wektor-about-section">
      <div class="wektor-about">
        <a class="title">
          Inovação e experiência<label class="secondary">.</label>
        </a>
        <a>
          A Wektor nasce dos conhecimentos dos seus fundadores:
          <b>Alberto Bednarck e Jeferson Marques.</b> <br /><br />
          Ambos carregam a experiência de mais de
          <b>20 anos de gestão no mercado de geração de energia</b> no Brasil e
          na Europa.
        </a>
      </div>
      <div class="wektor-founders">
        <founder-card
          name="Jeferson Marques"
          :Image="require('@/assets/images/jeferson.png')"
          description="Executivo com mais de 20 anos de história comprovada de trabalho na indústria de energia renovável. Hábil em gestão de ativos, financiamento de projetos, avaliação de riscos, negociação de contratos, inovação (digitalização, IA, cibersegurança, BESS e Green H2) e análise de dados com foco em resultados financeiros e satisfação dos clientes."
          linkedinUrl="https://www.linkedin.com/in/jeferson-marques-4a298321/"
        />
        <founder-card
          name="Alberto Bednarck"
          :Image="require('@/assets/images/alberto.png')"
          description="Mais de 23 anos dedicados ao mercado e indústria energética. Experiência profissional baseada em serviços de O&M, consultoria especializada, desenvolvimento de Engenharia e Gestão de serviços em diferentes projetos, ativos e tecnologias para diferentes perfis de clientes do mercado de geração de energia."
          linkedinUrl="https://www.linkedin.com/in/alberto-bednarck-67930637/"
        />
      </div>
    </div>
  </div>
</template>
<script>
import AdvantageCard from "@/components/Advantages/AdvantageCard.vue";
import FounderCard from "@/components/Advantages/FounderCard.vue";

export default {
  name: "AdvamtagesSection",
  components: {
    "advantage-card": AdvantageCard,
    "founder-card": FounderCard,
  },
  data() {
    return {
      cards: [
        {
          icon: require("@/assets/icons/energy.svg"),
          text: "Gestão de Plantas, Plataformas e SPE's de forma integrada, proporcionando maior clareza e visibilidade.",
        },
        {
          icon: require("@/assets/icons/target.svg"),
          text: "Metodologia de gestão focada em resultados - Maior assertividade nas decisões, melhores resultados.",
        },
        {
          icon: require("@/assets/icons/money.svg"),
          text: "Classificação de ativos e rating de mercado, possibilitando análises estratégicas, benchmarking e mitigação de riscos.",
        },
        {
          icon: require("@/assets/icons/graph.svg"),
          text: "Reports gerenciais objetivos e concisos, tornando a comunicação rápida e assertiva.",
        },
        {
          icon: require("@/assets/icons/cycle.svg"),
          text: "Otimização de processos e consequentemente de recursos necessários para as gestões de ativos.",
        },
      ],
    };
  },
};
</script>
<style scoped>
.cards-section {
  display: flex;
  width: 100%;
  padding: 56px 46px;
  flex-direction: column;
  align-items: flex-start;
  gap: 56px;

  border-radius: 64px;
  background: var(--secondary-600);
}

.cards-list {
  gap: var(--Scale-4);
  display: flex;
  justify-content: center;
  align-self: stretch;
  flex-wrap: wrap;
}

.section-container {
  background-color: var(--White);
}

.title {
  align-self: stretch;
  color: var(--primary-1000);
}

.title,
label {
  font-family: var(--sds-typography-title-page-font-family);
  font-size: var(--sds-typography-title-page-size-base);
  font-style: normal;
  font-weight: var(--sds-typography-title-page-font-weight);
  line-height: 120%;
  letter-spacing: -0.96px;
}

a > label.secondary {
  color: var(--secondary-600);
}

.title > label.primary {
  color: var(--primary-600);
}

.wektor-about-section {
  display: inline-flex;
  padding: 80px 46px;
  gap: 48px 114px;
  width: 100%;
  flex-wrap: wrap;
}

.wektor-about {
  flex: 1 1 25%;
  gap: var(--Scale-8);
  text-align: left;
}

.wektor-founders {
  flex: 1 1 65%;
  display: flex;
  gap: var(--Scale-4);
}

.wektor-about,
.wektor-founders {
  display: flex;
  flex-direction: column;
}

.founder-container {
  display: flex;
  width: 100%;
  padding: var(--Scale-4) var(--Scale-5);
  align-items: center;
  gap: var(--Scale-5);
  border-radius: var(--Scale-6);
  background: var(--primary-100);
}
</style>
